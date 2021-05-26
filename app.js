require('dotenv').config();
const Express = require('express');
const app = Express();
app.use(Express.json());
const db = require('./db');

// IMPORTS
const controllers = require('./controllers');

// UNVALIDATED ROUTES
app.use('/', controllers.getcombo);

// MIDDLEWARE

// ROUTES
app.use('/', controllers.game);

// DB SYNC
db.authenticate()
    .then(() => db.sync())
    // .then(() => db.sync({force: true}))
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`[SERVER] Started on Port ${process.env.PORT}`));
    })
    .catch(err => console.log(`[SERVER] CRASHED: ${err}`))