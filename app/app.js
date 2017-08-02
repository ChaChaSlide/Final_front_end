import appComponent from './app.component';
import navComponent from './components/nav/nav.component';
import footerComponent from './components/footer/footer.component';



angular.module('app', ['ngRoute','ngCookies', 'ngResource'])
.component('app', appComponent)
.component('nav', navComponent)
.component('footer', footerComponent)




config.$inject = ['$routeProvider', '$locationProvider'];
  function config($routeProvider, $locationProvider){
    $routeProvider


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
