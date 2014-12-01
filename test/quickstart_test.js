'use strict';

var grunt = require( 'grunt' );

function testGenerated( test, actual, expected ) {
	test.equal(
		grunt.file.read( actual ),
		grunt.file.read( expected ),
		'the actual value should equal the expected value.'
	);
}

exports.quickstart = {
	compile: function( test ) {
		test.expect( 1 );
		testGenerated(
			test,
			'tmp/compiled.js',
			'test/expected/compiled.js'
		);
		test.done();
	},
	compile_compressed: function( test ) {
		test.expect( 1 );
		testGenerated(
			test,
			'tmp/compiled_compressed.js',
			'test/expected/compiled_compressed.js'
		);
		test.done();
	},
	compile_with_dep: function( test ) {
		test.expect( 1 );
		testGenerated(
			test,
			'tmp/compiled_with_dep.js',
			'test/expected/compiled_with_dep.js'
		);
		test.done();
	},
	compile_with_external_dep: function( test ) {
		test.expect( 1 );
		testGenerated(
			test,
			'tmp/compiled_with_external_dep.js',
			'test/expected/compiled_with_external_dep.js'
		);
		test.done();
	},
	compile_with_source_map: function( test ) {
		test.expect( 2 );
		testGenerated(
			test,
			'tmp/compiled_with_source_map.js',
			'test/expected/compiled_with_source_map.js'
		);
		testGenerated(
			test,
			'tmp/compiled_with_source_map.js.map',
			'test/expected/compiled_with_source_map.js.map'
		);
		test.done();
	}
};
