module.exports = {
    default: {
        options: {
            banner: '/*\n speke - <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
        },
        files: {
            '<%= pubCssPath %>/app.bundle.min.css': ['<%= pubCssPath %>/app.bundle.css']
        }
    }
};