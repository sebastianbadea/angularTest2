﻿/// <reference path="../libs/angular.min.js" />

(function () {
    //define a module; the name of the module can be specified in 'ng-app' directive
    //the second parameter is for module dependencies; if it's not defined, the call will be interpreted as 'loading' a module
    var app = angular.module('githubViewer', []);

    //all the service(?) dependencies must be added here; when creating a service, the js file must be referenced in html after the one with the module where it's used
    //the mapping between custom made services and modules is made from within services
    //$scope is where the properties can be added; they can then be used in html through 'directives'
    //so far, $scope is like the model in knockout, except the fact that is defined in a controller and this can be applied to an element from DOM; this way the page can have multiple models
    //$http is used to make requests
    var MainController = function ($scope, $log, github) {
        var onUserComplete = function (data) {
            $log.info('Loaded the user');
            $scope.user = data;
            github.getRepos($scope.user.repos_url)
                  .then(onReposComplete, onError);
        };

        var onReposComplete = function (data) {
            $scope.repos = data;
            $log.info('Loaded the repos');
        };

        var onError = function (reason) {
            $scope.error = 'Could not fetch the data because' + reason;
            $scope.user = undefined;
        };

        $scope.message = 'github viewer';

        $scope.search = function () {
            github.getUser($scope.username)
                  .then(onUserComplete, onError);
        };
        //the 'sortOrder' field is used for sorting an 'ng-repeat'; the '-' means that is sorting in descending order
        $scope.sortOrder = '-language';
        $scope.username = 'sebastianbadea';
    };
    //add controller to module; the name of the controller can be specified in 'ng-controller' directive
    //if the syntax with dependencies is used, all the services must be added, including the custom made
    //also, the order must be the same as in the function definition
    app.controller('MainController', ['$scope', '$log', 'github', MainController]);
}());