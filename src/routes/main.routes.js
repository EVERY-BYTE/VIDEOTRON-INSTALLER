"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouterV1 = void 0;
const appCheck_routes_1 = __importDefault(require("./appCheck.routes"));
// import authRoutes from './auth.routes'
// import myProfileRoutes from './myProfile.routes'
const appInfo_routes_1 = __importDefault(require("./appInfo.routes"));
const video_routes_1 = __importDefault(require("./video.routes"));
const apiVersion = '/api/v1';
const appRouterV1 = (app) => {
    app.use(apiVersion, appCheck_routes_1.default);
    app.use(apiVersion + '/info', appInfo_routes_1.default);
    // app.use(apiVersion + '/auth', authRoutes)
    app.use(apiVersion + '/videos', video_routes_1.default);
    // app.use(apiVersion + '/my-profiles', myProfileRoutes)
};
exports.appRouterV1 = appRouterV1;
