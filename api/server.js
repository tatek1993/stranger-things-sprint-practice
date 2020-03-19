// bring in express
const express = require('express');

// bring in other dependencies
const helmet = require('helmet');
const CORS = require('cors');

// bring in the router
const characterRouter = require('../characters/charactersRouter.js');

//create the server
const server = express();

// "teach" the server to read JSON
server.use(helmet());
server.use(CORS);
server.use(express.json());