var
    app = require('../app'),
    server;
    
app.set('port', process.env.PORT || 9000);

server = app.listen(app.get('port'), function () {

    console.log('Express server listening on port ' + server.address().port);

});