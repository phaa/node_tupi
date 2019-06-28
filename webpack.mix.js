let mix = require('laravel-mix');

//mix.js('src/app.js', 'dist/').sass('src/app.scss', 'dist/');

// Style files
mix.styles([
    'public/vendor/animate/animate.css',
    'public/vendor/slick/slick.css',
    'public/vendor/lightbox/css/lightbox.css',
    //'public/vendor/css-hamburgers/hamburgers.css'
], 'public/css/vendor.min.css');

// Vendor JS minifying
mix.scripts([
    'public/vendor/parallax100/parallax100.js',
    'public/vendor/lightbox/js/lightbox.min.js'
], 'public/js/vendor.min.js');
