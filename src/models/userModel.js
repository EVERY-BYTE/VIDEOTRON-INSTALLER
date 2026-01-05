"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const baseModelFields_1 = require("../database/baseModelFields");
const config_1 = require("../database/config");
exports.UserModel = config_1.sequelize.define('Users', {
    ...baseModelFields_1.BaseModelFields,
    userId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userPassword: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userWhatsappNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userRole: {
        type: sequelize_1.DataTypes.ENUM('admin', 'superAdmin', 'user'),
        allowNull: false,
        defaultValue: 'user'
    }
}, {
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
