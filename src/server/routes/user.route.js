
'use strict'

var express = require('express');
var UserController = require('../controllers/user.controller');
var api = express.Router();



api.post('/user/login', UserController.loginUser);
api.get('/user/get', UserController.getUsers);


module.exports = api;
