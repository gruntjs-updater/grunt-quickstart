'use strict';

var grunt = require( 'grunt' );

function testGenerated( test, actual, expected ) {
	test.expect( 1 );
	test.equal(
		grunt.file.read( actual ),
		grunt.file.read( expected ),
		'the actual value should equal the expected value.'
	);
	test.done();
}

exports.quickstart = {
	compile: function( test ) {
		testGenerated(
			test,
			'tmp/compiled.js',
			'test/expected/compiled.js'
		);
	},
	compile_compressed: function( test ) {
		testGenerated(
			test,
			'tmp/compiled_compressed.js',
			'test/expected/compiled_compressed.js'
		);
	},
	compile_with_dep: function( test ) {
		testGenerated(
			test,
			'tmp/compiled_with_dep.js',
			'test/expected/compiled_with_dep.js'
		);
	},
	compile_with_external_dep: function( test ) {
		testGenerated(
			test,
			'tmp/compiled_with_external_dep.js',
			'test/expected/compiled_with_external_dep.js'
		);
	},
	compile_with_source_map: function( test ) {
		testGenerated(
			test,
			'tmp/compiled_with_source_map.js',
			'test/expected/compiled_with_source_map.js'
		);
	}
};
