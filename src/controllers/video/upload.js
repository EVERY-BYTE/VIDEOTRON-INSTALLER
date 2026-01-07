"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadVideo = void 0;
const http_status_codes_1 = require("http-status-codes");
const uploadVideo = async (req, res) => {
    try {
        if (!req.file) {
            return res
                .status(http_status_codes_1.StatusCodes.BAD_REQUEST)
                .json({ message: 'Video file is required' });
        }
        const videoUrl = `${req.protocol}://${req.get('host')}/videos/${req.file.filename}`;
        return res.status(http_status_codes_1.StatusCodes.CREATED).json({
            message: 'Video uploaded successfully',
            fileName: req.file.filename,
            url: videoUrl
        });
    }
    catch (err) {
        return res.status(500).json({ message: 'Upload failed' });
    }
};
exports.uploadVideo = uploadVideo;
