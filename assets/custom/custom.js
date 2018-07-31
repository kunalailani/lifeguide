var img_files = {};
var uploadedFile = function(element) {  
    img_files[$(element).attr('name')] = element.files;         
};

$(document).ready(function(){
	
	function getFormData(submitForm){
		var unindexed_array = submitForm.serializeArray();
	    var indexed_array = {};

	    $.map(unindexed_array, function(n, i){
	        indexed_array[n['name']] = n['value'];
	    });
    	return indexed_array;
	}

	$("body").on("click", ".treeview-leftbar",function(){
			$(".treeview-leftbar").removeClass('active');
			$(this).addClass('active');
	});
	
	$("body").on("submit",".submit-form",function(e){
		e.preventDefault();
	});

	$("body").on("click", ".nav.nav-tabs.navigation-custom-class",function(){
			$(window).trigger('resize');
	});

	$("body").on("change","#page_title_en",function(){
		var str = $(this).val();
		str = str.replace(/[^a-zA-Z ]/g, "");
		str = str.trim()
		str = str.replace(/\s+/g, '-').toLowerCase();
		$("#page_slug").val(str);
	});
});