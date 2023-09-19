// ----------- 이벤트 나타내고 숨기기
$(function () {
    $(".widetab a").eq(0).click(function () {
        $(".widebnimg img").css("display", "none");
        $(".widebn").stop().show("slow");
        $(".widebnimg img").eq(0).css("display", "block");
    })
})

$(function () {
    $(".widetab a").eq(1).click(function () {
        $(".widebnimg img").css("display", "none");
        $(".widebn").stop().show("slow");
        $(".widebnimg img").eq(1).css("display", "block");
    })
})

$(function () {
    $(".widetab a").eq(2).click(function () {
        $(".widebnimg img").css("display", "none");
        $(".widebn").stop().show("slow");
        $(".widebnimg img").eq(2).css("display", "block");
    })
})

$(function () {
    $(".widetab a").eq(3).click(function () {
        $(".widebnimg img").css("display", "none");
        $(".widebn").stop().show("slow");
        $(".widebnimg img").eq(3).css("display", "block");
    })
})

$(function () {
    $(".widebnbtn a").click(function () {
        $(".widebn").stop().hide("slow");
    })
})