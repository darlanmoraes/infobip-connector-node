"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    // PENDING (group id: 1) - general status codes
    Status["PENDING_WAITING_DELIVERY"] = "PENDING_WAITING_DELIVERY";
    Status["PENDING_ENROUTE"] = "PENDING_ENROUTE";
    Status["PENDING_ACCEPTED"] = "PENDING_ACCEPTED";
    // UNDELIVERABLE (group id: 2) - general status codes
    Status["UNDELIVERABLE_REJECTED_OPERATOR"] = "UNDELIVERABLE_REJECTED_OPERATOR";
    Status["UNDELIVERABLE_NOT_DELIVERED"] = "UNDELIVERABLE_NOT_DELIVERED";
    // DELIVERED (group id: 3) - general status codes
    Status["DELIVERED_TO_OPERATOR"] = "DELIVERED_TO_OPERATOR";
    Status["DELIVERED_TO_HANDSET"] = "DELIVERED_TO_HANDSET";
    // EXPIRED (group id: 4) - general status codes
    Status["EXPIRED_EXPIRED"] = "EXPIRED_EXPIRED";
    Status["EXPIRED_DLR_UNKNOWN"] = "EXPIRED_DLR_UNKNOWN";
    // REJECTED (group id: 5) - general status codes
    Status["REJECTED_NETWORK"] = "REJECTED_NETWORK";
    Status["REJECTED_PREFIX_MISSING"] = "REJECTED_PREFIX_MISSING";
    Status["REJECTED_DND"] = "REJECTED_DND";
    Status["REJECTED_SOURCE"] = "REJECTED_SOURCE";
    Status["REJECTED_NOT_ENOUGH_CREDITS"] = "REJECTED_NOT_ENOUGH_CREDITS";
    Status["REJECTED_SENDER"] = "REJECTED_SENDER";
    Status["REJECTED_DESTINATION"] = "REJECTED_DESTINATION";
    Status["REJECTED_PREPAID_PACKAGE_EXPIRED"] = "REJECTED_PREPAID_PACKAGE_EXPIRED";
    Status["REJECTED_DESTINATION_NOT_REGISTERED"] = "REJECTED_DESTINATION_NOT_REGISTERED";
    Status["REJECTED_ROUTE_NOT_AVAILABLE"] = "REJECTED_ROUTE_NOT_AVAILABLE";
    Status["REJECTED_FLOODING_FILTER"] = "REJECTED_FLOODING_FILTER";
    Status["REJECTED_SYSTEM_ERROR"] = "REJECTED_SYSTEM_ERROR";
    Status["REJECTED_DUPLICATE_MESSAGE_ID"] = "REJECTED_DUPLICATE_MESSAGE_ID";
    Status["REJECTED_INVALID_UDH"] = "REJECTED_INVALID_UDH";
    Status["REJECTED_MESSAGE_TOO_LONG"] = "REJECTED_MESSAGE_TOO_LONG";
    Status["MISSING_TO"] = "MISSING_TO";
    // REJECTED (group id: 5) - Voice status codes
    Status["REJECTED_INVALID_AUDIO_FILE_URL"] = "REJECTED_INVALID_AUDIO_FILE_URL";
    Status["REJECTED_UNSUPPORTED_LANGUAGE"] = "REJECTED_UNSUPPORTED_LANGUAGE";
    Status["REJECTED_MESSAGE_IS_EMPTY"] = "REJECTED_MESSAGE_IS_EMPTY";
    Status["REJECTED_INVALID_NOTIFY_URL"] = "REJECTED_INVALID_NOTIFY_URL";
    Status["REJECTED_INVALID_NOTIFY_CONTENT_TYPE"] = "REJECTED_INVALID_NOTIFY_CONTENT_TYPE";
    Status["REJECTED_INVALID_DTMF_SIGN"] = "REJECTED_INVALID_DTMF_SIGN";
    Status["REJECTED_INVALID_DTMF_TIMEOUT"] = "REJECTED_INVALID_DTMF_TIMEOUT";
    Status["REJECTED_INVALID_RING_TIMEOUT"] = "REJECTED_INVALID_RING_TIMEOUT";
    Status["REJECTED_INVALID_CALL_TIMEOUT"] = "REJECTED_INVALID_CALL_TIMEOUT";
    Status["REJECTED_INVALID_MACHINE_DETECTION"] = "REJECTED_INVALID_MACHINE_DETECTION";
    Status["REJECTED_INVALID_ACTIONS"] = "REJECTED_INVALID_ACTIONS";
    Status["REJECTED_INVALID_ACTION_GROUPS"] = "REJECTED_INVALID_ACTION_GROUPS";
    // UNDELIVERABLE (group id: 2) - push notifications status codes
    Status["UNDELIVERABLE_NO_DESTINATION"] = "UNDELIVERABLE_NO_DESTINATION";
    // REJECTED (group id: 5) - push notifications status codes
    Status["REJECTED_NO_APPLICATION"] = "REJECTED_NO_APPLICATION";
})(Status = exports.Status || (exports.Status = {}));
//# sourceMappingURL=status.js.map