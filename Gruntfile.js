/*jshint node:true */
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
        connect: {
            options: {
                port: 9007,
                hostname: '0.0.0.0', // '0.0.0.0' to access the server from outside (VM).
                livereload: 35729
            },
            dev: {
                options: {
                    open: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>'
                }
            }
        },
        raget: {
            rjsConfig: 'config/require.config.js'
        },
        compass: {
            dev: {
                options: {
                    config: 'config/compass.rb',
                    environment: 'development',
                    outputStyle: 'expanded'
                }
            },
            dist: {
                options: {
                    config: 'config/compass.rb',
                    environment: 'production',
                    outputStyle: 'compressed'
                }
            }
        },
        watch: {
            css: {
                files: 'assets/styles/scss/**/*.scss',
                tasks: ['compass:dev'],
                options: {
                    atBegin: true
                }
            },
            dev: {
                files: [
                    'assets/styles/scss/**/*.scss',
                    '/assets/styles/scss/**/*.scss',
                    '/*.html',
                    'app/**/{*.html,*.js}'
                ],
                tasks: ['compass:dev'],
                options: {
                    livereload: true,
                    atBegin: true
                }
            }
        }
    });
    
    // Starts a web server with livereload functionality for the sandbox
    grunt.registerTask('serve', ['connect:dev', 'watch:dev']);

    grunt.registerTask('default', [ 'serve' ]);

    //TODO: Create a dist task and assign as the default task
};