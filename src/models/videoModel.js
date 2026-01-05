"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModel = void 0;
const sequelize_1 = require("sequelize");
const baseModelFields_1 = require("../database/baseModelFields");
const config_1 = require("../database/config");
exports.VideoModel = config_1.sequelize.define('Videos', {
    ...baseModelFields_1.BaseModelFields,
    videoId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    videoTitle: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    videoUrl: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'videos',
    timestamps: false,
    underscored: true,
    freezeTableName: true
});
