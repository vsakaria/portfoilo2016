module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        compass: {
            build: {
                options: {
                    sassDir: 'app/assets/sass',
                    cssDir: 'app/assets/css'
                }
            }
        },
        clean: {
            pre: ['app/assets/css'],
            post: ['.sass-cache']
        },
        watch: {
            sass: {
                files: ['app/assets/sass/**/*.{sass,scss}', 'app/assets/sass/*.{sass,scss}'],
                tasks: ['compass']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['app/assets/css/*.css']
            }
            // another: {
            // //     files: ['js/*.js', '*.html']
        },
        open : {
            dev : {
                path: 'index.html',
                app: 'Google Chrome'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'output.css': ['app/assets/css/main.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-open');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('dev', ['clean:pre', 'compass', 'open', 'watch', 'clean:post']);
    grunt.registerTask('prod', ['cssmin']);
};
