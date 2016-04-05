var
    fs = require('fs'),
    files = fs.readdirSync(__dirname),
    tasks = {};

files.forEach(function (file) {

    if (file && file.slice(0, 1) !== '.') {
        tasks[file.split('.')[0]] = require('./' + file);
    }

});

module.exports = tasks;