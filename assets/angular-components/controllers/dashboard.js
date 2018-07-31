'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:dashboardCtrl
 * @description
 * # dashboardCtrl
 * Controller of the shobashAdminApp
 */
angular.module('shobashAdminApp')
    .controller('dashboardCtrl', function ($scope, $state,commonServices) {
   	// code to check whether Admin is Logged In
      commonServices.checkIsAdminLoggedIn($scope, $state);
      //alert(2);
});
