'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:DataSourceCtrl
 * @description
 * # AdminLogCtrl
 * Controller of the shobashAdminApp 
 */
angular.module('shobashAdminApp')
    .controller('DataSourceCtrl', function ($scope) {

        
        $scope.goToAdminList = function () {
            $state.go('admin-listing');
        };
    });