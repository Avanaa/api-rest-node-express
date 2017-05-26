var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var validator = require('express-validator');

module.exports = function(){

    var app = express();

    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());

    app.use(validator());

    consign()
        .include('persistence')
        .then('dao')
        .then('files')
        .then('controllers')
        .into(app);

    return app;
}