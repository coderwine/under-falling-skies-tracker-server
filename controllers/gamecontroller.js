const router = require('express').Router();
const { GameModel } = require('../model')


//! POST / CREATE
router.post('/create-game', async(req,res) => {
    const { 
        date, chapter, isCampaign, threatLevel, city, cityDamaged, scenario, characters, battle, difficulty
    } = req.body;

    try {
        const Game = await GameModel.create({
            date, chapter, isCampaign, threatLevel, city, cityDamaged, scenario, characters, battle, difficulty
        })

        // console.log(Game);

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
router.put('/:id', async(req,res) => {
    // const { chapter, isCampaign, ... others} = req.body;
    const {date, chapter, isCampaign, threatLevel, city, cityDamaged, scenario, characters, battle, difficulty} = req.body;
    
    try {
        await GameModel.update(
            {date, chapter, isCampaign, threatLevel, city, cityDamaged, scenario, characters, battle, difficulty},
            {where: {sessionID: req.params.id}}
        ) .then(results => {
            res.status(200).json({
                msg: `Game updated`,
                results
            })
        })

    } catch (err) {
        res.status(500).json({
            msg: `Game failed to update: ${err}`
        })
    }
})

//! DELETE / UPDATE

module.exports = router;