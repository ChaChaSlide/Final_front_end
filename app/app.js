import appComponent from './app.component';



angular.module('app', ['ngRoute','ngCookies', 'ngResource'])
.component('app', appComponent)
