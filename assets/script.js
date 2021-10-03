function slide(toHide, toShow) {
    $('#' + toShow).removeClass('hidden')
        .css({ 'z-index': 1, 'left': '100%' })
        .animate({ 'left': '0%' }, 200, 'swing', function () {
            $('#' + toHide).addClass('hidden');
        });
}

function slideBack(toHide, toShow) {
    $('#' + toShow).removeClass('hidden').css({ 'z-index': 0, 'left': '0%' });
    $('#' + toHide).css('z-index', 1).animate({ 'left': '100%' }, 200, 'swing', function () {
        $(this).addClass('hidden');
    });
}