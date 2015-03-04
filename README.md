# grunt-quickstart

> Resolve, load, and compile CommonJS modules with [Quickstart](http://spotify.github.io/quickstart/).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-quickstart --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks( 'grunt-quickstart' );
```

## The "quickstart" task

### Overview
In your project's Gruntfile, add a section named `quickstart` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig( {
  quickstart: {
    options: {
      // Override the default runtime, defaults to quickstart/runtime/browser
      runtime: 'quickstart/runtime/browser',

      // Which transforms to use, defaults to none
      transforms: [],

      // Which parsers to use for each file extension, defaults to none, except embedded ones such as .js and .json.
      parsers: {},

      // Optimize and mangle the ast and JavaScript output
      compress: false,

      // Generates the (compressed if {compress: true}) source map, defaults to false
      sourceMap: false,

      // Compiles the QuickStart compiler instead of the current app, defaults to false
      self: false,

      // Override the application's main, defaults to the QuickStart resolver
      main: false
    },
    src: 'path/to/file.js',   // Shorthand for options.main
    dest: 'path/to/output.js' // Shorthand for options.output
  },
} );
```

### Options

More information about the options can be found in the [Quickstart repository](https://github.com/spotify/quickstart).

### Usage Examples

#### Default Options
In this example, the default options are used to compile the `src` file into the `dest` (output) file.

```js
grunt.initConfig( {
  quickstart: {
    src: 'path/to/main-file.js',
    dest: 'path/to/output-file.js'
  },
} );
```

#### Custom Options
In this example, additional `options` are given to compress the output and create a source map.

```js
grunt.initConfig( {
  quickstart: {
    options: {
      compress: true,
      sourceMap: true
    },
    src: 'path/to/main-file.js',
    dest: 'path/to/output-file.js'
  },
} );
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2014 Maurits van Mastrigt. Licensed under the MIT license.
