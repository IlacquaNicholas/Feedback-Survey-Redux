const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


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
            console.log('INSET success', dbResult);
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log(dbErr);
            res.sendStatus(500);
        });
});

module.exports = router;