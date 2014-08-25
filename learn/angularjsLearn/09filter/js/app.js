angular.module('ionicApp',[])

.controller('AppCtrl', function($scope) {

  $scope.friends  = [{
    name: "Deanna",
    city: "Malibu",
    age:"20"
  }, {
    name: "Beverly",
    city: "Ventura",
    age:"10"
  }, {
    name: "Jean-Luc",
    city: "Beverly Hills",
    age:"30"
  }];

$scope.matchName = function(query) {
  return function(friend) { return parseInt(friend.age)>parseInt(query); }
};

});