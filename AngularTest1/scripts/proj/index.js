/// <reference path="../libs/angular.min.js" />

(function () {
    //define a module; the name of the module can be specified in 'ng-app' directive
    var app = angular.module("githubViewer", []);

    //$scope is where the properties can be added
    //$http is used to make requests
    var MainController = function ($scope, $http) {
        var onUserComplete = function (response) {
            $scope.user = response.data;
        }

        $scope.message = "some text";

        $http.get("https://api.github.com/users/sebastianbadea")
             .then(onUserComplete);
    };
    //add controller to module; the name of the controller can be specified in 'ng-controller' directive
    app.controller("MainController", ["$scope", "$http", MainController]);
}());