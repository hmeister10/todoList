'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('MainCtrl', function ($scope) {
    
  	$scope.ipListItem = '';
  	$scope.todoItem = {
  							"text":'',
  							'date':'',
  							'done':false
  						};

  	

	var obj = window.localStorage.getItem('test');
  	obj = JSON.parse(obj);
	
  	if(obj===null){
  		var tempObj = {
  					'list':[]
  						};
  		obj = tempObj;
  		window.localStorage.setItem('test',JSON.stringify(tempObj));
  	}

  	$scope.list = obj.list;


  	$scope.addToList = function(){

      if($scope.ipListItem!==''){
    		var obj = window.localStorage.getItem('test');
    		obj = JSON.parse(obj);
    		
    		var tempItem = $scope.todoItem;
    		tempItem.text = $scope.ipListItem;
    		
    		obj.list.push(tempItem);


    		//store the value
    		window.localStorage.setItem('test',JSON.stringify(obj));

    		//update the scope list
    		$scope.list = obj.list;

    		//clear the ipText value
    		$scope.ipListItem='';

      }

  		
  		
  	};


  	$scope.removeItem = function(index){


  		$scope.list.splice(index, 1);
  		
  		var obj = window.localStorage.getItem('test');
  		obj = JSON.parse(obj);

  		obj.list = $scope.list;

  		//store the value
  		window.localStorage.setItem('test',JSON.stringify(obj));




  	};


  	$scope.toggleDone = function(index){
  		

      var currFlag = $scope.list[index].done;
       if(currFlag===true){
          $scope.list[index].done=false;
       }
       else{
          $scope.list[index].done=true;
       }
  		
  		var obj = window.localStorage.getItem('test');
  		obj = JSON.parse(obj);

  		obj.list = $scope.list;

  		//store the value
  		window.localStorage.setItem('test',JSON.stringify(obj));

  	};


  });
