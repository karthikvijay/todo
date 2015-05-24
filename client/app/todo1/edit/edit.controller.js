'use strict';

angular.module('todoApp')
  .controller('EditCtrl', function ($scope,$window,$http,$routeParams) {
    console.log($routeParams.id);
    $http.get('/api/tasks/'+$routeParams.id).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available.
    console.log('todo1: ', data );
    console.log("loose");
    $scope.todo1=data;
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('Oops and error', data);
  });
  $scope.submit=function(editForm){
    $http.put('/api/tasks/'+$routeParams.id,$scope.todo1).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available.
    console.log('todo1: ', data );
    console.log("looseup");
  
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('Oops and error', data);
  });
  }

  	
    
  });
