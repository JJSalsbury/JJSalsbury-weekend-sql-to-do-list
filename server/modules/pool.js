//get pg out of the library.
const pg = require('pg');

//do pg setup, this should eventually be in a separate module.

const Pool = pg.Pool;
const pool = new Pool({
    //must be given an object. Inside of this is config to talk to Postgres!

    database: 'tasks_library',
    host: 'localhost',
    port: 5432,
    //other things to set...
    max: 10, //max number of connections (computers, clients at anyone time)
    idleTimeoutMillis: 30000 //30 seconds to give up
});

pool.on('connect', () => {
    console.log('PG (PostgreSQL connected!')
})

pool.on('error', () => {
    //connection errors
    console.log('PG ERROR!', err)
})

module.exports = pool;