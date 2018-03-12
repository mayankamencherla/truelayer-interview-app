/**
 * This class contains the tracecodes used throughout the application
 */

const tracecodes = {
    AUTHENTICATION_REQUEST           : 'AUTHENTICATION_REQUEST',
    TRUELAYER_AUTH_URL               : 'TRUELAYER_AUTH_URL',
    AUTH_CALLBACK_REQUEST            : 'AUTH_CALLBACK_REQUEST',
    AUTH_CALLBACK_ERROR              : 'AUTH_CALLBACK_ERROR',
    ERROR_EXCHANGING_CODE_FOR_TOKEN  : 'ERROR_EXCHANGING_TOKEN',
    TOKEN_VALIDATION_FAILURE         : 'TOKEN_VALIDATION_FAILURE',
    APP_AUTH_TOKEN_GENERATED         : 'APP_AUTH_TOKEN_GENERATED',
    APP_AUTH_TOKEN_GENERATION_FAILED : 'APP_AUTH_TOKEN_GENERATION_FAILED',
    FETCHING_CUSTOMER_INFO           : 'FETCHING_CUSTOMER_INFO',
    AUTHENTICATED_CUSTOMER_INFO      : 'AUTHENTICATED_CUSTOMER_INFO',
    ERROR_FETCHING_CUSTOMER_INFO     : 'ERROR_FETCHING_CUSTOMER_INFO',
    AUTHENTICATION_VIA_MIDDLEWARE    : 'AUTHENTICATION_VIA_MIDDLEWARE',
    APP_TOKEN_NOT_SENT_IN_HEADER     : 'APP_TOKEN_NOT_SENT_IN_HEADER',
    USER_NOT_FOUND                   : 'USER_NOT_FOUND',
    AUTHENTICATED_USER_FOUND         : 'AUTHENTICATED_USER_FOUND',
    EXPIRED_ACCESS_TOKEN             : 'EXPIRED_ACCESS_TOKEN',
    ACCESS_TOKEN_RENEWAL_SUCCESS     : 'ACCESS_TOKEN_RENEWAL_SUCCESS',
    ACCESS_TOKEN_RENEWAL_FAILURE     : 'ACCESS_TOKEN_RENEWAL_FAILURE',
    UPDATE_USER_ACCESS_TOKEN_FAILURE : 'UPDATE_USER_ACCESS_TOKEN_FAILURE',
    CUSTOMER_TRANSACTIONS_REQUEST    : 'CUSTOMER_TRANSACTIONS_REQUEST',
    CUSTOMER_TRANSACTIONS_RESPONSE   : 'CUSTOMER_TRANSACTIONS_RESPONSE',
    ACCOUNT_TRANSACTIONS_RESPONSE    : 'ACCOUNT_TRANSACTIONS_RESPONSE',
    TRANSACTIONS_FETCH_FAILED        : 'TRANSACTIONS_FETCH_FAILED',
    CUSTOMER_ACCOUNTS_REQUEST        : 'CUSTOMER_ACCOUNTS_REQUEST',
    CUSTOMER_ACCOUNTS_RESPONSE       : 'CUSTOMER_ACCOUNTS_RESPONSE',
    CUSTOMER_ACCOUNT_API_CALL_ERROR  : 'CUSTOMER_ACCOUNT_API_CALL_ERROR',
    CUSTOMER_ACCOUNT_STATS_REQUEST   : 'CUSTOMER_ACCOUNT_STATS_REQUEST',
    CUSTOMER_ACCOUNT_STATS_RESPONSE  : 'CUSTOMER_ACCOUNT_STATS_RESPONSE',
    CUSTOMER_TRANSACTIONS_SAVED      : 'CUSTOMER_TRANSACTIONS_SAVED',
    CUSTOMER_TRANSACTIONS_NOT_SAVED  : 'CUSTOMER_TRANSACTIONS_NOT_SAVED',
    USER_CREATE_REQUEST              : 'USER_CREATE_REQUEST',
    AUTH_TOKEN_GENERATION_REQUEST    : 'AUTH_TOKEN_GENERATION_REQUEST',
    AUTH_TOKEN_GENERATION_SUCCESS    : 'AUTH_TOKEN_GENERATION_SUCCESS',
    AUTH_TOKEN_UPDATE_REQUEST        : 'AUTH_TOKEN_UPDATE_REQUEST',
    AUTH_TOKEN_UPDATE_SUCCESS        : 'AUTH_TOKEN_UPDATE_SUCCESS',
    SAVE_TRANSACTIONS_REQUEST        : 'SAVE_TRANSACTIONS_REQUEST',
    STORING_TRANSACTIONS_IN_REDIS    : 'STORING_TRANSACTIONS_IN_REDIS',
    FIND_TRANSACTIONS_BY_USER        : 'FIND_TRANSACTIONS_BY_USER',
    FETCHED_TRANSACTIONS_FROM_REDIS  : 'FETCHED_TRANSACTIONS_FROM_REDIS',
    FETCHED_TRANSACTIONS_FROM_DB     : 'FETCHED_TRANSACTIONS_FROM_DB',
    FIND_USER_BY_TOKEN_REQUEST       : 'FIND_USER_BY_TOKEN_REQUEST',
    DB_CONNECTION_REQUEST            : 'DB_CONNECTION_REQUEST',
    SAVING_USER_TO_DB                : 'SAVING_USER_TO_DB',
}

module.exports = {tracecodes};
