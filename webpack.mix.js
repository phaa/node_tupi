let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/').sass('src/app.scss', 'dist/');

// Style files
//mix.sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([
    'public/vendor/animate/animate.css',
    'public/vendor/slick/slick.css',
    'public/vendor/lightbox2/css/lightbox.min.css'
], 'public/css/vendor.css').minify();

// JS files
//mix.js('resources/assets/js/app.js', 'public/js');
// JS vendor
mix.scripts([
    'public/vendor/parallax100/parallax100.js',
    'public/vendor/lightbox2/js/lightbox.min.js'
], 'public/js/vendor.js').minify();
