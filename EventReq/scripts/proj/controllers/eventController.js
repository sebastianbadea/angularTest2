/// <reference path="../lib/angular.js" />
'use strict';

var eventController = function ($scope, eventData) {
    
    $scope.event = eventData.event;
};

var eventsApp = angular.module('eventsApp');
eventsApp.controller('eventController', ['$scope', 'eventData', eventController]);