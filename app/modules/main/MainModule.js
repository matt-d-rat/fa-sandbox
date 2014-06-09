define(function (require) {
    'use strict';

    var angular = require('angular');

    var deps = [
        'famous.angular',
        'ngRoute',
        'ngAnimate'
    ];
    
    /**
     * The main module. Entry point to the app.
     * Responsible for loading the main application controller and view.
     */
    return angular.module('main', deps )
        .controller('mainCtrl', require('app/modules/main/MainCtrl'))
        .config(function ($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'app/modules/main/views/main.html',
                controller: 'mainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        });
});