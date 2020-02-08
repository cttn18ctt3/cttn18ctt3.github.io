$(document).ready(function() {

    var body = document.documentElement.scrollTop;
    $(window).scroll(function() {

        body = document.documentElement.scrollTop;
        if (body > 0) {
            $('.nav-truoc').addClass('bienhinh');

        } else {
            $('.nav-truoc').removeClass('bienhinh');
        }
    });
});