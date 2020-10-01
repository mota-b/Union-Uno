/**
 * Requires
 */


// Export module
module.exports = (app) => {

    // import routers
    const indexRouter = require('../routes/index');
    //var usersRouter = require('../routes/users');


    // use routers
    app.use('/', indexRouter);
    //app.use('/users', usersRouter);
}