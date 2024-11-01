const router = require('express').Router();
const serverController = require('../controller/server.controller');

// add message to the database
router.post('/createMessage', serverController.createMessage);

// fetch messages from database
router.get('/fetchMessages', serverController.fetchMessages);


module.exports = router;

//* Define the various routes to the server in this file
 