"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const video_1 = require("../controllers/video");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
// router.use(middleware.useAuthorization)
router.get('/', video_1.videoControllers.findAll);
router.get('/detail/:videoId', video_1.videoControllers.findDetail);
router.post('/', middlewares_1.middleware.uploadVideo.single('video'), // multer
middlewares_1.middleware.validateVideoFile, video_1.videoControllers.create);
router.patch('/', video_1.videoControllers.update);
router.delete('/:videoId', video_1.videoControllers.remove);
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, path_1.default.join(__dirname, '../../public/videos'));
    },
    filename: (_req, file, cb) => {
        const ext = path_1.default.extname(file.originalname);
        const filename = `video${ext}`;
        cb(null, filename);
    }
});
const upload = (0, multer_1.default)({
    storage,
    limits: { fileSize: 200 * 1024 * 1024 }, // 200MB
    fileFilter: (_req, file, cb) => {
        if (!file.mimetype.startsWith('video/')) {
            return cb(new Error('Only video files allowed'));
        }
        cb(null, true);
    }
});
router.post('/upload', upload.single('video'), video_1.videoControllers.upload);
exports.default = router;
