/**
 * Requires
 */
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const express = require('express');

// Export module
module.exports = (app) => {
    // static data locations
    app.use(express.static(path.join(__dirname, '../public')));
    app.set('views', path.join(__dirname, '../views'));
    
    // view engine setup
    app.set('view engine', 'ejs');

    // http requets log
    //app.use(logger('dev'));
    app.use(logger('short'));
    
    // encoders setup
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());

}
