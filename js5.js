angular.module("myApp", [])

var textToInput = function ($scope){
	$scope.showH1=true;
	$scope.showH4=true;
	$scope.showP1=true;
	$scope.showP2=true;
	$scope.focus1=true;

	$scope.click1 = function(){
		$scope.showH1=false;
		$scope.showInput1=true;
	}
	$scope.click2 = function(){
		$scope.showH4=false;
		$scope.showInput2=true;
	}
	$scope.click3 = function(){
		$scope.showP1=false;
		$scope.showInput3=true;
	}
	$scope.click4 = function(){
		$scope.showP2=false;
		$scope.showInput4=true;
	}
	$scope.blur1 = function(){
		$scope.showH1=true;
		$scope.showInput1=false;
	}
	$scope.blur2 = function(){
		$scope.showH4=true;
		$scope.showInput2=false;
	}
	$scope.blur3 = function(){
		$scope.showP1=true;
		$scope.showInput3=false;
	}
	$scope.blur4 = function(){
		$scope.showP2=true;
		$scope.showInput4=false;
	}
}






angular.module("myApp").controller("myController", ["$scope", textToInput])