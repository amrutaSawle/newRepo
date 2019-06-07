const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();

router.get('/product', (request, response) => {
    const statement = `select * from product`;
    const connection = db.connect();
    
    connection.query(statement, (error, products) => {
        console.log("Products="+products);
        connection.end();
        response.send(utils.createResponse(error, products));
    })
});

module.exports = router;