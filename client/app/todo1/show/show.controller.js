'use strict';

angular.module('todoApp')
  .controller('ShowCtrl', function ($scope,$window,$http,$location) {

  	$http.get('/api/tasks').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available.
    console.log('todos: ', data );
    console.log("loose");
    $scope.todo1s=data;
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('Oops and error', data);
  });

  $scope.submit=function(todo1){
    console.log("hi");
    console.log(todo1.name);
    console.log(todo1._id);
    todo1.updatedAt=Date.now();
    console.log(Date.now());
    console.log(todo1.updatedAt);
    $http.put('/api/tasks/'+todo1._id,todo1).
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
    $http.get('/api/tasks').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available.
    console.log('todos: ', data );
    console.log("loose");
    $scope.todo1s=data;
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('Oops and error', data);
  });

  }

  $scope.deleter=function(valu){
    $http.delete('/api/tasks/'+valu);
    $http.get('/api/tasks').
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available.
    console.log('todos: ', data );
    console.log("loose");
    $scope.todo1s=data;
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('Oops and error', data);
  });
  }

    
  });
