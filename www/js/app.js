// Ionic Starter App

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])


.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/app.html"
        })

    // nested list with custom controller
    .state('app.home', {
        url: '/home',
        views: {

            // the main template will be placed here (relatively named)
            'mainContent': {
                templateUrl: 'templates/playlists.html',
                controller: 'MainCtrl'
            },

            // the child views will be defined here (absolutely named)
            'sideContent': {
                templateUrl: 'templates/userInfo.html',
                controller: 'UserCtrl'
            }
        }
    })
        .state('app.search', {
            url: "/search",
            views: {
                'mainContent': {
                    templateUrl: "templates/search.html"
                }
            }
        })

    .state('app.user', {
        url: "/user",
        views: {
            'mainContent': {
                templateUrl: "templates/userDetail.html",
                controller: 'UserCtrl'
            }
        },
        data: {
            needAuthorized: true
        }
    })

    .state('app.login', {
        url: "/login",
        views: {
            'mainContent': {
                templateUrl: "templates/login.html",
                controller: 'LoginCtrl'
            }
        }
    })

    .state('app.register', {
        url: "/register",
        views: {
            'mainContent': {
                templateUrl: "templates/register.html",
                controller: 'RegisterCtrl'
            }
        }
    })

    .state('app.password', {
        url: "/password",
        views: {
            'mainContent': {
                templateUrl: "templates/password.html",
                controller: 'PasswordCtrl'
            }
        }
    })

    .state('app.resourceList', {
            url: "/resourceList?sportName",
            views: {
                'mainContent': {
                    templateUrl: "templates/resources/resourceList.html",
                    controller: 'resourceListCtrl'
                }
            }
        })

    .state('app.resourceDetail', {
            url: "/resourceDetail?resId",
            views: {
                'mainContent': {
                    templateUrl: "templates/resources/resourceDetail.html",
                    controller: 'resourceDetailCtrl'
                }
            }
        })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
})

.run(function($rootScope, $state, AuthService) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
        var needAuthorized = false;
        if (next.data)
            needAuthorized = next.data.needAuthorized;
        if (needAuthorized && !AuthService.isAuthenticated()) {
            AuthService.setRedictState(next.name);
            event.preventDefault();
            $state.go('app.login');
        }
    });
})

.run(function($rootScope, $state, AUTH_EVENTS, AuthService) {
        $rootScope.$on(AUTH_EVENTS.loginSuccess, function(event, next) {
            event.preventDefault();
            var s = AuthService.getRedictState();
            $state.go(AuthService.getRedictState());
        });
});