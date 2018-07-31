'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:MiscellaneousCtrl
 * @description
 * # AdminLogCtrl
 * Controller of the shobashAdminApp 
 */
angular.module('shobashAdminApp')
    .controller('MiscellaneousCtrl', function ($scope) {

        
        $scope.goToMiscellaneousList = function () {
            $state.go('admin-listing');
        };
    });
