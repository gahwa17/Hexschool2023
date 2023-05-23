$(document).ready(function() {
    $("#navbar-toggler").click(function() {
        $(this).toggleClass("active");
        var icon = $(this).find(".navbar-toggler-icon");
        var currentIcon = icon.text();
        icon.text(currentIcon === "menu" ? "close" : "menu");
    });
});