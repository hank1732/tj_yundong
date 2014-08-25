angular.module('myApp', [])
        .controller('StudentListController',  function($scope){
          $scope.students = [
            {name:"LiuSong",id:"1"},
            {name:"XiaYan",id:"2"},
            {name:"HanBing",id:"3"}
          ];
        });