'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:subAdminCtrl
 * @description
 * # subAdminCtrl
 * Controller of the shobashAdminApp 
 */
angular.module('shobashAdminApp')
    .controller('sourceCtrl', function ($scope, $http, $state, commonServices) {
        // code to check whether Admin is Logged In
        commonServices.checkIsAdminLoggedIn($scope, $state);
        //alert($scope.id);
        $scope.success_green = localStorage.getItem('success_green');

        if ($scope.success_green == null) {
            $scope.success_green = false;
        }

        $scope.source_name = 'religion';
        $scope.type = 'primary';
        
        //alert($scope.success_green);
        if ($scope.id != undefined) {
            $http({
                method: 'GET',
                url: api_url + 'admin/source/details/' + $scope.id,
                headers: { 'Content-Type': 'application/json', 'authorization': $scope.token }
            })
                .success(function (response) {
                    if (response.success) {
                        $scope.source_name = response.data.source_name;
                        $scope.source_code = response.data.source_code;
                        $scope.type  = response.data.type; 
                        $scope.source_value  = response.data.source_value; 
                    } else {
                        $state.go('source-listing');
                    }
                });
        } else {
            $scope.id = "";
        }
        /*$scope.sourcesName = [
            {
                "name":"Swapnil",
                "id":1
            },
            {
                "name":"Ab",
                "id":2
            }
          ]
*/
        //$scope.getSOurceNameFromType();
        $scope.source_name = "";
        $scope.getSOurceNameFromType = function(){
            $http({
                method: 'GET',
                url: api_url + 'admin/main-source/type/' + $scope.type
            })
                .success(function (response) {
                    if (response.success) {
                        $scope.sourcesName = response.data;
                    }else{
                        $scope.sourcesName = [];
                    }

                });
            
        }
        $scope.getSOurceNameFromType();
        
        $scope.loadSourceName  =function(){
            $scope.getSOurceNameFromType();
        };

        $scope.goToSourceList = function () {
            $state.go('source-listing');
        };
        

        $scope.saveSource = function () {
            
            var payload = {};
            
            var post_url = "";

            if($scope.id != ""){
                post_url = api_url + 'admin/source/update/'+$scope.id;
            }else{
                post_url = api_url + 'admin/source/add-source/'; 
                //payload.password = $scope.user.password;
            }
            payload._id = $scope.id;
            payload.source_name = $scope.source_name;
            payload.source_code = $scope.source_code;
            payload.type = $scope.type;
            payload.source_value = $scope.source_value;
            

            $http({
                method: 'POST',
                url: post_url,
                headers: { 'Content-Type': 'application/json', 'authorization': $scope.token },
                data:payload
            })
            .success(function (response) {
                if(response.success){
                    localStorage.setItem('success_green','Source details has been saved successfully');
                    $state.go('source-listing');
                }else{
                    //$scope.email.$invalid = true;
                    $("#source_name").next().next().html(response.reason);
                }
            });

            //commonServices.submitCommonForm($scope, $state);
        }
    })
    /*
    .directive("compareTo", function () {
        return {
            require: "ngModel",
            scope: {
                confirm_password: "=compareTo"
            },
            link: function (scope, element, attributes, modelVal) {
                modelVal.$validators.compareTo = function (val) {
                    return val == scope.confirm_password;
                };
                scope.$watch("confirm_password", function () {
                    modelVal.$validate();
                });
            }
        };
    });*/

