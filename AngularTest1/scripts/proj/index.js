/// <reference path="../libs/angular.min.js" />

(function () {
    //define a module; the name of the module can be specified in 'ng-app' directive
    var app = angular.module("githubViewer", []);

    //$scope is where the properties can be added
    //$http is used to make requests
    var MainController = function ($scope, $http) {
        var onUserComplete = function (response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                 .then(onReposComplete, onError);
        };

        var onReposComplete = function (response) {
            $scope.repos = response.data;
        };

        var onError = function (reason) {
            $scope.error = "Could not fetch the data because" + reason;
            $scope.user = undefined;
        };

        $scope.message = "github viewer";

        $scope.search = function () {
            $http.get("https://api.github.com/users/" + $scope.username)
                 .then(onUserComplete, onError);
        };
        //the 'sortOrder' field is used for sorting an 'ng-repeat'; the '-' means that is sorting in descending order
        $scope.sortOrder = "-language";
        $scope.username = "sebastianbadea";
    };
    //add controller to module; the name of the controller can be specified in 'ng-controller' directive
    app.controller("MainController", ["$scope", "$http", MainController]);
}());