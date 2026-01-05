"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.s3 = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const client_s3_1 = require("@aws-sdk/client-s3");
const _1 = require(".");
aws_sdk_1.default.config.update({
    region: _1.appConfigs.aws.region,
    accessKeyId: _1.appConfigs.aws.accessKeyId,
    secretAccessKey: _1.appConfigs.aws.secretAccessKey
});
exports.s3 = new client_s3_1.S3Client({
    region: _1.appConfigs.aws.region,
    credentials: {
        accessKeyId: _1.appConfigs.aws.accessKeyId,
        secretAccessKey: _1.appConfigs.aws.secretAccessKey
    }
});
