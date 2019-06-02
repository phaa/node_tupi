'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index').as('index')
Route.on('/menu').render('menu').as('menu')
Route.on('/gallery').render('gallery').as('gallery')
Route.on('/about').render('about').as('about')
Route.on('/blog').render('blog').as('blog')
Route.on('/contact').render('contact').as('contact')
