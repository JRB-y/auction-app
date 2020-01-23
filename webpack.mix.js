const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Public Folder Path
 |--------------------------------------------------------------------------
 | 
 | Here we can provide a public folder path and a path for chunks.
 |
 */

mix.setPublicPath('public');
mix.webpackConfig({
  output: {
    chunkFilename: 'js/[name].js',
  },
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css');


