'use strict';

/**
 * @ngdoc function
 * @name shobashAdminApp.controller:subAdminCtrl
 * @description
 * # subAdminCtrl
 * Controller of the shobashAdminApp 
 */
angular.module('shobashAdminApp')
    .controller('subAdminCtrl', function ($scope, $http, $state, commonServices) {
        // code to check whether Admin is Logged In
        commonServices.checkIsAdminLoggedIn($scope, $state);
        //alert($scope.id);
        $scope.success_green = localStorage.getItem('success_green');

        if ($scope.success_green == null) {
            $scope.success_green = false;
        }

        $scope.user = {
            password: "",
            confirmPassword: ""
        };
        $scope.status = 'active';
        $scope.type = 'super_admin';
        //alert($scope.success_green);
        if ($scope.id != undefined) {
            $http({
                method: 'GET',
                url: api_url + 'admin/sub-admin/details/' + $scope.id,
                headers: { 'Content-Type': 'application/json', 'authorization': $scope.token }
            })
                .success(function (response) {
                    if (response.success) {
                        $scope.full_name = response.data.full_name;
                        $scope.email = response.data.email;
                        $scope.type  = response.data.type; 
                        $scope.status  = response.data.status; 
                    } else {
                        $state.go('admin-listing');
                    }
                });
        } else {
            $scope.id = "";
        }
        
        /*$scope.loadSubAdminListing = function () {

            if ($.fn.DataTable.isDataTable('#subAdminListing')) {
                $('#subAdminListing').DataTable().destroy();
            }
            $("#subAdminListing").DataTable({
                processing: true,
                serverSide: true,
                lengthChange: false,
                ajax: {
                    beforeSend: function (request) {
                        var authorization = localStorage.getItem('token');
                        request.setRequestHeader("authorization", authorization);
                        request.setRequestHeader("Content-Type", "application/json");
                    },
                    url: api_url + 'admin/sub-admin-listing',
                    method: "POST",
                    data: function (d) {
                        return JSON.stringify(d);
                    }
                }
            });
        };
        $scope.loadSubAdminListing();*/

        $scope.goToAdminList = function () {
            $state.go('admin-listing');
        };
        //submitCommonForm

        $scope.saveSubAdmin = function () {
            
            var payload = {};
            
            var post_url = "";

            if($scope.id != ""){
                post_url = api_url + 'admin/update/'+$scope.id;
            }else{
                post_url = api_url + 'admin/create-sub-admin/'; 
                payload.password = $scope.user.password;
            }
            payload.admin_id = $scope.id;

            payload.full_name = $scope.full_name;
            payload.email = $scope.email;
            payload.type = $scope.type;
            payload.status = $scope.status;
            

            $http({
                method: 'POST',
                url: post_url,
                headers: { 'Content-Type': 'application/json', 'authorization': $scope.token },
                data:payload
            })
            .success(function (response) {
                if(response.success){
                    localStorage.setItem('success_green','Admin details has been saved successfully');
                    $state.go('admin-listing');
                }else{
                    //$scope.email.$invalid = true;
                    $("#email").next().next().html(response.reason);
                }
            });

            //commonServices.submitCommonForm($scope, $state);
        }
    })
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
    });

