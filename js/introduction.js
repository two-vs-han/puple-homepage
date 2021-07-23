$(document).ready(function(){
    
	$('ul.tabs li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
	})

});

const passEl = document.querySelector('.pass');
const etcEl = document.querySelector('.etc');

etcEl.addEventListener('click', function () {
	passEl.click();
});