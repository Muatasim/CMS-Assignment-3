jQuery(document).ready( function($) {

	
	if ($("#attention-area").length && notices_ajax_script.logged_in == 'no') {
		var notice_id = $('#attention-area #remove-notice').attr('rel');
		if(!$.cookie('notice-' + notice_id)) {
			$('#attention-area').show();
		}
	}
	
	$(".remove-notice").click( function() {
		
		var notice_id = $(this).attr('rel');
		
		if(notices_ajax_script.logged_in == 'no') {
			
			$.cookie('notice-' + notice_id, 'yes', { expires: 1 });
		}
		
		var data = {
			action: 'mark_notice_as_read',
			notice_read: notice_id
		};
		$.post(notices_ajax_script.ajaxurl, data, function(response) {
			$('#attention-area').fadeOut();
		});
		return false;
	});
	
});