const express = require('express');
const tasksRouter = express.Router();

//added static services for server
const pool = require('../modules/pool');

// GET
tasksRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "tasks" ORDER BY "id";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log('error in GET Tasks', err)
        res.sendStatus(500);
    })
})












//bottom
module.exports= tasksRouter;