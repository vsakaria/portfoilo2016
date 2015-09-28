module.exports = function(grunt) {

    grunt.initConfig({

        // Package
        pkg: grunt.file.readJSON('package.json'),

        // Compass
        compass: {
            build: {
                options: {
                    sassDir: 'assets/sass',
                    cssDir: 'assets/css'
                }
            }
        },

        // Clean
        clean: {
            pre: ['assets/css'],
            post: ['.sass-cache']
        },

        // Watch
        watch: {
            sass: {
                files: ['assets/sass/*.{sass,scss}'],
                tasks: ['compass']
            }
        }
    });

    // Load NPM Tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Register Grunt tasks
    grunt.registerTask('default', ['clean:pre', 'compass', 'clean:post']);

};
