angular.module('starter.services', [])
    .constant('AUTH_EVENTS', {
        loginSuccess: 'auth-login-success',
        loginFailed: 'auth-login-failed'
    })

/**
 * A simple example service that returns some data.
 */
    .factory('Users', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var _sampleUser = {
            'uid': 0,
            'nickname': '王大翠',
            'gender': '女',
            'email': 'test@tj.com',
            "emailVerified": true,
            "mobile": 1234,
            "mobileVerified": true,
            "city": "上海",
            "country": "中国",
            "province": "上海",
            "wechat":13264984,
            "weibo":6849818,
            "zhifubao":1684891,
            "headImgUrl": "img/head.jpg"
        };

        var Users = {};

        Users.get = function (uid) {
            //TODO
            return _sampleUser;
        };

        Users.put = function (uid, property) {
            //TODO
//            _sampleUser[key] = value;
            return _sampleUser;
        };

        Users.post = function (user) {
            //TODO
            return _sampleUser; // The Created User
        };

        return Users;
    })

    .factory('AuthService', function ($http) {
        var authService = {};

        authService.login = function (credentials) {
            //TODO
            this.uid = 0;
            this.token = "token";
            return {}
        };

        authService.isAuthenticated = function () {
            return !!this.token;
        };

        authService.getUid = function () {
            return this.uid;
        };

        authService.getToken = function () {
            return this.token;
        };

        authService.setRedictState = function (state) {
            this.redictState = state
        };
        authService.getRedictState = function () {
            return this.redictState
        };

        return authService;
    })

// 模拟运动项目数据
    .factory('Sports', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var _sampleSports = [{
            'sportId': 0,
            "sportImgUrl": "img/head.jpg",
            'sportName': '足球'
        },
        {
            'sportId': 1,
            "sportImgUrl": "img/head1.jpg",
            'sportName': '排球'
        },
        {
            'sportId': 2,
            "sportImgUrl": "img/head2.jpg",
            'sportName': '羽毛球'
        }];

        var Sports = {};

        Sports.get = function (sid) {
            //TODO
            return _sampleSports[sid];
        };

        Sports.getAll = function () {
            //TODO
            return _sampleSports;
        };

        Sports.put = function (uid, property) {
            //TODO
//            _sampleUser[key] = value;
            return _sampleSports;
        };

        Sports.post = function (user) {
            //TODO
            return _sampleSports; // The Created User
        };

        return Sports;
    })

    // 模拟场地资源列表数据
    .factory('ResourcesList', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var _sampleResourcesList = [{
            'resId': 0,
            'sportId': 0,
            'sportName': "足球",
            "resListImgUrl": "img/jiangwan.jpg",
            'resListName': '江湾体育场',
            'resListNum': '10',
            'resListUnit': '全场',
            'location': '杨浦区五角场市级副中心国和路346号',
            'prise':'50',
            'distance': 100,
            'tel':'021-12345678'
        },
        {
            'resId': 1,            
            'sportId': 1,            
            'sportName': "排球",
            "resListImgUrl": "img/hongkou.jpg",
            'resListName': '虹口足球场',
            'resListNum': '0',
            'resListUnit': '半场',
            'location': '虹口区东江湾路444号',
            'prise':'30',
            'distance': 300,
            'tel':'021-12345678'
        },
        {
            'resId': 2,            
            'sportId': 2,            
            'sportName': "羽毛球",
            "resListImgUrl": "img/hongkou.jpg",
            'resListName': '虹口足球场',
            'resListNum': '20',
            'resListUnit': '半场',
            'location': '虹口区东江湾路444号',
            'prise':'35',
            'distance': 120,
            'tel':'021-12345678'
        },
        {
            'resId': 3,            
            'sportId': 1,            
            'sportName': "排球",
            "resListImgUrl": "img/jiangwan.jpg",
            'resListName': '江湾体育场',
            'resListNum': '5',
            'resListUnit': '半场',
            'location': '杨浦区五角场市级副中心国和路346号',
            'prise':'20',
            'distance': 50,
            'tel':'021-12345678'
        },
        {
            'resId': 4,            
            'sportId': 1,
            'sportName': "排球",
            "resListImgUrl": "img/luwan.jpg",
            'resListName': '卢湾体育馆',
            'resListNum': '20',
            'resListUnit': '半场',
            'location': '卢湾区肇嘉浜路128号',
            'prise':'100',
            'distance': 200,
            'tel':'021-12345678'
        },
        {
            'resId': 5,            
            'sportId': 2,            
            'sportName': "羽毛球",
            "resListImgUrl": "img/luwan.jpg",
            'resListName': '卢湾体育馆',
            'resListNum': '40',
            'resListUnit': '半场',
            'location': '卢湾区肇嘉浜路128号',
            'prise':'150',
            'distance': 300,
            'tel':'021-12345678'
        }];

        var ResourcesList = {};

        ResourcesList.get = function (uid) {
            //TODO
            return _sampleResourcesList[uid];
        };

        ResourcesList.getAll = function () {
            //TODO
            return _sampleResourcesList;
        };

        ResourcesList.put = function (uid, property) {
            //TODO
//            _sampleUser[key] = value;
            return _sampleResourcesList;
        };

        ResourcesList.post = function (user) {
            //TODO
            return _sampleResourcesList; // The Created User
        };

        return ResourcesList;
    })
    // 模拟场地资源数据
    .factory('Resources', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var _sampleResources = [{
            'resid': 0,
            "resImgUrl": "img/head.jpg",
            'resName': '江湾体育场',
            'location': '上海杨浦',
            'tel': '021-64816479',
            "feature": "洗浴，停车",
            "introduction": "江湾体育场是民国时期亚洲第一大体育场….."
        },
        {
            'resid': 1,
            "resImgUrl": "img/head2.jpg",
            'resName': '江湾体育场2',
            'location': '上海杨浦2',
            'tel': '021-64816479',
            "feature": "洗浴，停车",
            "introduction": "江湾体育场是民国时期亚洲第一大体育场….."
        }];

        var Resources = {};

        Resources.get = function (uid) {
            //TODO
            return _sampleResources[uid];
        };

        Resources.getAll = function () {
            //TODO
            return _sampleResources;
        };

        Resources.put = function (uid, property) {
            //TODO
//            _sampleUser[key] = value;
            return _sampleResources;
        };

        Resources.post = function (user) {
            //TODO
            return _sampleResources; // The Created User
        };

        return Resources;
    })
       
// 模拟订单数据
    .factory('Orders', function () {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var _sampleOrders = [{
            'sportid': 0,
            "sportImgUrl": "img/head.jpg",
            'sportName': '足球'
        },
        {
            'sportid': 1,
            "sportImgUrl": "img/head.jpg",
            'sportName': '排球'
        },
        {
            'sportid': 2,
            "sportImgUrl": "img/head.jpg",
            'sportName': '羽毛球'
        }];

        var Orders = {};

        Orders.get = function (oid) {
            //TODO
            return _sampleOrders[oid];
        };

        Orders.getAll = function () {
            //TODO
            return _sampleOrders;
        };

        Orders.put = function (uid, property) {
            //TODO
//            _sampleUser[key] = value;
            return _sampleOrders;
        };

        Orders.post = function (user) {
            //TODO
            return _sampleOrders; // The Created User
        };

        return Orders;
    })

;