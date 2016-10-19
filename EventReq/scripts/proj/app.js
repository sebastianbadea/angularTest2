/// <reference path="../lib/angular.js" />

'use strict';
var eventsApp = angular.module('eventsApp', ['ngRoute']);
eventsApp.config(function ($routeProvider) {
    $routeProvider.when('/newEvent', {
        templateUrl: 'templates/newEvent.html',
        controller: 'editEventController'
    })
    .when('/default', {
        templateUrl: 'templates/eventDetails.html',
        controller: 'eventController'
    })
    .otherwise({ redirectTo: '/default' });
});