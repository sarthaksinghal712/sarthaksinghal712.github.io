$('.scroll').click(function(event) {
    // $("#content1, #content2").slideDown("fast")
    event.preventDefault();
    var targetOffset = $('#content1').offset().top;
    $("html, body").animate({
        scrollTop: targetOffset + "px"
    },500);
});

$("#knowProj1").click(function(event) {
    event.preventDefault();
    $("#content-card1").css("height", $("#card-intro1").height())
    $("#frame").css("width", $("#card-intro1").width() - 30)
    $("#content-card1").slideDown("slow");
    var targetOffset = $('#content-card-footer1').offset().top;
    $("html, body").animate({
        scrollTop: targetOffset + "px"
    },500);
})

$("#knowProj2").click(function(event) {
    event.preventDefault();
    $("#content-card2").css("height", $("#card-intro2").height())
    $("#frame2").css("width", $("#card-intro2").width() - 30)
    $("#content-card2").slideDown("slow");
    var targetOffset = $('#content-card-footer2').offset().top;
    $("html, body").animate({
        scrollTop: targetOffset + "px"
    },500);
})