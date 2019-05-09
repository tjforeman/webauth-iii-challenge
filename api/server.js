const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const usersRouter = require('../routes/users-route.js');
const registerRouter = require('../routes/register-route.js');
const loginRouter =require('../routes/login-route.js')


const server=express()

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/register',registerRouter);
server.use('/api/login',loginRouter);
server.use('/api/users',usersRouter)


module.exports = server;