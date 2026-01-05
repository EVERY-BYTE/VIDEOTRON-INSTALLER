"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllVideoSchema = exports.findDetailVideoSchema = exports.removeVideoSchema = exports.updateVideoSchema = exports.createVideoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
// import { jwtPayloadSchema } from './jwtPayloadSchema'
exports.createVideoSchema = joi_1.default.object({
    videoTitle: joi_1.default.string().max(100).optional()
});
exports.updateVideoSchema = joi_1.default.object({
    videoId: joi_1.default.number().integer().positive().required(),
    videoTitle: joi_1.default.string().max(100).optional(),
    videoUrl: joi_1.default.string().optional()
});
exports.removeVideoSchema = joi_1.default.object({
    videoId: joi_1.default.number().integer().positive().required()
});
exports.findDetailVideoSchema = joi_1.default.object({
    videoId: joi_1.default.number().integer().positive().required()
});
exports.findAllVideoSchema = joi_1.default.object({
    page: joi_1.default.number().integer().optional(),
    size: joi_1.default.number().integer().optional(),
    search: joi_1.default.string().allow('').optional(),
    pagination: joi_1.default.boolean().optional()
});
