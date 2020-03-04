<<<<<<< HEAD
<<<<<<< HEAD
=======
$(document).ready(function() {
        // cho modal box
        $('.momo').click(function(e) {
            e.preventDefault();
            $('.momo').removeClass('hienra');
            $('.modal_box').removeClass('modal_show');
        });

        $('.thongtin-btn').click(function(e) {
            console.log("hieu map");
            e.preventDefault();
            $('.momo').addClass('hienra');
            $('.modal_box').addClass('modal_show');
        });
      
});
>>>>>>> ed4a184b052ce153298cd11f4634fc49cdbb477d
=======
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
>>>>>>> parent of aee3d90... them tinh nang thong tin sach, css lai so trang, fixed looi navbar
