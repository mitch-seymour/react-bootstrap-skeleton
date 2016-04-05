var
    path = require('path');

module.exports = {
    scripts: {
        files: ['<%= jsPath %>/**/*.js', '<%= jsPath %>/**/*.jsx'],
        tasks: ['browserify:bundle'],
        options: {
            //livereload: true
        }
    },
    styles: {
        files: ['<%= cssPath %>/*.css'],
        tasks: ['defaut'],
        options: {
            livereload: true
        }
    }
};