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
            options: {
                livereload: true
            },
            another: {
                files: ['js/*.js', '*.html']
            }
        },
        open : {
            dev : {
                path: '//Users/vishalsakaria/Code/portfoilo16/index.html',
                app: 'Google Chrome'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('dev', ['clean:pre', 'compass', 'open', 'watch', 'clean:post']);
};
