"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const main_routes_1 = require("./routes/main.routes");
const logs_1 = __importDefault(require("./logs"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./configs/swagger"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const compression_1 = __importDefault(require("compression"));
const configs_1 = require("./configs");
const requestHandler_1 = require("./utilities/requestHandler");
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("./utilities/response");
const middlewares_1 = require("./middlewares");
const startTime = Date.now();
const app = (0, express_1.default)();

app.use(
  "/api/v1/docs",
  swagger_ui_express_1.default.serve,
  swagger_ui_express_1.default.setup(swagger_1.default)
);
(0, main_routes_1.appRouterV1)(app);
app.use((req, res) => {
  const message = `Route not found!`;
  logs_1.default.warn(message);
  const response = response_1.ResponseData.error({ message });
  return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
});
app.use((serverError, req, res, _next) => {
  logs_1.default.error(serverError.stack);
  return (0, requestHandler_1.handleServerError)(res, serverError);
});
exports.default = app;
