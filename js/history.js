$(document).ready(function(){
    
	$('ul.tabs li').click(function(){

		var tab_id = $(this).attr('data-tab');
		
		if($("#"+tab_id).hasClass('current')) {
			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).removeClass('current');
			$("#"+tab_id).removeClass('current');

		}

		else {
			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		};

	});

});