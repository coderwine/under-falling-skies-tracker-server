const { DataTypes } = require('sequelize');
const { Sequelize } = require('../db')
const db = require('../db');

//NOTE: will need to associate with Sessions
const World = db.define('world', {
    worldID: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
    },
    worldName: {
        type: DataTypes.STRING,
    }
})

module.exports = World;