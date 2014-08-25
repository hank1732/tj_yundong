var seed = angular.module("seed",[]);

seed.controller("seedController",
	function($scope){
		var someText={};
		someText.message="hello";
		$scope.someText=someText;
});