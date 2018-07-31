'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:DataSourceCtrl
 * @description
 * # AdminLogCtrl
 * Controller of the shobashAdminApp 
 */
angular.module('shobashAdminApp')
    .controller('MainsourceCtrl', function ($scope,$state,$http,commonServices) {

        commonServices.checkIsAdminLoggedIn($scope, $state);
	$scope.success_green = localStorage.getItem('success_green');
	if($scope.success_green == null){
		$scope.success_green = false;
	}

	$scope.type = 'primary';
	$scope.source_name = "";
	
	$scope.saveMainsource = function () {
		commonServices.submitCommonForm($scope, $state);
    }

    $scope.goToMainsourceList = function () {
        $state.go('mainsource-listing');
    };
    });
