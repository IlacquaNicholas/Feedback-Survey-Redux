const express = require('express');
const router = express.Router();
const pg = require('pg');
const Pool = pg.Pool;

// Create our pool object using the above constructor:
const pool = new Pool({
    database: 'prime_feedback', // the name of database, This can change!
    host: 'localhost', // where is your database?
});
// Log to our console when our pool object makes a connection:
pool.on('connect', () => {
    console.log('Postgresql connected');
});
// Log to our console when something makes our pool error out:
pool.on('error', (error) => {
    console.log('Error with postgres pool', error)
});



router.post('/', (req, res) => {
    console.log('in POST /review');
    console.log('req.body:', req.body);
    const reviewTask = req.body;
    const sqlText = `
    INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES
    ($1, $2, $3, $4);
    `;
    const sqlValue = [
        reviewTask.feeling,
        reviewTask.understanding,
        reviewTask.support,
        reviewTask.comments
    ];
    pool.query(sqlText, sqlValue)
        .then((dbResult) => {
            console.log('INSET success');
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log(dbErr);
            res.sendStatus(500);
        });
});

module.exports = router;