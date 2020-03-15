$(document).ready(function() {

    // them thanh nav vo dau trang
    $("#dautrang").load("nav.html"); 

    var body = document.documentElement.scrollTop;
    $(window).scroll(function() {

        body = document.documentElement.scrollTop;
        if (body > 0) {
            $('.nav-truoc').addClass('bienhinh');

        } else {
            $('.nav-truoc').removeClass('bienhinh');
        }
    });

    // them phan footer vo cuoi trang
    $("#cuoitrang").load("footer.html"); 

});