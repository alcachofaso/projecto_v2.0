'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// Cargar Rutas
var user_routes = require('./routes/user.route');


// Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar Cabeceras y CORS
app.use((req,res,next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Acces-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

// Rutas base

app.use('/api', user_routes);


// Exportar módulo
module.exports = app;