'use strict';

const express = require('express');
const router = express.Router();

// middleware to use for all requests
router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next(); 
});

// test route to make sure everything is working (accessed at GET http://localhost:8085/api)
router.get('/', (req, res) => res.json({ message: 'Bienvenido a leoManga :)' }));

module.exports = router;