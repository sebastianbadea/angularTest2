﻿/// <reference path="../libs/angular.min.js" />
(function () {
    var github = function ($http) {
        var getUser = function (username) {
            //if the function is used in a 'then' call, it has to return the result
            return $http.get("https://api.github.com/users/" + username)
                     .then(function (response) {
                         return response.data;
                     });
        };
        var getRepos = function (repos_url) {
            //if the function is used in a 'then' call, it has to return the result
            return $http.get(repos_url)
                 .then(function (response) {
                     return response.data;
                 });
        };

        return {
            getUser: getUser,
            getRepos: getRepos
        };
    };

    //can the service be mapped to multiple modules
    var viewer = angular.module('githubViewer');
    viewer.factory('github', github);
}());