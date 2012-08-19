$(document).ready(function() {
	$('#signup').hide();
	$('#listserv').click(function () {
		if ($('#signup').is(':hidden')) {
			$('#signup').slideDown('slow');
			$(this).addClass('listserv-open');		
		} else {
			$('#signup').slideUp('slow');
			$(this).removeClass('listserv-open');
		}
	});
	$('#listserv').hover(
		function() {$(this).addClass('listserv-hover'); },
		function() {$(this).removeClass('listserv-hover'); }
	);
});