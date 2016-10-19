/// <reference path="../libs/angular.min.js" />
(function () {
    var app = angular.module('githubViewer');
    //#region comments
    //the sent parameters to the controllers are in $routeParams
    //so, 1)the route in specified in app.js, 2)the redirect is made with href from html or $location from js and 3) the parameters are retrieved from $routeParams
    //$routeParams can be used also in services 
    //another service that can be used for getting the parameters is $route; 
    //$route can also get the query string apart from parameters established in the route config, path & others
    //$route can be used for reloading only the template
    //#endregion
    var repoController = function (github, $scope, $routeParams, $route) {

        var onRepo = function (data) {
            $scope.repo = data;
        };

        var onError = function (reason) {
            $scope.error = 'Could not fetch the data because' + reason;
        };

        console.log($route.current.params.foo);

        var username = $routeParams.username;
        var reponame = $routeParams.reponame;
        github.getRepoDetails(username, reponame)
              .then(onRepo, onerror);
    };

    app.controller('repoController', ['github', '$scope', '$routeParams', '$route', repoController])
}());