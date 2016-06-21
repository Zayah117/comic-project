var current_comic = 'images/comics/comic-1.jpg';
var comic_num = 1;
var comic_max = 1;

function changeComic() {
	if (comic_num >= comic_max) {
		comic_num = 1;
	}
	else {
		comic_num += 1;
	}
	current_comic = 'images/comics/comic-' + comic_num + '.jpg';
	$('.current-comic').attr('src', current_comic)
}

function changeComicReverse() {
	if (comic_num <= 1) {
		comic_num = comic_max;
	}
	else {
		comic_num -= 1;
	}
	current_comic = 'images/comics/comic-' + comic_num + '.jpg';
	$('.current-comic').attr('src', current_comic)
}

function buttonChangeListener() {
	$('.left-button').click(changeComicReverse);
	$('.right-button').click(changeComic);
}

$(buttonChangeListener);
