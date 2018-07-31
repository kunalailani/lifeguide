'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:CategoryCtrl
 * @description
 * # AdminLogCtrl
 * Controller of the shobashAdminApp 
 */
angular.module('shobashAdminApp')
    .controller('CategoryCtrl', function ($scope) {

        
        $scope.goToAdminList = function () {
            $state.go('admin-listing');
        };
    });