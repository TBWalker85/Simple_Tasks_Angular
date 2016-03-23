document.addEventListener("DOMContentLoaded", function(event) {});

var app = angular.module('MyApp', ['ngRoute', 'MyApp.controllers']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/views.html',
        controller: 'MainController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);