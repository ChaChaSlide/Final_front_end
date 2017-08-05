import appComponent from './app.component';
import navComponent from './components/nav/nav.component';
import shopComponent from './components/shop/shop.component';
import contactComponent from './components/contact/contact.component';
import aboutComponent from './components/about/about.component';
import homeComponent from './components/home/home.component';


angular.module('app', ['ngRoute','ngCookies', 'ngResource'])
.component('app', appComponent)
.component('nav', navComponent)
.component('shop', shopComponent)
.component('contact', contactComponent)
.component('about', aboutComponent)
.component('home', homeComponent)
.config(config)





config.$inject = ['$routeProvider', '$locationProvider'];
  function config($routeProvider, $locationProvider){
    $routeProvider
      .when('/home', {
        templateUrl: 'app/components/home/home.html'
      })

      .when('/shop', {
        templateUrl: 'app/components/shop/shop.html'
      })

      .when('/about', {
        templateUrl: 'app/components/about/about.html'
      })

      .when('/contact', {
        templateUrl: 'app/components/contact/contact.html'
      })

      .otherwise({redirectTo: '/shop'});
  }
