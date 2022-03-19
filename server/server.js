const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Setup body parser - to translating request body into JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve "static assets" (html, css, client-side js)
// from the server/public folder
app.use(express.static('server/public'));

// Setup the songs router
// to respond to requests from the `/tasks` URL
let tasksRouter = require('./routes/tasks.router');
app.use('/tasks', tasksRouter);


// Start express
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Running on PORT!:', PORT);
});