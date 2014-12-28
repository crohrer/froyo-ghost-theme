module.exports = function(grunt) {
    require('grunt-task-loader')(grunt);

    grunt.initConfig({
        watch: {
            sass: {
                files: ['assets/scss/**/*.scss'],
                tasks: ['sass']
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/css/screen.css': 'assets/scss/screen.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['watch']);
};