angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        // alert("1111111");
        confirm("23456");
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
})

.controller('UserCtrl', function($scope, Users, ResourcesList) {
    $scope.user = Users.get(0);
    console.log($scope.user);
    console.log("aaa");
    /* ResourcesList.getAll().push(
            {
            'resListId': 5,
            'sportId': 0,
            'sportName': "足球",
            "resListImgUrl": "img/head.jpg",
            'resListName': '松江体育场',
            'resListNum': '10',
            'resListUnit': '全场',
            'location': '杨浦区',
            'distance': '100KM',
            });*/
})

.controller('MainCtrl', ['$scope', 'Sports',
    function($scope, Sports) {
        $scope.Sports = Sports.getAll();
        $scope.onSwipeUp = function() {
            $state.go("app.login");
        }

    }
])
    .controller('LoginCtrl', function($scope, $state, $location, $rootScope, AUTH_EVENTS, AuthService) {
        $scope.login = function() {
            $scope.credentials = {
                username: '',
                password: ''
            };
            var user = AuthService.login($scope.credentials);
            //            if(user){
            var redictState = AuthService.getRedictState();
            if (!redictState) {
                redictState = 'app'
            }
            //            $location.path('/search')
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            //       var s = $state.go(redictState);
            //            s.current 
            //            }
            // $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            //            $location.path('/tab/account');

        };
    })

.controller('RegisterCtrl', function($scope, $state) {
    // Open the login modal
    $scope.register = function() {
        alert("23456");
    }
})

.controller('PasswordCtrl', function($scope) {

})

.controller('resourceListCtrl', function($scope, $state, $stateParams, ResourcesList, $ionicActionSheet) {

    /*导航标签的显示和隐藏*/
    $scope.toggleGroup = function(index) {
        if ($scope.isGroupShown(index)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = index;
        }
    };
    $scope.isGroupShown = function(group) {
        return $scope.shownGroup === group;
    };
    /*导航标签的显示和隐藏*/
    /*导航标签的内容*/
    $scope.sports = ["足球", "羽毛球", "排球"];
    $scope.locations = ["全部地点", "虹口区", "杨浦区", "卢湾区"];
    $scope.orders = [{
        name: "综合",
        value:["all"]
    }, {
        name:"名称",
        value:["resListName"]
    }, {
        name:"距离",
        value:["distance"]
    }];

    $scope.selectedSport = $stateParams.sportName;
    $scope.selectedLocation = "全部地点";
    $scope.selectedOrder = "综合";
    $scope.orderProp = "distance";
    /*导航标签的内容*/
    /*导航标签的选择动作*/
    $scope.selectSport = function(sport) {
        $scope.shownGroup = null;
        $scope.selectedSport = sport;
        $scope.query = sport;
    }
    $scope.selectLocation = function(location) {
        $scope.shownGroup = null;
        $scope.selectedLocation = location;
    }
    $scope.selectOrder = function(order) {
        $scope.shownGroup = null;
        $scope.selectedOrder = order.name;
        $scope.orderProp = order.value;
    }
    /*导航标签的选择动作*/

    $scope.resources = ResourcesList.getAll();
    $scope.filterMatch = function() {
        return function(resource) {
            var locationMark = true;
            var filterPropMark = true;
            if ($scope.selectedLocation != "全部地点")
                locationMark = resource.location.indexOf($scope.selectedLocation) > -1 ? true : false;
            filterPropMark = $scope.selectedSport == resource.sportName;
            // filterPropMark = (parseInt(resource.resListNum) > parseInt(search.filterProp));
            // return locationMark && filterPropMark && (query == resource.sportName);
            return locationMark && filterPropMark;
        }
    };

    $scope.showResListFilter = function() {
        $ionicActionSheet.show({
            titleText: 'ActionSheet Example',
            buttons: [{
                text: 'Share <i class="icon ion-share"></i>'
            }, {
                text: ''
            }, ],
            destructiveText: '<ion-toggle ng-model="airplaneMode" toggle-class="toggle-calm">Airplane Mode</ion-toggle>',
            cancelText: 'Cancel',
            cancel: function() {
                console.log('CANCELLED');
            },
            buttonClicked: function(index) {
                console.log('BUTTON CLICKED', index);
                return true;
            },
            destructiveButtonClicked: function() {
                console.log('DESTRUCT');
                return true;
            }
        });
    }
})

.controller('resourceDetailCtrl', function($scope, $stateParams, ResourcesList) {
     $scope.res = ResourcesList.get($stateParams.resId);
     console.log($stateParams.resId);
});