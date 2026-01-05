"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const access_1 = require("./access");
const appRole_1 = require("./appRole");
const requestTimer_1 = require("./requestTimer");
const uploadVideo_1 = require("./uploadVideo");
exports.middleware = {
    useAuthorization: access_1.useAuthorization,
    requestTimer: requestTimer_1.requestTimer,
    allowAppRoles: appRole_1.allowAppRoles,
    uploadVideo: uploadVideo_1.uploadVideo,
    validateVideoFile: uploadVideo_1.validateVideoFile
};
