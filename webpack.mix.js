let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('src/app.js', 'dist/').sass('src/app.scss', 'dist/');

// Style files
mix.sass('resources/assets/sass/app.scss', 'public/css');
//mix.sass('public/css/main.scss', 'public/css'); deixa pro koala
//mix.sass('public/css/util.scss', 'public/css'); deixa pro koala

mix.styles([
    'public/vendor/animate/animate.css',
    'public/vendor/css-hamburgers/hamburgers.min.css',
    'public/vendor/animsition/css/animsition.min.css',
    'public/vendor/select2/select2.min.css',
    'public/vendor/daterangepicker/daterangepicker.css',
    'public/vendor/slick/slick.css',
    'public/vendor/lightbox2/css/lightbox.min.css'
], 'public/css/vendor.css');

// JS files
mix.js('resources/assets/js/app.js', 'public/js');
mix.scripts([
    'public/vendor/parallax100/parallax100.js',
    'public/vendor/countdowntime/countdowntime.js',
    'public/vendor/lightbox2/js/lightbox.min.js'
], 'public/js/vendor.js');
