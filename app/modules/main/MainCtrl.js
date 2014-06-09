define(function (require) {
    'use strict';

    var angular = require('angular');

    /**
     * The Main application controller.
     **/
    function MainCtrl( $scope, $famous, $window ) {
        var EventHandler = $famous['famous/core/EventHandler'];
        var win = angular.element($window);

        $scope.eventHandler = new EventHandler();
    };
    
    MainCtrl.$inject = ['$scope', '$famous', '$window'];
    
    return MainCtrl;
});