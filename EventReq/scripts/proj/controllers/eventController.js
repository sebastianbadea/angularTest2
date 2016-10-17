/// <reference path="../lib/angular.js" />
'use strict';

var eventController = function ($scope, eventData) {
    
    $scope.event = {
        name: 'Angular boot camp',
        date: '1/1/2013',
        time: '10:30 am',
        imageUrl: '../content/images/banner-angularjs.jpg',
        location: {
            address: 'some address',
            city: 'Bucharest',
            province: 'Pipera'
        },
        sessions: [
            {
                name: 'Dirrectives Masterclass',
                creatorName: 'John Smith',
                duration: '1 hr',
                level: 'Advanced',
                abstract: 'In this session whatever',
                upVoteCount: 0
            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'John Smith jr',
                duration: '30 min',
                level: 'Introductory',
                abstract: 'In this session whatever',
                upVoteCount: 0
            },
            {
                name: 'Well behaved controllers',
                creatorName: 'John Smith',
                duration: '2 hr',
                level: 'Medium',
                abstract: 'In this session whatever',
                upVoteCount: 0
            }
        ]
    };
};

var eventsApp = angular.module('eventsApp');
eventsApp.controller('eventController', ['$scope', 'eventData', eventController]);