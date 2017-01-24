app.config(config);
config.$inject=['$routeProvider'];
function config($routeProvider) {
    $routeProvider
        .otherwise('/index', {
            templateUrl: 'index.html',
            controller: 'homeCtrl'
        })
        .when('/index', {
            url: '/index',
            templateUrl: 'index.html',
            controller: 'homeCtrl'
        })
        .when('/login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        });
}