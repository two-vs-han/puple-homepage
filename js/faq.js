$(document).ready(function(){
    
	$('.tab-link').click(function(){

		var tab_id = $(this).attr('data-tab');
		
		if($("#"+tab_id).hasClass('current')) {
			$('.tab-link').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).removeClass('current');
			$("#"+tab_id).removeClass('current');

		}

		else {
			$('.tab-link').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		};

	});

});