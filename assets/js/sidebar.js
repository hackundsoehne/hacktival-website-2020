$('button[data-toggle="d-flex"]').click(function() {
	$($(this).attr('data-target')).toggleClass('d-flex');
});