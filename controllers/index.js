module.exports = function router(app) {
    
    function defaultRoute(req, res) {
    
        res.render('app/index');

    }
    
    app.use('/', defaultRoute);
    
};