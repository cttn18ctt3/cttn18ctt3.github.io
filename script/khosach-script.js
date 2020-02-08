$(document).ready(function() {



    // cho modal box
    $('.momo').click(function(e) {
        e.preventDefault();
        $('.momo').removeClass('hienra');
        $('.modal_box').removeClass('modal_show');
    });

    $('.thongtin-btn').click(function(e) {
        e.preventDefault();
        $('.momo').addClass('hienra');
        $('.modal_box').addClass('modal_show');
        console.log("s");
    });

  
});