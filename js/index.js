// nav
$('.open-menu').on('click', function () {
    $('#overlay, .main-menu').show();
    $(this).hide();
    $('.close-menu').show();
});
$('.close-menu').on('click', function () {
    $('#overlay, .main-menu').hide();
    $(this).hide();
    $('.open-menu').show();
});
