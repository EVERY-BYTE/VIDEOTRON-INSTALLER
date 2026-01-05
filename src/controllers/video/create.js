"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVideo = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const videoSchema_1 = require("../../schemas/videoSchema");
const requestHandler_1 = require("../../utilities/requestHandler");
const logs_1 = __importDefault(require("../../logs"));
const config_1 = require("../../database/config");
const videoModel_1 = require("../../models/videoModel");
const client_s3_1 = require("@aws-sdk/client-s3");
const client_s3_2 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const crypto_1 = __importDefault(require("crypto"));
const aws_1 = require("../../configs/aws");
const configs_1 = require("../../configs");
const createVideo = async (req, res) => {
    const { error: validationError, value: validatedData } = (0, requestHandler_1.validateRequest)(videoSchema_1.createVideoSchema, req.body);
    if (validationError)
        return (0, requestHandler_1.handleValidationError)(res, validationError);
    const transaction = await config_1.sequelize.transaction();
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Video tidak ditemukan' });
        }
        const key = `videos/${crypto_1.default.randomUUID()}-${req.file.originalname}`;
        await aws_1.s3.send(new client_s3_1.PutObjectCommand({
            Bucket: configs_1.appConfigs.aws.bucketName,
            Key: key,
            Body: req.file.buffer,
            ContentType: req.file.mimetype
        }));
        const signedUrl = await (0, s3_request_presigner_1.getSignedUrl)(aws_1.s3, new client_s3_2.GetObjectCommand({
            Bucket: configs_1.appConfigs.aws.bucketName,
            Key: key
        }), { expiresIn: 60 * 60 } // 1 jam
        );
        validatedData.videoUrl = signedUrl;
        await videoModel_1.VideoModel.create(validatedData, { transaction });
        await transaction.commit();
        const response = response_1.ResponseData.success({});
        logs_1.default.info('Video created successfully');
        return res.status(http_status_codes_1.StatusCodes.CREATED).json(response);
    }
    catch (serverError) {
        await transaction.rollback();
        return (0, requestHandler_1.handleServerError)(res, serverError);
    }
};
exports.createVideo = createVideo;
