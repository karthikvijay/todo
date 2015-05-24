'use strict';

angular.module('todoApp')
  .controller('CreateCtrl', function ($scope,$window,$http,$location) {

  	$scope.submit=function(todoForm){
  		if($scope.todo1 === {}) {
        $window.alert("Fill The Form");
        return;
      }
      if(!$scope.todo1.status===true){
      	$scope.todo1.status=false;
      }
      $http.post('/api/tasks',$scope.todo1);
      $scope.todo1 = {};
      $location.path('/show');
  	}

    
  });
