$(document).ready(function () {

	// box content
	var items = [
		// row 1 - oshena
		[
			[
				'image',
				'./img/oshena/OSHENA1.jpg',
				'OSHENA1.jpg',
				'javascript:void(0)',
				'',
				'Oshena',
				'Videclip realizzato per Tonino3000, progetto musicale della Falafel Fazz Familia.',
				'Regia, 3D Motion&Rendering: Alberto Magnani',
				'Regia, Editing, Color: Francesco Travaglini',
				'Effetti Speciali, Aiuto regia: Elia Valentini'
			],
			[
				'video',
				'./img/oshena/OSHENA2.jpg',
				'OSHENA2.jpg',
				'https://www.youtube.com/watch?v=i56R7gu9Gjg',
				'_blank',
				'Oshena',
				'Videclip realizzato per Tonino3000, progetto musicale della Falafel Fazz Familia.',
				'Regia, 3D Motion&Rendering: Alberto Magnani',
				'Regia, Editing, Color: Francesco Travaglini',
				'Effetti Speciali, Aiuto regia: Elia Valentini'
			],
			[
				'image',
				'./img/oshena/OSHENA3.jpg',
				'OSHENA3.jpg',
				'javascript:void(0)',
				'',
				'Oshena',
				'Videclip realizzato per Tonino3000, progetto musicale della Falafel Fazz Familia.',
				'Regia, 3D Motion&Rendering: Alberto Magnani',
				'Regia, Editing, Color: Francesco Travaglini',
				'Effetti Speciali, Aiuto regia: Elia Valentini'
			]
		],
		// row 2 - break the noise
		[
			[
				'image',
				'./img/break-the-noise/BreakTheNoise1.jpg',
				'BreakTheNoise1.jpg',
				'javascript:void(0)',
				'',
				'Break The Noise',
				'Videoclip musicale realizzato per l\'artista elettronico MAINDUCT.',
				'Credit: Alberto Magnani & Giacomo Lommi'
			],
			[
				'video',
				'./img/break-the-noise/BreakTheNoise2.jpg',
				'BreakTheNoise2.jpg',
				'https://www.youtube.com/watch?v=S3sT2aYfiu0',
				'_blank',
				'Break The Noise',
				'Videoclip musicale realizzato per l\'artista elettronico MAINDUCT.',
				'Credit: Alberto Magnani & Giacomo Lommi'
			],
			[
				'image',
				'./img/break-the-noise/BreakTheNoise3.jpg',
				'BreakTheNoise3.jpg',
				'javascript:void(0)',
				'',
				'Break The Noise',
				'Videoclip musicale realizzato per l\'artista elettronico MAINDUCT.',
				'Credit: Alberto Magnani & Giacomo Lommi'
			]
		],
		// row 3 - pippo sowlo
		[
			[
				'image',
				'./img/pippo-sowlo/Inoki1.jpg',
				'Inoki1.jpg',
				'javascript:void(0)',
				'',
				'Re: Inoki',
				'Video musicale a cui abbiamo partecipato come operatori di camera e montatori per il cantante Pippo Sowlo (Bomba Dischi).',
				'Regia: Marco Castaldi & Matteo Corradini',
				'Operatore II Macchina e Montaggio: Alberto Magnani'
			],
			[
				'video',
				'./img/pippo-sowlo/Inoki2.jpg',
				'Inoki2.jpg',
				'https://www.youtube.com/watch?v=7eZTs6FM9mM',
				'_blank',
				'Re: Inoki',
				'Video musicale a cui abbiamo partecipato come operatori di camera e montatori per il cantante Pippo Sowlo (Bomba Dischi).',
				'Regia: Marco Castaldi & Matteo Corradini',
				'Operatore II Macchina e Montaggio: Alberto Magnani'
			],
			[
				'image',
				'./img/pippo-sowlo/Inoki3.jpg',
				'Inoki3.jpg',
				'javascript:void(0)',
				'',
				'Re: Inoki',
				'Video musicale a cui abbiamo partecipato come operatori di camera e montatori per il cantante Pippo Sowlo (Bomba Dischi).',
				'Regia: Marco Castaldi & Matteo Corradini',
				'Operatore II Macchina e Montaggio: Alberto Magnani'
			]
		],
		// row 4 - neuroscettico
		[
			[
				'image',
				'./img/neuroscettico/Neuroscettico1.jpg',
				'Neuroscettico1.jpg',
				'javascript:void(0)',
				'',
				'Neuroscettico',
				'Videclip realizzato per il Duo Bucolico, progetto musicale di Daniele Maggioli e Antonio Ramberti.',
				'Regia, Editing, 3D Motion&Rendering: Francesco Travaglini',
				'Regia, Color: Alberto Magnani',
				'Aiuto regia: Matteo Abbondanza, Jacopo Ciaroni',
				'3D modeling: Andrea Andreani'
			],
			[
				'video',
				'./img/neuroscettico/Neuroscettico2.jpg',
				'Neuroscettico2.jpg',
				'https://www.youtube.com/watch?v=rm0YlAzHhoc',
				'_blank',
				'Neuroscettico',
				'Videclip realizzato per il Duo Bucolico, progetto musicale di Daniele Maggioli e Antonio Ramberti.',
				'Regia, Editing, 3D Motion&Rendering: Francesco Travaglini',
				'Regia, Color: Alberto Magnani',
				'Aiuto regia: Matteo Abbondanza, Jacopo Ciaroni',
				'3D modeling: Andrea Andreani'
			],
			[
				'image',
				'./img/neuroscettico/Neuroscettico3.jpg',
				'Neuroscettico3.jpg',
				'javascript:void(0)',
				'',
				'Neuroscettico',
				'Videclip realizzato per il Duo Bucolico, progetto musicale di Daniele Maggioli e Antonio Ramberti.',
				'Regia, Editing, 3D Motion&Rendering: Francesco Travaglini',
				'Regia, Color: Alberto Magnani',
				'Aiuto regia: Matteo Abbondanza, Jacopo Ciaroni',
				'3D modeling: Andrea Andreani'
			]
		],
		// row 5 - sarto della materia
		[
			[
				'image',
				'./img/sarto-della-materia/alb-shoot-1.jpg',
				'alb-shoot-1.jpg',
				'javascript:void(0)',
				'',
				'Il Sarto della Materia',
				'Shooting fotografico realizzato per una collezione di abiti ispirata all\'artista italiano Alberto Burri.',
				'Credit: Alberto Magnani'
			],
			[
				'image',
				'./img/sarto-della-materia/alb-shoot-2.jpg',
				'alb-shoot-2.jpg',
				'javascript:void(0)',
				'',
				'Il Sarto della Materia',
				'Shooting fotografico realizzato per una collezione di abiti ispirata all\'artista italiano Alberto Burri.',
				'Credit: Alberto Magnani'
			],
			[
				'image',
				'./img/sarto-della-materia/alb-shoot-3.jpg',
				'alb-shoot-3.jpg',
				'javascript:void(0)',
				'',
				'Il Sarto della Materia',
				'Shooting fotografico realizzato per una collezione di abiti ispirata all\'artista italiano Alberto Burri.',
				'Credit: Alberto Magnani'
			]
		],
		// row 6 - frashoot
		[
			[
				'image',
				'./img/frashoot/frashoot1.jpg',
				'frashoot1.jpg',
				'javascript:void(0)',
				'',
				'LJC brand 2017',
				'Selezione di scatti per L.J.C Brand, anno 2017.',
				'Credit: Francesco Travaglini',
				'Modello: Armel Ngungunanga'
			],
			[
				'image',
				'./img/frashoot/frashoot2.jpg',
				'frashoot2.jpg',
				'javascript:void(0)',
				'',
				'LJC brand 2017',
				'Selezione di scatti per L.J.C Brand, anno 2017.',
				'Credit: Francesco Travaglini',
				'Modello: Armel Ngungunanga'
			],
			[
				'image',
				'./img/frashoot/frashoot3.jpg',
				'frashoot3.jpg',
				'javascript:void(0)',
				'',
				'LJC brand 2017',
				'Selezione di scatti per L.J.C Brand, anno 2017.',
				'Credit: Francesco Travaglini',
				'Modello: Armel Ngungunanga'
			]
		],
		// row 7 - nicoletta aither design shooting
		[
			[
				'image',
				'./img/nicoletta-aither-design-shooting/mati1.jpg',
				'mati1.jpg',
				'javascript:void(0)',
				'',
				'Aither Design Shooting',
				'Selezione di scatti realizzata per la collezione di Nicoletta Abiuso ispirata al mondo Giapponese e alla street art.',
				'Credit: Alberto Magnani'
			],
			[
				'image',
				'./img/nicoletta-aither-design-shooting/mati2.jpg',
				'mati2.jpg',
				'javascript:void(0)',
				'',
				'Aither Design Shooting',
				'Selezione di scatti realizzata per la collezione di Nicoletta Abiuso ispirata al mondo Giapponese e alla street art.',
				'Credit: Alberto Magnani'
			],
			[
				'image',
				'./img/nicoletta-aither-design-shooting/mati3.jpg',
				'mati3.jpg',
				'javascript:void(0)',
				'',
				'Aither Design Shooting',
				'Selezione di scatti realizzata per la collezione di Nicoletta Abiuso ispirata al mondo Giapponese e alla street art.',
				'Credit: Alberto Magnani'
			]
		],
		// row 8 - flaming night
		[
			[
				'image',
				'./img/flaming-night/Flamingonight-1.jpg',
				'Flamingonight-1.jpg',
				'javascript:void(0)',
				'',
				'Flamingo 2017',
				'Selezione di scatti per Flamingo Beach Riccione, anno 2017.',
				'Credit: Francesco Travaglini'
			],
			[
				'image',
				'./img/flaming-night/Flamingonight-2.jpg',
				'Flamingonight-2.jpg',
				'javascript:void(0)',
				'',
				'Flamingo 2017',
				'Selezione di scatti per Flamingo Beach Riccione, anno 2017.',
				'Credit: Francesco Travaglini'
			],
			[
				'image',
				'./img/flaming-night/Flamingonight-3.jpg',
				'Flamingonight-3.jpg',
				'javascript:void(0)',
				'',
				'Flamingo 2017',
				'Selezione di scatti per Flamingo Beach Riccione, anno 2017.',
				'Credit: Francesco Travaglini'
			]
		],
		// row 9 - antica lavorazione
		[
			[
				'image',
				'./img/antica-lavorazione/ceramica1.jpg',
				'ceramica1.jpg',
				'javascript:void(0)',
				'',
				'L\'antica lavorazione',
				'Shooting fotografico realizzato per Fos Ceramiche, società specializzata nella lavorazione dell\'argilla.',
				'Credit: Alberto Magnani'
			],
			[
				'image',
				'./img/antica-lavorazione/ceramica2.jpg',
				'ceramica2.jpg',
				'javascript:void(0)',
				'',
				'L\'antica lavorazione',
				'Shooting fotografico realizzato per Fos Ceramiche, società specializzata nella lavorazione dell\'argilla.',
				'Credit: Alberto Magnani'
			],
			[
				'image',
				'./img/antica-lavorazione/ceramica3.jpg',
				'ceramica3.jpg',
				'javascript:void(0)',
				'',
				'L\'antica lavorazione',
				'Shooting fotografico realizzato per Fos Ceramiche, società specializzata nella lavorazione dell\'argilla.',
				'Credit: Alberto Magnani'
			]
		],
		// row 10 - ultima spiaggia
		[
			[
				'image',
				'./img/ultima-spiaggia/Ultimaspiaggia-1.jpg',
				'Ultimaspiaggia-1.jpg',
				'javascript:void(0)',
				'',
				'Ultima Spiaggia',
				'Selezione di scatti del photobook Ultima Spiaggia, progetto di ricerca sui luoghi marginali sotto la guida di Massimo Sordi e Guido Guidi. Anno 2016.',
				'Credit: Francesco Travaglini'
			],
			[
				'image',
				'./img/ultima-spiaggia/Ultimaspiaggia-2.jpg',
				'Ultimaspiaggia-2.jpg',
				'javascript:void(0)',
				'',
				'Ultima Spiaggia',
				'Selezione di scatti del photobook Ultima Spiaggia, progetto di ricerca sui luoghi marginali sotto la guida di Massimo Sordi e Guido Guidi. Anno 2016.',
				'Credit: Francesco Travaglini'
			],
			[
				'image',
				'./img/ultima-spiaggia/Ultimaspiaggia-3.jpg',
				'Ultimaspiaggia-3.jpg',
				'javascript:void(0)',
				'',
				'Ultima Spiaggia',
				'Selezione di scatti del photobook Ultima Spiaggia, progetto di ricerca sui luoghi marginali sotto la guida di Massimo Sordi e Guido Guidi. Anno 2016.',
				'Credit: Francesco Travaglini'
			]
		],
		// row 11 - ultima spiaggia
		[
			[
				'image',
				'./img/irandagi/irandagi1.jpg',
				'irandagi1.jpg',
				'javascript:void(0)',
				'',
				'Animali',
				'Progetto audiovisivo composto da 7 brani associati a 7 video, anno 2019.',
				'Credit: I randagi, aka Francesco Travaglini'
			],
			[
				'video',
				'./img/irandagi/irandagi2.jpg',
				'irandagi2.jpg',
				'https://www.youtube.com/channel/UC40bE3yrfYoNZ57I8ZmEK4w/videos',
				'_blank',
				'Animali',
				'Progetto audiovisivo composto da 7 brani associati a 7 video, anno 2019.',
				'Credit: I randagi, aka Francesco Travaglini'
			],
			[
				'image',
				'./img/irandagi/irandagi3.jpg',
				'irandagi3.jpg',
				'javascript:void(0)',
				'',
				'Animali',
				'Progetto audiovisivo composto da 7 brani associati a 7 video, anno 2019.',
				'Credit: I randagi, aka Francesco Travaglini'
			]
		],
		// row 12 - ultima spiaggia
		[
			[
				'image',
				'./img/flaming-2016/Flamingoday1.jpg',
				'Flamingoday1.jpg',
				'javascript:void(0)',
				'',
				'Flamingo 2016',
				'Selezione di scatti per Flamingo Beach Riccione, anno 2016.',
				'Credit: Francesco Travaglini'
			],
			[
				'image',
				'./img/flaming-2016/Flamingoday2.jpg',
				'Flamingoday2.jpg',
				'javascript:void(0)',
				'',
				'Flamingo 2016',
				'Selezione di scatti per Flamingo Beach Riccione, anno 2016.',
				'Credit: Francesco Travaglini'
			],
			[
				'image',
				'./img/flaming-2016/Flamingoday3.jpg',
				'Flamingoday3.jpg',
				'javascript:void(0)',
				'',
				'Flamingo 2016',
				'Selezione di scatti per Flamingo Beach Riccione, anno 2016.',
				'Credit: Francesco Travaglini'
			]
		],
	]

});
