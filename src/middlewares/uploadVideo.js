"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVideoFile = exports.uploadVideo = void 0;
const multer_1 = __importDefault(require("multer"));
exports.uploadVideo = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: {
        fileSize: 500 * 1024 * 1024 // 500MB
    },
    fileFilter: (_req, file, cb) => {
        if (!file.mimetype.startsWith('video/')) {
            cb(new Error('File harus video'));
        }
        else {
            cb(null, true);
        }
    }
});
const validateVideoFile = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({
            message: 'Video tidak ditemukan'
        });
    }
    if (!req.file.mimetype.startsWith('video/')) {
        return res.status(400).json({
            message: 'File harus berupa video'
        });
    }
    const MAX_SIZE = 500 * 1024 * 1024; // 500MB
    if (req.file.size > MAX_SIZE) {
        return res.status(400).json({
            message: 'Ukuran video maksimal 500MB'
        });
    }
    next();
};
exports.validateVideoFile = validateVideoFile;
