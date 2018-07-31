angular.module('shobashAdminApp')
	.factory('commonServices', function() {
		return {
			checkIsAdminLoggedIn : function($scope,$state){
				
				// simple code to resize the application
				$(window).trigger('resize');

				// code to check whether admin is looged in or session is maintained or not
				$scope.token = localStorage.getItem('token');
			   	var token = $scope.token;
			   	if(!token || (token == null) || (token == false)){
			   	 	console.log("auth failed");
			   	 	localStorage.setItem('msg_green','Please login to see this page');
			   	 	var msg_green = localStorage.getItem('msg_green');	
			   	 	$state.go('login');
			   	}else{
			   	 	console.log("auth success");
			   	 	localStorage.setItem('msg_green',false);
			   	 	var msg_green = localStorage.getItem('msg_green');
			   	}

			   	setTimeout(function(){	
			   		localStorage.removeItem('success_green');
			   	},500);
			   	
			},
			submitCommonForm : function($scope,$state){
				//alert('1');
				$("body").one("submit",".submit-form",function(e){
					e.preventDefault();
					var url = $(this).attr('action');	
					var that = $(this);
					
					var id = that.attr('id');
					var unindexed_array = that.serializeArray();
				    var indexed_array = {};

				    $.map(unindexed_array, function(n, i){
				        indexed_array[n['name']] = n['value'];
				    });

			  		$.ajax({
					type:"POST",
					data: JSON.stringify(indexed_array),
					dataType:"JSON",
					url:api_url+url,
					cache:false,
			      	contentType: 'application/json',
			      	processData: false,
			      	beforeSend: function(request) {
			      	   var authorization = localStorage.getItem('token');
					   request.setRequestHeader("authorization", authorization);
					},
					success:function(response){
						$('.error-msg').html("");
						if(!response.success){
							if(id == 'pageFormInfro'){
								$("#slug").next().html(response.msg);
							}else if(id == 'AgentForm'){
								$("#email").next().next().html(response.msg);
							}
						}else{
							if(id == 'userStatusForm'){
								
								if($scope.role == 'agent'){
						            localStorage.setItem('success_green','Agent status has been successfully saved');
						            $state.go('agents-listing');
						        }else{
						        	localStorage.setItem('success_green','User status has been successfully saved');
						            $state.go('user-listing');
						        }

							}else if(id == 'subAdminForm'){
								localStorage.setItem('success_green','New Admin has been successfully saved');
								$state.go('admin-listing');
							}else if(id == 'mainsourceForm'){
								localStorage.setItem('success_green','Source Name has been successfully saved');
								$state.go('mainsource-listing');
							}else if(id == 'AgentForm'){
								localStorage.setItem('success_green','Agent Details have been successfully saved');
								$state.go('agents-listing');
							}else if(id == 'HeadFootForm'){
								localStorage.setItem('success_green','Header and Footer have been successfully saved');
								location.reload();
							}else if(id == 'pageFormInfro'){
								localStorage.setItem('success_green','Pages Details has been successfully saved');
								$state.go('page-listing');
							}else if(id == 'menuForm'){
								localStorage.setItem('success_green','Menu has been saved successfully');
								location.reload();
							}else if(id == 'savePackageForm'){
								localStorage.setItem('success_green','Package has been saved successfully');
								$state.go('package-listing');
							}else if(id == 'metaQuestionForm'){
								localStorage.setItem('success_green','Question has been saved successfully');
								$state.go('user-questions-listing');
							}else if(id == 'addPointsForm'){
								$("#pointsSuccessFull").html("Congrats Points has been successfully allocated to  this user");
							}else if(id == 'save-page'){
								localStorage.setItem('success_green','Page has been saved successfully');
								$state.go('page-listing');
							}else if(id == 'languageLabelForm'){
								localStorage.setItem('success_green','App Labels has been saved successfully');
								$state.go('app-language-listing');
							}
						}
					}
					});	
				});
			}
		};
});
