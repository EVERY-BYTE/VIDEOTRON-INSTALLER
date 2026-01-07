"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoControllers = void 0;
const create_1 = require("./create");
const findAll_1 = require("./findAll");
const findDetail_1 = require("./findDetail");
const remove_1 = require("./remove");
const update_1 = require("./update");
const upload_1 = require("./upload");
exports.videoControllers = {
    findAll: findAll_1.findAllVideo,
    findDetail: findDetail_1.findDetailVideo,
    create: create_1.createVideo,
    update: update_1.updateVideo,
    remove: remove_1.removeVideo,
    upload: upload_1.uploadVideo
};
