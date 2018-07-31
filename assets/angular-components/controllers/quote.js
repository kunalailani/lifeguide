'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:quoteCtrl
 * @description
 * # AdminLogCtrl
 * Controller of the shobashAdminApp 
 */
angular.module('shobashAdminApp')
    .controller('quoteCtrl', function ($scope) {

        
        $scope.goToQuoteList = function () {
            $state.go('admin-listing');
        };
    });
