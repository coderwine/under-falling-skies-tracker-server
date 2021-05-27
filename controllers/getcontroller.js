const router = require('express').Router();
const { GameModel, UserModel, WorldModel, FeedbackModel } = require('../model');

//! GET all - Games
router.get('/games', async (req, res) => {

    try {
        const allGames = await GameModel.findAll();
        res.status(200).json({
            msg: 'Success!',
            allGames
        })
    } catch (err) {
        res.status(500).json({
            msg: `Failed to get games: ${err}`
        })
    }
})

//! GET all - Worlds
router.get('/worlds', async (req,res) => {
    
    try {
        const allWorlds = await WorldModel.findAll();
        res.status(200).json({
            msg: 'Success!',
            allWorlds
        })        
    } catch (error) {
        res.status(500).json({
            msg: `Failed to get worlds: ${error}`
        })
    }
    
})

//* Consider Leaderboard options on Splash/Landing Page


//! ADMIN ONLY
//? GET all - Feedback 
router.get('/feedback', async(req,res) => {

    try {
        const allFeedback = await FeedbackModel.findAll();
        res.status(200).json(allFeedback);
    } catch (error) {
        res.status(200).json({
            msg: `Failed to get feedback info: ${error}`
        })
    }

}) 

//? GET all - Users

router.get('/users', async(req,res) => {
    // console.log('USERS GET ALL HIT');
    try {
        const allUsers = await UserModel.findAll();
        res.status(200).json(allUsers)
    } catch(err) {
        res.status(500).json({
            msg: `Failed to get users: ${err}`
        })
    }

});

module.exports = router;