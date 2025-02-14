$(document).ready(function() {
    var allImgs = $('.rotator img');

    allImgs.css({
        position: 'absolute',
        top: 0,
        left: 0
    }).hide();

    var currIdx = 0;
    allImgs.first().show();

    function next() {
        var nextIdx = currIdx + 1;
        if (nextIdx >= allImgs.length) nextIdx = 0;
        allImgs.eq(currIdx).fadeOut();
        allImgs.eq(nextIdx).fadeIn();
        currIdx = nextIdx;
    }

    function prev() {
        var prevIdx = currIdx - 1;
        if (prevIdx < 0) prevIdx = allImgs.length - 1;
        allImgs.eq(currIdx).fadeOut();
        allImgs.eq(prevIdx).fadeIn();
        currIdx = prevIdx;
    }

    function doAuto() {
        next();
        setTimeout(doAuto, 5000);
    }
    setTimeout(doAuto, 5000);

    $('#rotator-prev').click(function(evt) {
        evt.preventDefault();
        prev();
    });
    $('#rotator-next').click(function(evt) {
        evt.preventDefault();
        next();
    });
});​