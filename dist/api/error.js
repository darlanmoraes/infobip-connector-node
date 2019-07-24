"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Error;
(function (Error) {
    // OK (group id: 0) - general error codes
    Error["NO_ERROR"] = "NO_ERROR";
    // HANDSET_ERRORS (group id: 1) - general error codes
    Error["EC_UNKNOWN_SUBSCRIBER"] = "EC_UNKNOWN_SUBSCRIBER";
    Error["EC_UNIDENTIFIED_SUBSCRIBER"] = "EC_UNIDENTIFIED_SUBSCRIBER";
    Error["EC_ABSENT_SUBSCRIBER_SM"] = "EC_ABSENT_SUBSCRIBER_SM";
    Error["EC_UNKNOWN_EQUIPMENT"] = "EC_UNKNOWN_EQUIPMENT";
    Error["EC_ROAMING_NOT_ALLOWED"] = "EC_ROAMING_NOT_ALLOWED";
    Error["EC_ILLEGAL_SUBSCRIBER"] = "EC_ILLEGAL_SUBSCRIBER";
    Error["EC_TELESERVICE_NOT_PROVISIONED"] = "EC_TELESERVICE_NOT_PROVISIONED";
    Error["EC_ILLEGAL_EQUIPMENT"] = "EC_ILLEGAL_EQUIPMENT";
    Error["EC_CALL_BARRED"] = "EC_CALL_BARRED";
    Error["EC_FACILITY_NOT_SUPPORTED"] = "EC_FACILITY_NOT_SUPPORTED";
    Error["EC_ABSENT_SUBSCRIBER"] = "EC_ABSENT_SUBSCRIBER";
    Error["EC_SUBSCRIBER_BUSY_FOR_MT_SMS"] = "EC_SUBSCRIBER_BUSY_FOR_MT_SMS";
    Error["EC_SM_DELIVERY_FAILURE"] = "EC_SM_DELIVERY_FAILURE";
    Error["EC_MESSAGE_WAITING_LIST_FULL"] = "EC_MESSAGE_WAITING_LIST_FULL";
    Error["EC_SYSTEM_FAILURE"] = "EC_SYSTEM_FAILURE";
    Error["EC_DATA_MISSING"] = "EC_DATA_MISSING";
    Error["EC_UNEXPECTED_DATA_VALUE"] = "EC_UNEXPECTED_DATA_VALUE";
    Error["EC_UNKNOWN_ERROR"] = "EC_UNKNOWN_ERROR";
    Error["EC_SM_DF_MEMORYCAPACITYEXCEEDED"] = "EC_SM_DF_MEMORYCAPACITYEXCEEDED";
    Error["EC_SM_DF_EQUIPMENTPROTOCOLERROR"] = "EC_SM_DF_EQUIPMENTPROTOCOLERROR";
    Error["EC_SM_DF_EQUIPMENTNOTSM_EQUIPPED"] = "EC_SM_DF_EQUIPMENTNOTSM_EQUIPPED";
    Error["EC_SM_DF_UNKNOWNSERVICECENTRE"] = "EC_SM_DF_UNKNOWNSERVICECENTRE";
    Error["EC_SM_DF_SC_CONGESTION"] = "EC_SM_DF_SC_CONGESTION";
    Error["EC_SM_DF_INVALIDSME_ADDRESS"] = "EC_SM_DF_INVALIDSME_ADDRESS";
    Error["EC_SM_DF_SUBSCRIBERNOTSC_SUBSCRIBER"] = "EC_SM_DF_SUBSCRIBERNOTSC_SUBSCRIBER";
    Error["EC_PROVIDER_GENERAL_ERROR"] = "EC_PROVIDER_GENERAL_ERROR";
    Error["EC_NO_RESPONSE"] = "EC_NO_RESPONSE";
    Error["EC_SERVICE_COMPLETION_FAILURE"] = "EC_SERVICE_COMPLETION_FAILURE";
    Error["EC_UNEXPECTED_RESPONSE_FROM_PEER"] = "EC_UNEXPECTED_RESPONSE_FROM_PEER";
    Error["EC_MISTYPED_PARAMETER"] = "EC_MISTYPED_PARAMETER";
    Error["EC_NOT_SUPPORTED_SERVICE"] = "EC_NOT_SUPPORTED_SERVICE";
    Error["EC_DUPLICATED_INVOKE_ID"] = "EC_DUPLICATED_INVOKE_ID";
    Error["EC_OR_APPCONTEXTNOTSUPPORTED"] = "EC_OR_APPCONTEXTNOTSUPPORTED";
    Error["EC_OR_INVALIDDESTINATIONREFERENCE"] = "EC_OR_INVALIDDESTINATIONREFERENCE";
    Error["EC_OR_INVALIDORIGINATINGREFERENCE"] = "EC_OR_INVALIDORIGINATINGREFERENCE";
    Error["EC_OR_ENCAPSULATEDAC_NOTSUPPORTED"] = "EC_OR_ENCAPSULATEDAC_NOTSUPPORTED";
    Error["EC_OR_TRANSPORTPROTECTIONNOTADEQUATE"] = "EC_OR_TRANSPORTPROTECTIONNOTADEQUATE";
    Error["EC_OR_NOREASONGIVEN"] = "EC_OR_NOREASONGIVEN";
    Error["EC_OR_POTENTIALVERSIONINCOMPATIBILITY"] = "EC_OR_POTENTIALVERSIONINCOMPATIBILITY";
    Error["EC_OR_REMOTENODENOTREACHABLE"] = "EC_OR_REMOTENODENOTREACHABLE";
    Error["EC_NNR_NOTRANSLATIONFORANADDRESSOFSUCHNATURE"] = "EC_NNR_NOTRANSLATIONFORANADDRESSOFSUCHNATURE";
    Error["EC_NNR_NOTRANSLATIONFORTHISSPECIFICADDRESS"] = "EC_NNR_NOTRANSLATIONFORTHISSPECIFICADDRESS";
    Error["EC_NNR_SUBSYSTEMCONGESTION"] = "EC_NNR_SUBSYSTEMCONGESTION";
    Error["EC_NNR_SUBSYSTEMFAILURE"] = "EC_NNR_SUBSYSTEMFAILURE";
    Error["EC_NNR_UNEQUIPPEDUSER"] = "EC_NNR_UNEQUIPPEDUSER";
    Error["EC_NNR_MTPFAILURE"] = "EC_NNR_MTPFAILURE";
    Error["EC_NNR_NETWORKCONGESTION"] = "EC_NNR_NETWORKCONGESTION";
    Error["EC_NNR_UNQUALIFIED"] = "EC_NNR_UNQUALIFIED";
    Error["EC_NNR_ERRORINMESSAGETRANSPORTXUDT"] = "EC_NNR_ERRORINMESSAGETRANSPORTXUDT";
    Error["EC_NNR_ERRORINLOCALPROCESSINGXUDT"] = "EC_NNR_ERRORINLOCALPROCESSINGXUDT";
    Error["EC_NNR_DESTINATIONCANNOTPERFORMREASSEMBLYXUDT"] = "EC_NNR_DESTINATIONCANNOTPERFORMREASSEMBLYXUDT";
    Error["EC_NNR_SCCPFAILURE"] = "EC_NNR_SCCPFAILURE";
    Error["EC_NNR_HOPCOUNTERVIOLATION"] = "EC_NNR_HOPCOUNTERVIOLATION";
    Error["EC_NNR_SEGMENTATIONNOTSUPPORTED"] = "EC_NNR_SEGMENTATIONNOTSUPPORTED";
    Error["EC_NNR_SEGMENTATIONFAILURE"] = "EC_NNR_SEGMENTATIONFAILURE";
    Error["EC_UA_USERSPECIFICREASON"] = "EC_UA_USERSPECIFICREASON";
    Error["EC_UA_USERRESOURCELIMITATION"] = "EC_UA_USERRESOURCELIMITATION";
    Error["EC_UA_RESOURCEUNAVAILABLE"] = "EC_UA_RESOURCEUNAVAILABLE";
    Error["EC_UA_APPLICATIONPROCEDURECANCELLATION"] = "EC_UA_APPLICATIONPROCEDURECANCELLATION";
    Error["EC_PA_PROVIDERMALFUNCTION"] = "EC_PA_PROVIDERMALFUNCTION";
    Error["EC_PA_SUPPORTINGDIALOGORTRANSACTIONREALEASED"] = "EC_PA_SUPPORTINGDIALOGORTRANSACTIONREALEASED";
    Error["EC_PA_RESSOURCELIMITATION"] = "EC_PA_RESSOURCELIMITATION";
    Error["EC_PA_MAINTENANCEACTIVITY"] = "EC_PA_MAINTENANCEACTIVITY";
    Error["EC_PA_VERSIONINCOMPATIBILITY"] = "EC_PA_VERSIONINCOMPATIBILITY";
    Error["EC_PA_ABNORMALMAPDIALOG"] = "EC_PA_ABNORMALMAPDIALOG";
    Error["EC_NC_ABNORMALEVENTDETECTEDBYPEER"] = "EC_NC_ABNORMALEVENTDETECTEDBYPEER";
    Error["EC_NC_RESPONSEREJECTEDBYPEER"] = "EC_NC_RESPONSEREJECTEDBYPEER";
    Error["EC_NC_ABNORMALEVENTRECEIVEDFROMPEER"] = "EC_NC_ABNORMALEVENTRECEIVEDFROMPEER";
    Error["EC_NC_MESSAGECANNOTBEDELIVEREDTOPEER"] = "EC_NC_MESSAGECANNOTBEDELIVEREDTOPEER";
    Error["EC_NC_PROVIDEROUTOFINVOKE"] = "EC_NC_PROVIDEROUTOFINVOKE";
    // USER_ERRORS (group id: 2) - general error codes
    Error["EC_IMSI_BLACKLISTED"] = "EC_IMSI_BLACKLISTED";
    Error["EC_BLACKLISTED_DESTINATIONADDRESS"] = "EC_BLACKLISTED_DESTINATIONADDRESS";
    Error["EC_BLACKLISTED_SENDERADDRESS"] = "EC_BLACKLISTED_SENDERADDRESS";
    Error["EC_SOURCE_ADDRESS_BLACKLISTED"] = "EC_SOURCE_ADDRESS_BLACKLISTED";
    Error["EC_INVALID_PDU_FORMAT"] = "EC_INVALID_PDU_FORMAT";
    Error["EC_MONTHLY_LIMIT_REACHED"] = "EC_MONTHLY_LIMIT_REACHED";
    Error["EC_MESSAGE_CANCELED"] = "EC_MESSAGE_CANCELED";
    Error["EC_VALIDITYEXPIRED"] = "EC_VALIDITYEXPIRED";
    Error["EC_NOTSUBMITTEDTOSMPPCHANNEL"] = "EC_NOTSUBMITTEDTOSMPPCHANNEL";
    Error["EC_DESTINATION_FLOODING"] = "EC_DESTINATION_FLOODING";
    Error["EC_DESTINATION_TXT_FLOODING"] = "EC_DESTINATION_TXT_FLOODING";
    // OPERATOR_ERRORS (group id: 3) - general error codes
    Error["EC_BEARER_SERVICE_NOT_PROVISIONED"] = "EC_BEARER_SERVICE_NOT_PROVISIONED";
    Error["EC_SS_INCOMPATIBILITY"] = "EC_SS_INCOMPATIBILITY";
    Error["EC_RESOURCE_LIMITATION"] = "EC_RESOURCE_LIMITATION";
    Error["EC_UNKNOWN_ALPHABET"] = "EC_UNKNOWN_ALPHABET";
    Error["EC_INVALID_RESPONSE_RECEIVED"] = "EC_INVALID_RESPONSE_RECEIVED";
    Error["EC_TIME_OUT"] = "EC_TIME_OUT";
    Error["EC_DEST_ADDRESS_BLACKLISTED"] = "EC_DEST_ADDRESS_BLACKLISTED";
    Error["EC_INVALIDMSCADDRESS"] = "EC_INVALIDMSCADDRESS";
    Error["EC_NOTSUBMITTEDTOGMSC"] = "EC_NOTSUBMITTEDTOGMSC";
    // OK (group id: 0) - voice error codes
    Error["VOICE_ANSWERED"] = "VOICE_ANSWERED";
    Error["VOICE_ANSWERED_MACHINE"] = "VOICE_ANSWERED_MACHINE";
    // HANDSET_ERRORS (group id: 1) - voice error codes
    Error["EC_VOICE_ERROR_TEMPORARILY_NOT_AVAILABLE"] = "EC_VOICE_ERROR_TEMPORARILY_NOT_AVAILABLE";
    // OPERATOR_ERRORS (group id: 3) - voice error codes
    Error["EC_VOICE_USER_BUSY"] = "EC_VOICE_USER_BUSY";
    Error["EC_VOICE_NO_ANSWER"] = "EC_VOICE_NO_ANSWER";
    Error["EC_VOICE_ERROR_DOWNLOADING_FILE"] = "EC_VOICE_ERROR_DOWNLOADING_FILE";
    Error["EC_VOICE_ERROR_UNSUPPORTED_AUDIO_FORMAT"] = "EC_VOICE_ERROR_UNSUPPORTED_AUDIO_FORMAT";
    Error["EC_VOICE_ERROR_BAD_REQUEST"] = "EC_VOICE_ERROR_BAD_REQUEST";
    Error["EC_VOICE_ERROR_FORBIDDEN"] = "EC_VOICE_ERROR_FORBIDDEN";
    Error["EC_VOICE_ERROR_DESTINATION_NOT_FOUND"] = "EC_VOICE_ERROR_DESTINATION_NOT_FOUND";
    Error["EC_VOICE_ERROR_PROXY_AUTHENTICATION_REQUIRED"] = "EC_VOICE_ERROR_PROXY_AUTHENTICATION_REQUIRED";
    Error["EC_VOICE_ERROR_REQUEST_TIMEOUT"] = "EC_VOICE_ERROR_REQUEST_TIMEOUT";
    Error["EC_VOICE_ERROR_GONE"] = "EC_VOICE_ERROR_GONE";
    Error["EC_VOICE_ERROR_REQUEST_ENTITY_TOO_LARGE"] = "EC_VOICE_ERROR_REQUEST_ENTITY_TOO_LARGE";
    Error["EC_VOICE_ERROR_REQUEST_URI_TOO_LONG"] = "EC_VOICE_ERROR_REQUEST_URI_TOO_LONG";
    Error["EC_VOICE_UNSUPPORTED_MEDIA_TYPE"] = "EC_VOICE_UNSUPPORTED_MEDIA_TYPE";
    Error["EC_VOICE_ERROR_ADDRESS_INCOMPLETE"] = "EC_VOICE_ERROR_ADDRESS_INCOMPLETE";
    Error["EC_VOICE_ERROR_REQUEST_TERMINATED"] = "EC_VOICE_ERROR_REQUEST_TERMINATED";
    Error["EC_VOICE_ERROR_NOT_ACCEPTABLE_HERE"] = "EC_VOICE_ERROR_NOT_ACCEPTABLE_HERE";
    Error["EC_VOICE_ERROR_REQUEST_PENDING"] = "EC_VOICE_ERROR_REQUEST_PENDING";
    Error["EC_DUPLICATE_MESSAGE"] = "EC_DUPLICATE_MESSAGE";
    Error["EC_VOICE_NOT_IMPLEMENTED"] = "EC_VOICE_NOT_IMPLEMENTED";
    Error["EC_VOICE_SERVICE_UNAVAILABLE"] = "EC_VOICE_SERVICE_UNAVAILABLE";
    // Registration error (group id: 1) - push notification error codes
    Error["EC_DEVICE_APP_UNINSTALL"] = "EC_DEVICE_APP_UNINSTALL";
    Error["EC_GCM_MISMATCH_SENDER_ID"] = "EC_GCM_MISMATCH_SENDER_ID";
    Error["EC_NO_APPLICATION_FOUND"] = "EC_NO_APPLICATION_FOUND";
    Error["EC_NO_REGISTRATION_ID_FOUND"] = "EC_NO_REGISTRATION_ID_FOUND";
    // Cloud error (group id: 3) - push notification error codes
    Error["EC_SYS_ERROR_FROM_CLOUD"] = "EC_SYS_ERROR_FROM_CLOUD";
    Error["EC_INVALID_GCM_AUTH_DATA"] = "EC_INVALID_GCM_AUTH_DATA";
    Error["EC_INVALID_APNS_CERT"] = "EC_INVALID_APNS_CERT";
    Error["EC_APPLICATION_CLOUD_TYPE_DISABLED"] = "EC_APPLICATION_CLOUD_TYPE_DISABLED";
    Error["EC_PUSH_INTERNAL_REQUEST_ERROR"] = "EC_PUSH_INTERNAL_REQUEST_ERROR";
    Error["EC_INVALID_PUSH_PAYLOAD"] = "EC_INVALID_PUSH_PAYLOAD";
    Error["EC_PUSH_INTERNAL_GW_ERROR"] = "EC_PUSH_INTERNAL_GW_ERROR";
    Error["EC_PUSH_CLOUD_TEMP_UNAVAILABLE"] = "EC_PUSH_CLOUD_TEMP_UNAVAILABLE";
    // Dropped (group id: 1) - email error codes
    Error["EC_EMAIL_BLACKLISTED"] = "EC_EMAIL_BLACKLISTED";
    Error["EC_EMAIL_SPAM_CONTENT"] = "EC_EMAIL_SPAM_CONTENT";
    Error["EC_UNSUBSCRIBED_EMAIL_ADDRESS"] = "EC_UNSUBSCRIBED_EMAIL_ADDRESS";
    Error["EC_BOUNCED_EMAIL_ADDRESS"] = "EC_BOUNCED_EMAIL_ADDRESS";
    Error["EC_EMAIL_DROPPED"] = "EC_EMAIL_DROPPED";
    // Bounced (group id: 2) - email error codes
    Error["EC_INVALID_EMAIL_ADDRESS"] = "EC_INVALID_EMAIL_ADDRESS";
    Error["EC_MAILBOX_TEMPORARILY_UNAVAILABLE"] = "EC_MAILBOX_TEMPORARILY_UNAVAILABLE";
    Error["EC_DEFERRED_DUE_TO_INSUFFICIENT_STORAGE"] = "EC_DEFERRED_DUE_TO_INSUFFICIENT_STORAGE";
    Error["EC_MAILBOX_UNAVAILABLE"] = "EC_MAILBOX_UNAVAILABLE";
    Error["EC_STORAGE_LIMIT_EXCEEDED"] = "EC_STORAGE_LIMIT_EXCEEDED";
    Error["EC_SOFT_BOUNCE"] = "EC_SOFT_BOUNCE";
    Error["EC_HARD_BOUNCE"] = "EC_HARD_BOUNCE";
    // System Error (group id: 3) - email error codes
    Error["EC_TEMPORARY_SENDING_ERROR"] = "EC_TEMPORARY_SENDING_ERROR";
    Error["EC_PERMANENT_SENDING_ERROR"] = "EC_PERMANENT_SENDING_ERROR";
    Error["EC_GATEWAY_ERROR"] = "EC_GATEWAY_ERROR";
    // Client error (group id: 1) - chat error codes
    Error["EC_UNKNOWN_APPLICATION"] = "EC_UNKNOWN_APPLICATION";
    Error["EC_UNKNOWN_USER"] = "EC_UNKNOWN_USER";
    Error["EC_BLOCKED_USER"] = "EC_BLOCKED_USER";
    Error["EC_UNAUTHORIZED_ACCESS"] = "EC_UNAUTHORIZED_ACCESS";
    Error["EC_FORBIDDEN_ACCESS"] = "EC_FORBIDDEN_ACCESS";
    Error["EC_ILLEGAL_TRAFIC_TYPE"] = "EC_ILLEGAL_TRAFIC_TYPE";
    Error["EC_INVALID_TEMPLATE_ARGS"] = "EC_INVALID_TEMPLATE_ARGS";
    Error["EC_INVALID_TEMPLATE"] = "EC_INVALID_TEMPLATE";
    Error["EC_NO_SESSION"] = "EC_NO_SESSION";
    Error["EC_PHONE_MATCHING_DISABLED"] = "EC_PHONE_MATCHING_DISABLED";
    Error["EC_UNSUPPORTED_DEVICE"] = "EC_UNSUPPORTED_DEVICE";
    // Provider error (group id: 2) - chat error codes
    Error["EC_PROVIDER_INTERNAL_ERROR"] = "EC_PROVIDER_INTERNAL_ERROR";
    Error["EC_PROVIDER_TIMEOUT"] = "EC_PROVIDER_TIMEOUT";
    // System Error (group id: 3) - chat error codes
    Error["EC_INTERNAL_ERROR"] = "EC_INTERNAL_ERROR";
    Error["EC_CONFIGURATION_ERROR"] = "EC_CONFIGURATION_ERROR";
    Error["EC_SERVICE_NOT_ACTIVATED"] = "EC_SERVICE_NOT_ACTIVATED";
    Error["EC_DUPLICATE_REQUEST"] = "EC_DUPLICATE_REQUEST";
    Error["EC_BAD_ORIGIN"] = "EC_BAD_ORIGIN";
})(Error = exports.Error || (exports.Error = {}));
//# sourceMappingURL=error.js.map