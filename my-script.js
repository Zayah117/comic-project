var current_comic = 'images/comics/comic-1.png';
var comic_num = 1;
var comic_max = 3;

function changeComic() {
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
	if (comic_num <= 1) {
		comic_num = comic_max;
	}
	else {
		comic_num -= 1;
	}
	current_comic = 'images/comics/comic-' + comic_num + '.png';
	$('.current-comic').attr('src', current_comic)
}

function buttonChangeListener() {
	$('#left-button').click(changeComicReverse);
	$('#right-button').click(changeComic);
}

$(buttonChangeListener);
