var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/frodo', {
        templateUrl: 'views/frodo.html',
        controller: 'FrodoController as fc'
    } ).otherwise({ redirectTo: '/'});
});