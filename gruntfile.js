module.exports = function gruntConfig(grunt) {
    
	var
        pkg = grunt.file.readJSON('package.json'),
        path = require('path'),
        tasks = require('./tasks/grunt'),
        gruntInitConfig;

	gruntInitConfig = {
	   
        pkg: pkg,
        jsPath: path.resolve(__dirname, 'assets/js/'),
        cssPath: path.resolve(__dirname, 'assets/css/'),
		pubJsPath: path.resolve(__dirname, 'public/js/'),
		pubCssPath: path.resolve(__dirname, 'public/css/')

	};

	// save the options for each task
	for (var task in tasks){
        
        console.log(task);
		gruntInitConfig[task] = tasks[task];
	}
    
	// update the grunt config
	grunt.initConfig(gruntInitConfig);
    
	// load the tasks dynamically
	for (var dep in pkg.devDependencies) {
		if (dep !== 'grunt' && !dep.indexOf('grunt')) {
			grunt.loadNpmTasks(dep);
		}
	}
	
	grunt.registerTask('default', ['uglify', 'cssmin', 'watch']);
    
    // wtf ?? cssmin trying to execute 'defaut' task
    grunt.registerTask('defaut', ['uglify', 'cssmin', 'watch']);
}
