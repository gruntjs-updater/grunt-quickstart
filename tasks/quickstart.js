/*
 * grunt-contrib-quickstart
 * https://github.com/mauvm/grunt-contrib-quickstart
 *
 * More info available at: https://github.com/spotify/quickstart
 *
 * Copyright (c) 2014 Maurits van Mastrigt
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function( grunt ) {
	var path       = require( 'path' );
	var fs         = require( 'fs' );
	var nodefs     = require( 'node-fs' );
	var quickstart = require( 'quickstart' );

	grunt.registerMultiTask( 'quickstart', 'Resolve, load, and compile CommonJS modules with Quickstart.', function() {
		var done = this.async();

		// Options
		var options = this.options( {
			// Override the default runtime, defaults to quickstart/runtime/browser
			runtime: 'quickstart/runtime/browser',
			// Which transforms to use, defaults to none
			transforms: [],
			// Which parsers to use for each file extension, defaults to none, except embedded ones such as .js and .json.
			parsers: {},
			// Optimize and mangle the ast and JavaScript output
			compress: false,
			// // Generates the (compressed if {compress: true}) JavaScript output, defaults to true
			// output: true,
			// Generates the (compressed if {compress: true}) source map, defaults to false
			sourceMap: false,
			// Compiles the QuickStart compiler instead of the current app, defaults to false
			self: false,
			// Override the application's main, defaults to the QuickStart resolver
			main: false
		} );

		// Runtime
		// NOTE: Prepend quickstart basedir to default runtimes
		var quickstartBaseDir = __dirname + '/../node_modules';

		if( ! fs.existsSync( options.runtime ) ) {
			options.runtime = path.resolve( quickstartBaseDir, options.runtime );
		}

		// Shortcuts
		if( typeof this.data.src === 'string' ) {
			options.main = this.data.src;
		}
		if( typeof this.data.dest === 'string' ) {
			options.output = this.data.dest;
		}

		// Root path
		// NOTE: Trailing slash is required for Quickstart to recognize it as a path
		options.root = process.cwd() + '/';

		// Output file
		if( ! options.output || typeof options.output !== 'string' ) {
			grunt.fatal( 'No output file specified!' );
		}

		// Create output directory (recursively)
		var baseDir = path.dirname( path.resolve( options.root, options.output ) );

		nodefs.mkdirSync( baseDir, parseInt( '0755', 8 ), true );

		// Run
		quickstart( options ).then( function( compiled ) {
			// Append sourceMap
			if( options.sourceMap ) {
				var sourceMap = new Buffer( JSON.stringify( sourceMap ) ).toString( 'base64' );
				compiled.source += '\n//# sourceMappingURL=data:application/json;base64,' + sourceMap;
			}

			fs.writeFile( options.output, compiled.source, function( err ) {
				if( err ) {
					grunt.fatal( err );
				}

				grunt.log.ok( 'Compiled to ' + path.resolve( options.root, options.output ) );
				done();
			} );
		}, grunt.fatal );
	} );
};
