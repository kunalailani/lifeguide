'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:DailyHoroCtrl
 * @description
 * # AdminLogCtrl
 * Controller of the shobashAdminApp 
 */
angular.module('shobashAdminApp')
    .controller('DailyHoroCtrl', function ($scope) {
        
        $scope.goToHoroscopeList = function () {
            $state.go('admin-listing');
        };
    });
