var quotes = [

    { 
    quote: "...un día con tantas sonrisas que te van a doler las mejillas.",
    character: "Andrei Octavian"
    },

    { 
    quote: "...éxito en todo lo que hagas, como si tuvieras un toque mágico.",
    character: "Andrei Octavian"
    },

    { 
    quote: "...una energía que ni tú te la vas a creer, ¡a tope todo el día!",
    character: "Neville Longbottom"
    },

    { 
    quote: "...risas que van a resonar en todo el lugar, ¡prepárate!",
    character: "Andrei Octavian"
    },

    { 
    quote: "...un oasis de calma, hoy todo fluye como en un sueño.",
    character: "Ginny Weasley"
    },

    { 
    quote: "...una oportunidad de oro que va a caer como del cielo.",
    character: "Ron Weasley"
    },

    { 
    quote: "...ideas tan brillantes que te vas a sorprender a ti misma.",
    character: "Andrei Octavian"
    },

    { 
    quote: "...un día de esos que marcas en el calendario por lo productivo que fue.",
    character: "Andrei Octavian"
    },

    { 
    quote: "...una aventurilla que te va a dejar con una sonrisa de oreja a oreja.",
    character: "Hermione Granger"
    },

    { 
    quote: "...charlas que van a ser puro oro",
    character: "Harry Potter"
    },

    { 
    quote: "...tu momento zen, como una tarde de onsen pero mejor.",
    character: "Andrei Octavian"
    },

    { 
    quote: "...una sensación de triunfo al acostarte, como campeona del mundo.",
    character: "Andrei Octavian"
    },

    { 
    quote: "...noticias tan buenas que no vas a parar de sonreír.",
    character: "Luna Lovegood"
    },

    { 
    quote: "...una fuerza interior que te va a sorprender, ¡nada te detiene hoy!",
    character: "Andrei Octavian"
    }

];

$(document).ready(function() {
	
	window.onload = function() {
		pickQuote();
		createButton();
	}

	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	// Cambiar frase
	$("#button").on("click", function() {
		pickQuote();
		createButton();
	});

	// Animación
	$(".title-box").on("click", function() {
		$(this).addClass("animated hinge").one(animationEnd, function() {
			$(this).removeClass("animated hinge");
		});
	});
	
	// Anima el post-it
	$(".title-box").hover(function() {
		$(this).addClass("animated swing").one(animationEnd, function() {
			$(this).removeClass("animated swing");
		});
	});

	function pickQuote() {
		var randomNum = quotes[ Math.floor( Math.random() * quotes.length ) ];

		$("#quote").html(randomNum.quote);
		$("#character").html("- " + randomNum.character);
	}

});

// Música harry potter //

document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('play-button');
    var song = document.getElementById('song');
    var icon = playButton.querySelector('i'); // Selecciona el ícono dentro del botón

    playButton.addEventListener('click', function() {
        if (song.paused) {
            song.play();
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause'); // Cambia el ícono a pause
        } else {
            song.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play'); // Cambia el ícono a play
        }
    });
});

