//Installed express module in node. 

//Importing/requiring express library.
const express = require('express');
//Requiring tasksRouter.
const tasksRouter = express.Router();

//
const pool = require('../modules/pool');

// GET
//GET route to localhost:5000/tasks.
tasksRouter.get('/', (req, res) => {
    console.log('GET Route good');
    let queryText = 'SELECT * FROM "tasks" ORDER BY "id";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(err => {
        console.log('error in GET Tasks', err)
        res.sendStatus(500);
    })
})

//POST route to localhost:5000/tasks.
tasksRouter.post('/', (req, res) => {
    console.log('POST Route good');
    let newTask = req.body;
    let queryText = `
        INSERT INTO "tasks" (
        "task_to_do", "task_complete")
        VALUES ($1, $2);
        `
    let values = [newTask.task_to_do, false];
    // pool.query(values)
    console.log('Adding new TASK:', values);
    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log(`Error in adding task!`, err);
            res.sendStatus(500);
        });
})

//PUT route to localhost:5000/tasks.
tasksRouter.put('/:id', (req, res) => {
    console.log('PUT Route good:', req.params.id);
    console.log(req.body.read, req.params.id);
    // res.sendStatus(200);   //whacked during handleRank function process
    let queryText = `UPDATE "tasks" SET "task_complete" = NOT "task_complete" WHERE "id" = $1;`;
  
    //created values for data security ("values is taco")
    const values = [req.params.id];
    console.log(req.params.id);
  
    pool.query(queryText, values)
    .then( result => {
        res.sendStatus(200);
    })
    .catch( err => {
        console.log(err);
        res.sendStatus(500);
    });


  });

  //DELETE route to localhost:5000/tasks.
  tasksRouter.delete('/:id', (req, res) =>  {
    //req.params is USED FOR DELETE... params.name should match identifier '/:id'
    console.log('DELETE Route good:', req.params.id);
    
    // res.sendStatus(200);
    const queryText = `DELETE FROM "tasks"
    WHERE "id" = $1;
    `;
  
    //created values for data security ("values is taco")
    const values = [req.params.id];
    console.log(req.params.id);
    //in the parameters, make sure to add variable name... in this case, "values"...
    pool.query(queryText, values)
    .then(result => {
        res.sendStatus(204);
    }).catch(err => {
        console.log(err)
        res.sendStatus(500);
    })
  });


//taskRouter Module.
module.exports= tasksRouter;