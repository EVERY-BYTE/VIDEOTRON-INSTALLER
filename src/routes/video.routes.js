"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const video_1 = require("../controllers/video");
const router = (0, express_1.Router)();
// router.use(middleware.useAuthorization)
router.get('/', video_1.videoControllers.findAll);
router.get('/detail/:videoId', video_1.videoControllers.findDetail);
router.post('/', middlewares_1.middleware.uploadVideo.single('video'), // multer
middlewares_1.middleware.validateVideoFile, video_1.videoControllers.create);
router.patch('/', video_1.videoControllers.update);
router.delete('/:videoId', video_1.videoControllers.remove);
exports.default = router;
