module.exports = function errors(app) {
    
    // 404 error handler
    function handle404(req, res, next) {
        
        var
            err = new Error('Not Found');
        
        err.status = 404;
        next(err);
        
    }
    
    // 500 error handler
    function handle500(err, req, res) {
        
        var
            error;
        
        res.status(err.status || 500);
        
        error = {
            
            message: err.message,
            error: (app.get('env') !== 'production') ? err : {}
            
        };
        
        res.render('error', error);
        
    }
    
    // add the error handlers
    app.use(handle404);
    
    app.use(handle500);
    
};