$(".mobile-btn") .on("click", function () {
    $(".mobile-btn").toggleClass("show");
    $(".menu").toggleClass("show-menu");

});
$(".menu-list-item") .on("click", function () {
    $(".menu").removeClass("show-menu");
    $(".mobile-btn").removeClass("show");


});