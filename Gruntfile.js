module.exports = function(grunt) {

	grunt.initConfig({
		watch: {
			sass: {
				files: ['scss/*.scss'],
				tasks: ['concat:scss', 'sass', 'postcss', 'cssmin']
			},
			js: {
				files: ['js/*.js'],
				tasks: ['concat:js', 'uglify']
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'build/css/final.css': 'build/scss/app.scss'
				}
			}
		},
		concat: {
			js: {
				src: ['js/**/*.js'],
				dest: 'build/js/app.js'
			},
			scss: {
				src: ['scss/**/*.scss'],
				dest: 'build/scss/app.scss'
			}
		},
		uglify: {
    		my_target: {
      			files: {
        			'build/js/final.min.js': ['build/js/app.js']
      			}
    		}
  		},
		postcss: {
    		options: {
      			map: true,
				processors: [
        			require('pixrem')(),
        			require('autoprefixer')({browsers: 'last 2 versions'})
      			]
    		},
    		dist: {
      			src: 'build/css/final.css'
    		}
  		},
  		cssmin: {
  			options: {
    			shorthandCompacting: false,
    			roundingPrecision: -1
  			},
  			target: {
    			files: {
      				'build/css/final.min.css': ['build/css/final.css']
    			}
  			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['concat:scss', 'sass', 'postcss', 'cssmin', 'concat:js', 'uglify', 'watch']);

};