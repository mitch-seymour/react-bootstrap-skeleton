var
	path = require('path'),
	uglify_options = require(path.resolve(__dirname, 'uglify.js')),
    files = uglify_options.all.files,
    lint = [];

for (var file in files){
    
    lint.push(files[file]);
    
}

module.exports = {
    options: {
        jshintrc: '.jshintrc'
    },
    files: lint
};