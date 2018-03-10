const {logger}                       = require('@log/logger');
const {tracecodes}                   = require('@tracecodes');
const {encrypt}                      = require('@utils/crypto');

const mongoose                       = require('mongoose');
const jwt                            = require('jsonwebtoken');
const {DataAPIClient}                = require('truelayer-client');

/*----------------------------------------------------------------*/

const UserSchema = new mongoose.Schema({
    // email: {
    //     type: String,
    //     required: true
    //     // validate the email
    // },
    tokens: [{
        access: {
            type: String,
            required: true,
        },
        token: {
            type: String,
            required: true,
        },
        // truelayer tokens
        access_token: {
            type: String,
            required: true,
        },
        refresh_token: {
            type: String,
            required: true, // required because we use offline_access scope
        }
    }],
    // We will dump the transactions into the UserSchema
    transactions: [],
});

// This method is used to push the truelayer access token into the DB
// We return the custom token to the user for re-use.
UserSchema.methods.generateAuthToken = function(access_token, refresh_token) {

    var user = this;

    var access = 'auth'; // we are generating an auth token

    // we get the web token based on the user._id attribute
    var objectToTokenify = {_id: user._id.toHexString(), access};

    var token = jwt.sign(objectToTokenify, process.env.JWT_SECRET).toString();

    logger.info({
        code: tracecodes.AUTH_TOKEN_GENERATION_REQUEST,
        app_token: token,
    });

    const encrypted_access = encrypt(access_token);
    const encrypted_refresh = encrypt(refresh_token);

    // We encrypt the truelayer tokens before saving
    const newToken = {
        access: access,
        token: token,
        access_token: encrypted_access,
        refresh_token: encrypted_refresh
    };

    user.tokens = [newToken];

    return user.save().then(() => {

        logger.info({
            code: tracecodes.AUTH_TOKEN_GENERATION_SUCCESS,
            app_token: token,
        });

        return {
            access,
            token,
            access_token,
            refresh_token
        };
    });
};

/**
 * TODO: Refactor? Most of this code is re-usable
 */
UserSchema.statics.updateAuthToken = async function(id, access_token, refresh_token) {

    var User = this;

    var access = 'auth'; // we are generating an auth token

    // we get the web token based on the user._id attribute
    var objectToTokenify = {_id: id.toHexString(), access};

    var token = jwt.sign(objectToTokenify, process.env.JWT_SECRET).toString();

    logger.info({
        code: tracecodes.AUTH_TOKEN_UPDATE_REQUEST,
        app_token: token,
    });

    // We encrypt the truelayer tokens before saving
    const encrypted_access = encrypt(access_token);
    const encrypted_refresh = encrypt(refresh_token);

    // We encrypt the truelayer tokens before saving
    const newToken = [{
        access: access,
        token: token,
        access_token: encrypted_access,
        refresh_token: encrypted_refresh
    }];

    return await User.update({
                    _id: id
                }, {
                    $set: {
                        tokens: newToken
                    }
                }).then(() => {

                    logger.info({
                        code: tracecodes.AUTH_TOKEN_UPDATE_SUCCESS,
                        app_token: token,
                    });

                    // Send token and decrypted version of access_token back
                    return {
                        token,
                        access_token
                    };
                });
}

// This method is used to save the transactions into the DB
UserSchema.statics.saveTransactions = async function(results, id) {

    var User = this;

    if (typeof results === 'undefined') {

        return Promise.reject();
    }

    logger.info({
        code: tracecodes.SAVE_TRANSACTIONS_REQUEST,
        transactions: results,
        user_id: id
    });

    // We update the transactions into the user's row in the DB in async fashion
    return await User.update({
                    _id: id
                }, {
                    $set: {
                        transactions: results
                    }
                }).then(() => {

                    return results;
                });
};

// We want to find the user by the custom token
UserSchema.statics.findByToken = function(token) {
    var User = this; // Model method, so this = User model

    logger.info({
        code: tracecodes.FIND_USER_BY_TOKEN_REQUEST,
        app_token: token,
    });

    try {
        // We get the user id based on the web token
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (e) {
        return Promise.reject();
    }

    return User.findOne({
        "_id": decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

const User = mongoose.model('User', UserSchema);

module.exports = {User};