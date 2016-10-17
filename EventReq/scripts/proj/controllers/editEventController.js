/// <reference path="../../libs/angular.js" />
'use strict';
var editEventController = function ($scope) {
    $scope.save = function (event, form) {
        //when a validation is made angular put attributes on fields(ng-invalid ng-invalid-required, etc) and they can be defined in css to display invalid fields(change backcolor, etc)
        if (form.$valid) {//property provided by angular to verify if a form is valid

            alert('saving model');
        }
    }
};

var app = angular.module('eventsApp');
app.controller('editEventController', ['$scope', editEventController]);