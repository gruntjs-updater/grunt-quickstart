/*
 * grunt-contrib-quickstart
 * https://github.com/mauvm/grunt-contrib-quickstart
 *
 * Copyright (c) 2014 Maurits van Mastrigt
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function( grunt ) {
	grunt.initConfig( {
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		clean: {
			tests: 'tmp/**'
		},
		quickstart: {
			compile: {
				src: 'test/fixtures/compile.js',
				dest: 'tmp/compiled.js'
			},
			compile_compressed: {
				options: {
					compress: true
				},
				src: 'test/fixtures/compile.js',
				dest: 'tmp/compiled_compressed.js'
			},
			compile_with_dep: {
				src: 'test/fixtures/compile_with_dep.js',
				dest: 'tmp/compiled_with_dep.js'
			},
			compile_with_external_dep: {
				src: 'test/fixtures/compile_with_external_dep.js',
				dest: 'tmp/compiled_with_external_dep.js'
			},
			compile_with_source_map: {
				options: {
					sourceMap: true
				},
				src: 'test/fixtures/compile_with_dep.js',
				dest: 'tmp/compiled_with_source_map.js'
			}
		},
		nodeunit: {
			tests: [ 'test/*_test.js' ]
		}
	} );

	grunt.loadTasks( 'tasks' );

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );

	grunt.registerTask( 'test', [ 'clean:tests', 'quickstart', 'nodeunit' ] );

	grunt.registerTask( 'default', [ 'jshint', 'test' ] );
};
