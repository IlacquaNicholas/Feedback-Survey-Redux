const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const router = express.Router();
const pool = require ('./modules/pool')
const PORT = process.env.PORT || 5000;


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
router.post('/#/review', (req, res)=>{
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
    .then((dbResult)=>{
        console.log('INSET success',dbResult);
        res.sendStatus(200);
    })
    .catch((dbErr)=>{
        console.log(dbErr);
        res.sendStatus(500);
    });
});

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});