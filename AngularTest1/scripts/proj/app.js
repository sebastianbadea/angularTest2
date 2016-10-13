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
    app.config(function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'main.html',
            controller: 'mainController'
        })
        .when('/user/:username', {
            templateUrl: 'user.html',
            controller: 'userController'
        })
        .when('/repo/:username/:reponame', {
            templateUrl: 'repo.html',
            controller: 'repoController'
        })
        .otherwise({redirectTo: '/main'});
    });

}());