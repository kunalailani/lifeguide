'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:userLogOutCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the shobashAdminApp
 */
angular.module('shobashAdminApp')
    .controller('userLogOutCtrl', function ($scope, $state,$http) {
   	$scope.token = localStorage.removeItem('token',false);
   	localStorage.setItem('msg_green','You have Been successfully logged out !');
   	$state.go('login');
});
