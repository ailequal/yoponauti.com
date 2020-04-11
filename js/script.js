$(document).ready(function () {
	// counter
	const counters = document.querySelectorAll('.counter');
	const speed = 500;

	counters.forEach(counter => {
		const updateCount = () => {
			const target = +counter.getAttribute('data-target');
			const count = +counter.innerText;

			const inc = target / speed;

			if (count < target) {
				counter.innerText = Math.ceil(count + inc);
				setTimeout(updateCount, 1);
			} else {
				count.innerText = target;
			}
		}

		updateCount();
	})

	// modal
	// when user click on an image
	$('.item img').on('click', function () {
		// show that specific modal window
		let modal = $(this).siblings('.modal');
		modal.show();
	});

	// when user click on close
	$('.close').on('click', function () {
		// close that specific modal window
		let modal = $(this).closest('.modal');
		modal.hide();
	})

	// handlebars
	var source = document.getElementById("template").innerHTML;
	var template = Handlebars.compile(source);
	var context = {
		title: "My handlebars post",
		body: "This is my first post!"
	};
	var html = template(context);
	$('.bars').append(html);
});
