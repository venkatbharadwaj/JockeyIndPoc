'use strict';

/**
 * @ngdoc overview
 * @name jockeyIndPocApp
 * @description
 * # jockeyIndPocApp
 *
 * Main module of the application.
 */
angular
    .module('jockeyIndPocApp', [
        'ui.router',
        'infinite-scroll'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('/', {
                url: "/",
                views: {
                    "header": {
                        templateUrl: 'views/header.html'
                    },
                    "footer": {
                        templateUrl: 'views/footer.html'
                    },
                    "body": {
                        controller: 'HomeCtrl',
                        templateUrl: 'views/home.html'
                    }
                }

            });

    });
