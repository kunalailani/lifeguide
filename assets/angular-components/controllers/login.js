'use strict';
/**
 * @ngdoc function
 * @name shobashAdminApp.controller:loginCtrl
 * @description
 * # ApplicationCtrl
 * Controller of the shobashAdminApp
 */
angular.module('shobashAdminApp')
    .controller('loginCtrl', function ($scope,$state,$http) {   	
   	$scope.formData = {};

    $scope.checkAdminCredentials = function(){
      //console.log(" adm 1111");
        var unindexed_array = $("#AdminLoginForm").serializeArray();
        var indexed_array = {};

        $.map(unindexed_array, function(n, i){
            indexed_array[n['name']] = n['value'];
        });

        
        $http({
          method  : 'POST',
          url     : api_url+'admin/login',
          data    : JSON.stringify(indexed_array),
          headers : { 'contentType': 'application/json' }  // set the headers so angular passing info as form data (not request payload)
         })
        .success(function(data) {
            if(data.success){
              if(data.data.status == 'active'){
                  localStorage.setItem('token','Bearer 1');
                  $state.go('dashboard');
              }else{
                  localStorage.setItem('msg_green','Your account has been blocked please contact site admin');
                  $state.go('dashboard');
              }
            }else{
              if(data.reason_type != undefined && data.reason_type == 'account_blocked'){
                localStorage.setItem('msg_green','Your account has been blocked please contact site admin');
                location.reload();
              }else{
                localStorage.setItem('msg_green','Please enter your correct email address and password');
                location.reload();  
              }
            }
        })
         .error(function (error, status){
            localStorage.setItem('msg_green',error.reason);
            window.location.href = base_url+'shobash-admin'; 
        }) 
    };

   	$scope.msg_green = localStorage.getItem('msg_green');
   	var token = localStorage.getItem('token');
   	if(!$scope.msg_green || $scope.msg_green == null){
   		$scope.msg_green = false;
   	}

    if(token){
      $state.go('dashboard');
    }else{
      console.log(" No token ");
    }
   	console.log(" $scope.msg_green "+$scope.msg_green);
    console.log(" token "+token);

   	setTimeout(function(){
         localStorage.removeItem('msg_green');
    },2000);
});
