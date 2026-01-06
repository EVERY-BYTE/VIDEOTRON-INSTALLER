"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDetailVideo = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestHandler_1 = require("../../utilities/requestHandler");
const videoSchema_1 = require("../../schemas/videoSchema");
const findDetailVideo = async (req, res) => {
    const { error: validationError, value: validatedData } = (0, requestHandler_1.validateRequest)(videoSchema_1.findDetailVideoSchema, req.params);
    if (validationError)
        return (0, requestHandler_1.handleValidationError)(res, validationError);
    try {
        // const result = await VideoModel.findOne({
        //   where: {
        //     deleted: 0,
        //     videoId: validatedData.videoId
        //   }
        // })
        // if (result == null) {
        //   const message = `Video not found`
        //   logger.warn(message)
        //   return res.status(StatusCodes.NOT_FOUND).json(ResponseData.error({ message }))
        // }
        const response = response_1.ResponseData.success({ data: {
                videoUrl: "https://firebasestorage.googleapis.com/v0/b/pena-project-248c3.appspot.com/o/test-video%2F239229_medium.mp4?alt=media&token=f3ba0a76-885f-47b6-84ec-9c9135bc0b77"
            }
        });
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (serverError) {
        return (0, requestHandler_1.handleServerError)(res, serverError);
    }
};
exports.findDetailVideo = findDetailVideo;
