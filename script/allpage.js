$(document).ready(function () {

    // them thanh nav vo dau trang
    $("#dautrang").load("nav.html");

    var body = document.documentElement.scrollTop;
    $(window).scroll(function () {

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
    if (checkBox.checked == true) {
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

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function removeCookie(cname) {
    var d = new Date(0);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function saveCookie() {
    var formData = $('form#test-form');
    var arrayInput = formData.serializeArray();

    var list = ["name", "donator_id", "email", "phone", "address"]
    for (var i in arrayInput) {
        if (list.includes(arrayInput[i].name)) setCookie(arrayInput[i].name, arrayInput[i].value, 365);
        if (arrayInput[i].name == "donator_id") setCookie("id_user", arrayInput[i].value, 365)
        if (arrayInput[i].name == "id_user") setCookie("donator_id", arrayInput[i].value, 365)
    }
}

function loadCookie() {
    $('input#name')[0].value = getCookie("name");
    if ($('input#id_user').length != 0) $('input#id_user')[0].value = getCookie("id_user");
    if ($('input#donator_id').length != 0) $('input#donator_id')[0].value = getCookie("donator_id");
    $('input#email')[0].value = getCookie("email");
    $('input#phone')[0].value = getCookie("phone");
    $('textarea#address')[0].value = getCookie("address");
}