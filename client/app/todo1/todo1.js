'use strict';

angular.module('todoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/create', {
        templateUrl: 'app/todo1/create/create.html',
        controller: 'CreateCtrl'
      })
      .when('/show', {
        templateUrl: 'app/todo1/show/show.html',
        controller: 'ShowCtrl'
      })
      .when('/edit/:id', {
        templateUrl: 'app/todo1/edit/edit.html',
        controller: 'EditCtrl'
       
      });
  });