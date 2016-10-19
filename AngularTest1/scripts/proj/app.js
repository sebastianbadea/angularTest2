/// <reference path="../libs/angular.min.js" />
(function () {
    //'ngRoute' is the dependent module that handles the routing
    var app = angular.module('githubViewer', ['ngRoute']);

    //this is the equivalent of routeconfig from mvc
    //when('url - relativ to base url), {templateUrl - name of html file(or the view), controller - the function that handles the html}
    //the url can accept parameters; they have prefix ':' - something like a query string
    //before parameters the url must end with '/'
    //the controller has to be set to a valid controller that has been added to the current module; it's not the js file name
    //also, the js files which contain controllers must be referenced in the html file; it's not like with requireJs
    app.config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'html/main.html',
            controller: 'mainController'
        })
        .when('/user/:username', {
            templateUrl: 'html/user.html',
            controller: 'userController'
        })
        .when('/repo/:username/:reponame', {
            templateUrl: 'html/repo.html',
            controller: 'repoController'
        })
        .otherwise({ redirectTo: '/main' });
        $locationProvider.html5Mode(true);
    });

}());