const { DataTypes } = require('sequelize');
const { Sequelize } = require('../db');
const db = require('../db');

//NOTE: will need to associate with World
const Game = db.define('game', {
    sessionID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW,
    },
    chapter: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    isCampaign: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    scenario: {
        type: DataTypes.STRING,
    },
    character: {
        type: DataTypes.STRING
    },
    firstGame: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    secondGame: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    upgradedCharacterOne: {
        type: DataTypes.STRING,
        allowNull: true
    },
    upgradedCharacterTwo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    upgradedCharacterThree: {
        type: DataTypes.STRING,
        allowNull: true
    },

});

module.exports = Game;