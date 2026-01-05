"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeVideo = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestHandler_1 = require("../../utilities/requestHandler");
const logs_1 = __importDefault(require("../../logs"));
const videoSchema_1 = require("../../schemas/videoSchema");
const videoModel_1 = require("../../models/videoModel");
const removeVideo = async (req, res) => {
    const { error: validationError, value: validatedData } = (0, requestHandler_1.validateRequest)(videoSchema_1.removeVideoSchema, req.params);
    if (validationError)
        return (0, requestHandler_1.handleValidationError)(res, validationError);
    try {
        const result = await videoModel_1.VideoModel.findOne({
            where: {
                deleted: 0,
                videoId: validatedData.videoId
            }
        });
        if (result == null) {
            const message = `Video not found with ID: ${validatedData.videoId}`;
            logs_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error({ message }));
        }
        result.deleted = true;
        await result.save();
        const response = response_1.ResponseData.success({ message: 'video deleted successfully' });
        logs_1.default.info('video deleted successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (serverError) {
        return (0, requestHandler_1.handleServerError)(res, serverError);
    }
};
exports.removeVideo = removeVideo;
