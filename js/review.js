/* 별점 호버 이벤트 */

$(function(){
    $("#divcommentreviewstar1").mouseenter(function(){
        $(".divcommentreviewstar img").attr("src", "img/icon_star_gray.png");
        $("#divcommentreviewstar1 img").attr("src", "img/icon_star_pink.png");
    })
    $("#divcommentreviewstar2").mouseenter(function(){
        $(".divcommentreviewstar img").attr("src", "img/icon_star_gray.png");
        $("#divcommentreviewstar1 img").attr("src", "img/icon_star_pink.png");
        $("#divcommentreviewstar2 img").attr("src", "img/icon_star_pink.png");
    })
    $("#divcommentreviewstar3").mouseenter(function(){
        $(".divcommentreviewstar img").attr("src", "img/icon_star_gray.png");
        $("#divcommentreviewstar1 img").attr("src", "img/icon_star_pink.png");
        $("#divcommentreviewstar2 img").attr("src", "img/icon_star_pink.png");
        $("#divcommentreviewstar3 img").attr("src", "img/icon_star_pink.png");
    })
    $("#divcommentreviewstar4").mouseenter(function(){
        $(".divcommentreviewstar img").attr("src", "img/icon_star_gray.png");
        $("#divcommentreviewstar1 img").attr("src", "img/icon_star_pink.png");
        $("#divcommentreviewstar2 img").attr("src", "img/icon_star_pink.png");
        $("#divcommentreviewstar3 img").attr("src", "img/icon_star_pink.png");
        $("#divcommentreviewstar4 img").attr("src", "img/icon_star_pink.png");
    })
    $("#divcommentreviewstar5").mouseenter(function(){
        $(".divcommentreviewstar img").attr("src", "img/icon_star_gray.png");
        $("#divcommentreviewstar1 img").attr("src", "img/icon_star_pink.png");
        $("#divcommentreviewstar2 img").attr("src", "img/icon_star_pink.png");
        $("#divcommentreviewstar3 img").attr("src", "img/icon_star_pink.png");
        $("#divcommentreviewstar4 img").attr("src", "img/icon_star_pink.png");
        $("#divcommentreviewstar5 img").attr("src", "img/icon_star_pink.png");
    })

    $(".starbox .erefloatl").mouseleave(function(){
        $(".divcommentreviewstar img").attr("src", "img/icon_star_gray.png");
    })
})