(function () {
    'use strict';
    app.controller('home', home);
    home.$inject = ['$scope', '$localStorage', '$location'];
    function home($scope, $localStorage, $location) {
        $scope.head = "head";
    }
});