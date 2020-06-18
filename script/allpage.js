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

function dongydieukhoan() {
    // Get the checkbox
    var checkBox = document.getElementById("agree");

    // If the checkbox is checked, display the button
    var button = document.getElementById("submit-form");
    if (checkBox.checked == true){
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

function parse_query_string(query) {
    var vars = query.split("&");
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        // If first entry with this name
        if (typeof query_string[key] === "undefined") {
            query_string[key] = decodeURIComponent(value);
            // If second entry with this name
        } else if (typeof query_string[key] === "string") {
            var arr = [query_string[key], decodeURIComponent(value)];
            query_string[key] = arr;
            // If third or later entry with this name
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}