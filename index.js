'use strict';

var fs = require('fs'),
http = require('http'),
path = require('path');

var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({
    strict: false
}));
var oasTools = require('oas-tools');
var jsyaml = require('js-yaml');
//Heroku port
//var serverPort = 8080;
var serverPort = process.env.YOUR_PORT || process.env.PORT || 8080;

var spec = fs.readFileSync(path.join(__dirname, '/api/openapi.yaml'), 'utf8');
var oasDoc = jsyaml.safeLoad(spec);

//-----------Swagger-stats
var swStats = require('swagger-stats');    

// Load your swagger specification 
var apiSpec = require('./api/openapi.json');

// Enable swagger-stats middleware in express app, passing swagger specification as option 
app.use(swStats.getMiddleware({swaggerSpec:apiSpec}));

//----------------Swagger-stats

var options_object = {
    controllers: path.join(__dirname, './controllers'),
    loglevel: 'info',
    strict: false,
    router: true,
    validator: true
};

oasTools.configure(options_object);

oasTools.initialize(oasDoc, app, function() {
    http.createServer(app).listen(serverPort, function() {
        console.log("App running at http://localhost:" + serverPort);
        console.log("________________________________________________________________");
        if (options_object.docs !== false) {
            console.log('API docs (Swagger UI) available on http://localhost:' + serverPort + '/docs');
            console.log("________________________________________________________________");
        }
    });
});
