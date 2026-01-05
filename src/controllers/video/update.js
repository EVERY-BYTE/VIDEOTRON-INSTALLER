"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideo = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestHandler_1 = require("../../utilities/requestHandler");
const logs_1 = __importDefault(require("../../logs"));
const videoSchema_1 = require("../../schemas/videoSchema");
const videoModel_1 = require("../../models/videoModel");
const updateVideo = async (req, res) => {
    const { error: validationError, value: validatedData } = (0, requestHandler_1.validateRequest)(videoSchema_1.updateVideoSchema, req.body);
    if (validationError)
        return (0, requestHandler_1.handleValidationError)(res, validationError);
    try {
        const video = await videoModel_1.VideoModel.findOne({
            where: {
                deleted: 0,
                videoId: validatedData.videoId
            }
        });
        if (video === null) {
            const message = `video not found`;
            logs_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error({ message }));
        }
        await videoModel_1.VideoModel.update(validatedData, {
            where: {
                deleted: 0,
                videoId: validatedData.videoId
            }
        });
        const response = response_1.ResponseData.success({ message: 'video updated successfully' });
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (serverError) {
        return (0, requestHandler_1.handleServerError)(res, serverError);
    }
};
exports.updateVideo = updateVideo;
