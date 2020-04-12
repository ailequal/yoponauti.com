$(document).ready(function () {

	// handlebars init
	var source = document.getElementById("template").innerHTML;
	var template = Handlebars.compile(source);

	// video version
	var context = {
		// type: 'image',
		type: 'video',
		imageUrl: "./img/01-break-the-noise/BREAK1.jpg",
		imageName: "BREAK1.jpg",
		externalUrl: 'https://www.google.com',
		// externalUrl: 'javascript:void(0)',
		title: 'BREAK1',
		description: 'This is the description',
	};
	var html = template(context);
	$('.box').append(html);

	// image version
	var context = {
		type: 'image',
		imageUrl: "./img/01-break-the-noise/BREAK2.jpg",
		imageName: "BREAK2.jpg",
		externalUrl: 'javascript:void(0)',
		title: 'BREAK2',
		description: 'This is the description',
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
