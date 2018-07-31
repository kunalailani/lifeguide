'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:AdminLogCtrl
 * @description
 * # AdminLogCtrl
 * Controller of the shobashAdminApp 
 */
angular.module('shobashAdminApp')
    .controller('AdminLogCtrl', function ($scope) {
        
        $scope.goToAdminList = function () {
            $state.go('admin-listing');
        };
    });