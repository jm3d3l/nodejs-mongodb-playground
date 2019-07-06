const express = require('express');
const course = require("../routes/course");

module.exports = function(app) {
    app.use(express.json());
    app.use(express.urlencoded({extended : true}));
    app.use(express.static('public'));
    app.use('/api/course', course);
}