$(document).ready(function () {

	// handlebars
	var source = document.getElementById("template").innerHTML;
	var template = Handlebars.compile(source);
	var context = {
		imgUrl: "./img/01-break-the-noise/BREAK1.jpg",
		imgName: "BREAK1.jpg",
		title: 'BREAK1',
		project: 'BREAK THE NOISE',
		description: 'This is the description',
		link: '#'
	};
	var html = template(context);
	$('.box').append(html);

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

	// when the user clicks anywhere outside of the modal
	// window.onclick = function (event) {
	// 	if (event.target == document.getElementsByClassName('.modal')) {
	// 		document.getElementsByClassName('.modal').hide();
	// 		var span = document.getElementsByClassName("close")[0];
	// 	}
	// }

});
