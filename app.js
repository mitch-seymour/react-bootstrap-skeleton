var
    express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    controllers = require('./controllers'),
    errors = require('./errors'),
    
    app = express();

// view settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// logging
app.use(logger('dev'));

// request parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// static paths
app.use(express.static(path.join(__dirname, 'public')));

// set up controller actions
controllers(app);

// set up error handlers
errors(app);

module.exports = app;