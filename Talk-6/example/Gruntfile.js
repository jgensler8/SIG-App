module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				banner: '/* Global Banner Stuff */'
			},

			build: {
				options: {
					banner: '/* Global Banner Stuff */',
					beautify: true,
					wrap: true,
					compress: {
						drop_console: false
					}
				},
				files: {
					'build/<%= pkg.name %>.build.min.js' : ['src/test1.js', 'src/test2.js']
				}
			},

			footer:{
				files: {
					'build/<%= pkg.name %>.footer.min.js': ['src/test1.js', 'src/test2.js']
				},
				options: {
					footer: '/* Footer Stuff ! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
				}
			},
		},


		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				browser: true,
				undef: true,
				unused: true,
				globals: {
					console: true
				}
			},
			normal: ['src/test1.js','src/test2.js'],
			better: ['src/*.js'],
			build: ['build/*.js']
		},

		watch: {
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint'],
			},
			src: {
				files: ['src/*.js'],
				tasks: ['jshint']
			},
			build: {
				files: ['build/*.js'],
				tasks: ['jshint']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'uglify']);	

};