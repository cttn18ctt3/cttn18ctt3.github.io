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
