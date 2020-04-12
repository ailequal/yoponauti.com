$(document).ready(function () {

	// box content
	var items = [
		// row 1 - break the noise
		[
			[
				'image',
				'./img/01-break-the-noise/BREAK1.jpg',
				'BREAK1.jpg',
				'javascript:void(0)',
				'',
				'BREAK1',
				'This is BREAK1 description.'
			],
			[
				'video',
				'./img/01-break-the-noise/BREAK2.jpg',
				'BREAK2.jpg',
				'https://www.youtube.com',
				'_blank',
				'BREAK2',
				'This is BREAK2 description.'
			],
			[
				'image',
				'./img/01-break-the-noise/BREAK3.jpg',
				'BREAK3.jpg',
				'javascript:void(0)',
				'',
				'BREAK3',
				'This is BREAK3 description.'
			]
		],
		// row 2 - neuroscettico
		[
			[
				'image',
				'./img/02-neuroscettico/NEURO_2.1.1.jpg',
				'NEURO_2.1.1.jpg',
				'javascript:void(0)',
				'',
				'NEURO_2.1.1',
				'This is NEURO_2.1.1 description.'
			],
			[
				'video',
				'./img/02-neuroscettico/NEURO_2.1.2.jpg',
				'NEURO_2.1.2.jpg',
				'https://www.youtube.com',
				'_blank',
				'NEURO_2.1.2',
				'This is NEURO_2.1.2 description.'
			],
			[
				'image',
				'./img/02-neuroscettico/NEURO_2.1.3.jpg',
				'NEURO_2.1.3.jpg',
				'javascript:void(0)',
				'',
				'NEURO_2.1.3',
				'This is NEURO_2.1.3 description.'
			]
		],
		// row 3 - flamingo day
		[
			[
				'image',
				'./img/08-flamingo-day/Flamingoday1.jpg',
				'Flamingoday1.jpg',
				'javascript:void(0)',
				'',
				'Flamingoday1',
				'This is Flamingoday1 description.'
			],
			[
				'video',
				'./img/08-flamingo-day/Flamingoday2.jpg',
				'Flamingoday2.jpg',
				'https://www.youtube.com',
				'_blank',
				'Flamingoday2',
				'This is Flamingoday2 description.'
			],
			[
				'image',
				'./img/08-flamingo-day/Flamingoday3.jpg',
				'Flamingoday3.jpg',
				'javascript:void(0)',
				'',
				'Flamingoday3',
				'This is Flamingoday3 description.'
			]
		],
		// row 4 - flamingo day
		[
			[
				'image',
				'./img/03-oshena/OSHENA_2.1.1.jpg',
				'photo-azure.png',
				'javascript:void(0)',
				'',
				'OSHENA_2.1.1.jpg',
				'This is photo-azure description.'
			],
			[
				'video',
				'./img/03-oshena/OSHENA_2.1.2.jpg',
				'OSHENA_2.1.2.jpg',
				'https://www.youtube.com',
				'_blank',
				'OSHENA_2.1.2',
				'This is OSHENA_2.1.2 description.'
			],
			[
				'image',
				'./img/03-oshena/OSHENA_2.1.3.jpg',
				'Flamingoday3.jpg',
				'javascript:void(0)',
				'',
				'OSHENA_2.1.3',
				'This is OSHENA_2.1.3 description.'
			]
		]
	]

	// adding box content
	var template = handlebarsInit('#template');
	// cycle the main items array
	for (var i = 0; i < items.length; i++) {
		// cycle every single array
		for (var j = 0; j < items[i].length; j++) {
			// handlebars
			var context = {
				type: items[i][j][0],
				imageUrl: items[i][j][1],
				imageName: items[i][j][2],
				externalUrl: items[i][j][3],
				target: items[i][j][4],
				title: items[i][j][5],
				description: items[i][j][6],
			};
			var html = template(context);
			$('.box').append(html);
		}
	}

	// video version
	// var template = handlebarsInit('#template');
	// var context = {
	// 	type: 'video',
	// 	imageUrl: "./img/01-break-the-noise/BREAK1.jpg",
	// 	imageName: "BREAK1.jpg",
	// 	externalUrl: 'https://www.youtube.com',
	// 	title: 'BREAK1',
	// 	description: 'This is the description',
	// };
	// var html = template(context);
	// $('.box').append(html);

	// image version
	// var template = handlebarsInit('#template');
	// var context = {
	// 	type: 'image',
	// 	imageUrl: "./img/01-break-the-noise/BREAK2.jpg",
	// 	imageName: "BREAK2.jpg",
	// 	externalUrl: 'javascript:void(0)',
	// 	title: 'BREAK2',
	// 	description: 'This is the description',
	// };
	// var html = template(context);
	// $('.box').append(html);

	// modal
	// when user click on an image
	$('.item img').on('click', function () {
		// show that specific modal window
		var modal = $(this).siblings('.modal');
		modal.show();
	});

	// when user click on close
	$('.close').on('click', function () {
		// close that specific modal window
		var modal = $(this).closest('.modal');
		modal.hide();
	})

	// when the user clicks anywhere outside of the modal
	// window.onclick = function (event) {
	// 	if (event.target == document.getElementsByClassName('.modal')) {
	// 		document.getElementsByClassName('.modal').hide();
	// 		var span = document.getElementsByClassName("close")[0];
	// 	}
	// }

	// functions
	// handlebars init
	function handlebarsInit(template) {
		var source = $('#template').html();
		var template = Handlebars.compile(source);
		return template;
	}

});
