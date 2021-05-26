const { DataTypes } = require('sequelize');
const { Sequelize } = require('../db');
const db = require('../db');

const User = db.define('user', {
    //NOTE: UUID for ID / password character / role checking
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    role: {
        type: DataTypes.ENUM(
            'user', 'admin'
        ),
        defaultValue: 'user',
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: ["^[a-z]+$",'i']
    },

})

module.exports = User;