/// <reference path="angular.min.js" />
/// <reference path="angular-route.min.js" />

var app = angular.module('app', ['ui.router', 'ngMaterial', 'ngMessages']);

app.config(['$stateProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('simple-calculator', {
        url: '/simple-calculator',
        views: {
            'calculator': {                
                templateUrl: 'Views/simple-calculator.html',
                controller: 'simpleCalculatorController'
            }
        }
    })
    .state('samplelist', {
        url: '/samplelist',
        views: {
            'heading': {
                templateUrl: 'Views/sample-heading.html'
            },
            'samplelist': {
                templateUrl: 'Views/sample-list.html',
                controller: 'sampleListController'
            },
            'underconstruction': {
                templateUrl: 'Views/under-construction.html'
            }
        }
    })
    .state('text-to-json', {
        url: '/text-to-json',
        views: {
            'texttojson':{
                templateUrl: 'Views/text-to-json.html',
                controller: 'textToJsonController'
            }
        }
    })
    .state('root', {
        url: '',
        templateUrl: 'Views/home.html',
        controller: 'homeController',
        controllerAs: "vm"
    })
    .state('otherwise',{
        url: '',
        templateUrl: 'Views/home.html',
        controller: 'homeController',
        controllerAs: "vm"
    })
}])

