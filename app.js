/**
 * Requires
 */
const express = require('express');
const app = express();

/**
 * Modules SetUp
 */
// Config
require("./controller/ConfigController")(app)

// Router
require("./controller/RouterController")(app)

// Error Handler
require("./controller/ErrorHandlerController")(app)




// Export module
module.exports = app;
