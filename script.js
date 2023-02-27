$('.scroll').click(function(event) {
    event.preventDefault();
    var targetOffset = $('#content1').offset().top;
    $("html, body").animate({
        scrollTop: targetOffset + "px"
    },500);
});

$("#knowProj1").click(function(event) {
    event.preventDefault();
    $("#content-card").css("height", $("#card-intro").height())
    $("#frame").css("width", $("#card-intro").width() - 30)
    $("#content-card").slideDown("slow");
    var targetOffset = $('#content-card-footer').offset().top;
    $("html, body").animate({
        scrollTop: targetOffset + "px"
    },500);
})
