/// <reference path="../libs/angular.min.js" />
(function () {
    var app = angular.module('githubViewer');

    var repoController = function (github, $scope, $routeParams) {

        var onRepo = function (data) {
            $scope.repo = data;
        };

        var onError = function (reason) {
            $scope.error = 'Could not fetch the data because' + reason;
        };

        var username = $routeParams.username;
        var reponame = $routeParams.reponame;
        github.getRepoDetails(username, reponame)
              .then(onRepo, onerror);
    };

    app.controller('repoController', ['github', '$scope', '$routeParams', repoController])
}());