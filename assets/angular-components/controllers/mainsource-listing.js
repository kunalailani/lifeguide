'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:userListingCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the shobashAdminApp
 */
angular.module('shobashAdminApp')
    .controller('mainsourcelistCtrl', function ($scope, $state,commonServices) {
	// code to check whether Admin is Logged In
	commonServices.checkIsAdminLoggedIn($scope, $state);

	$scope.success_green = localStorage.getItem('success_green');

	if($scope.success_green == null){
		$scope.success_green = false;
	}

});
