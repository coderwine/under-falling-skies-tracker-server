const router = require('express').Router();
const { GameModel } = require('../model')


//! POST / CREATE
router.post('/create-game', async(req,res) => {
    const { 
        date, chapter, isCampaign, city, scenario, character, firstGame, secondGame, upgradedCharacterOne, upgradedCharacterTwo, upgradedCharacterThree
    } = req.body;

    try {
        const Game = await GameModel.create({
            date, chapter, chapter, isCampaign, city, scenario, character, firstGame, secondGame, upgradedCharacterOne, upgradedCharacterTwo, upgradedCharacterThree
        })

        res.status(200).json({
            msg: `Game Created Successfully!`,
            Game
        })

    } catch (error) {
        res.status(500).json({
            msg:`Failed to create game: ${error}`
        })
    }

})

//! PUT / UPDATE

//! DELETE / UPDATE

module.exports = router;