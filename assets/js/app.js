$('button[data-toggle="sidebar"]').click(function() {
	$('#sidebar').toggleClass('d-flex');
});

// Markdown table responsiveness
$('.markdown table').addClass('table');
$('.markdown table').wrap('<div class="table-responsive"></div>');