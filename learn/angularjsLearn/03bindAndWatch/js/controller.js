var seed = angular.module("seed",[]);

seed.controller("seedController",
	function($scope){		
		$scope.funding={start:0};
		$scope.computeNeeded=function(){
			$scope.funding.needed=$scope.funding.start*10;
		}		
});
seed.controller("watchController",
	function($scope){		
		$scope.funding={start:0};
		computeNeeded=function(){
			$scope.funding.needed=$scope.funding.start*10;
		}
		$scope.$watch('funding.start',computeNeeded);		
});



