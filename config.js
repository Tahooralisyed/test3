(function () {
    'use strict';
    app.run(run).config(config);
    run.$inject = ['$rootScope', '$localStorage', '$location'];
    function run($rootScope, $localStorage, $location) {
        $rootScope.$on('$stateChangeStart', function (event, fromState, toState, fromParams, toParams) {
            if (!($localStorage.login_details)) {
                $location.path('/login');
            }
            //    console.log('Routing is called');
        });
    }

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'home'
        });
    }
});