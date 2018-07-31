'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:addUserCtrl
 * @description
 * # AdminLogCtrl
 * Controller of the shobashAdminApp 
 */
angular.module('shobashAdminApp')
    .controller('addUserCtrl', function ($scope) {

        
        $scope.goToUserList = function () {
            $state.go('admin-listing');
        };
    });