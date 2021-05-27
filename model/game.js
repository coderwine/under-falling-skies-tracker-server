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
        allowNull: true,
    },
    threatLevel: {
        type: DataTypes.INTEGER,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cityDamaged: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    scenario: {
        type: DataTypes.STRING,
    },
    characters: {
        type: DataTypes.ARRAY(DataTypes.JSON)
    },
    battle: {
        type: DataTypes.ENUM(
            'First', 'Second'
        ),
    },
    difficulty: {
        type: DataTypes.INTEGER,
    },
});

module.exports = Game;