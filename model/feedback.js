const { DataTypes } = require('sequelize');
const { Sequelize } = require('../db');
const db = require('../db');

const Feedback = db.define('feedback', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'User Feedback',
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    canContact: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    
}, {freezeTableName: true});

module.exports = Feedback;

/*
    Users will be able to title their feedback, inject a long message detailing their questions/comments and select whether or not I can reach out to them with follow-up questions (if needed).  <freezeTableName> simply locks the table name to a singular phrase rather than changing it in pgAdmin to "feedbacks".
*/