'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:navigationCtrl
 * @description
 * #navigationCtrl
 * Controller of the shobashAdminApp
 */
angular.module('shobashAdminApp')
    .controller('navigationCtrl', function ($scope, $state,commonServices) {
	// code to check whether Admin is Logged In
	commonServices.checkIsAdminLoggedIn($scope, $state);


	var current_location = window.location.href;
    current_location = current_location.split("#/");
    //alert(current_location[1]);
	//alert($(".sidebar-menu a").length);

	if(!current_location[1].match(/id=/g)){
		var current_selector = $(".sidebar-menu a[data-url="+current_location[1]+"]");	
	}else{
		var current_selector = [];
	}

	if(current_selector.length > 0){
		if(current_location[1] != 'dashboard'){
			current_selector.parent().parent().parent().addClass('active');	
		}
		current_selector.parent().addClass('active');
	}

	$scope.adminRole = localStorage.getItem('adminRole');

	$scope.navigateTo = function(state){
		$state.go(state);
	}
});
