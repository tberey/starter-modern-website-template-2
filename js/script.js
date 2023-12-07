window.addEventListener('DOMContentLoaded', async () => {
    if (window.innerWidth < 700) {
        $("#aside-show").show();
        $("#aside").hide();
    }
});

function toggleMenu() {
    var e = $("#main-menu");
    if (e.height() == '0px' || !e.height()) {
        e.height('100%');
    } else {
        e.height('0px');
    }
}

function burgerIcon(x) {
    x.classList.toggle("transform");
}

function sideMenu() {
    var e = $("#aside");
    var e2 = $("#aside-show");
    if (e.css("display") == "none") {
        e.show();
        e2.hide();
    } else {
        e.hide();
        e2.show();
    }
}