var current_comic = 'images/comics/comic-1.png';
var comic_num = 1;
// set this to as many comics as you have
var comic_max = 7;

function changeComic() {
	/* This function checks to see if you are
	on the last comic. If you are, it loops
	around back to the first comic. If you are
	not, it goes to the next comic. It then
	updates the image on the webpage. */

	if (comic_num >= comic_max) {
		comic_num = 1;
	}
	else {
		comic_num += 1;
	}
	current_comic = 'images/comics/comic-' + comic_num + '.png';
	$('#current-comic').attr('src', current_comic)
}

function changeComicReverse() {
	/* This function is the same as the one
	above, but it goes backwards */

	if (comic_num <= 1) {
		comic_num = comic_max;
	}
	else {
		comic_num -= 1;
	}
	current_comic = 'images/comics/comic-' + comic_num + '.png';
	$('#current-comic').attr('src', current_comic)
}

function buttonChangeListener() {
	/* Listens for button clicks and activates
	the appropriate functions */

	$('#left-button').click(changeComicReverse);
	$('#right-button').click(changeComic);
}

$(buttonChangeListener);
