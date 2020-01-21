$(document).ready(() => {
	$('form').on('submit', () => {
		var item = $('form input');
		var todo = { item: item.val() };

		$.ajax({
			type: 'POST',
			url: '/todo',
			data: todo,
			success: (data) => {
				// Do something with the data via front-end framework ||
				location.reload();
			}
		});

		return false;
	});

	$('li').on('click', function() {
		var item = $(this)
			.text()
			.trim()
			.replace(/ /g, '-');
		$.ajax({
			type: 'DELETE',
			url: '/todo/' + item,
			success: function(data) {
				// Do something with the data via front-end framework ||
				location.reload();
			}
		});
	});
});
