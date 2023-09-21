


//------------ 오른쪽 광고배너 화살표 호버
$(function () {
    $('.widebanner').mouseenter(function(){
        $('.wideprev, .widenext').css("opacity", "1");
    })
    $('.widebanner').mouseleave(function(){
        $('.wideprev, .widenext').css("opacity", "0");
    })
})

//----------- 페이지 체크
$(function () {
    var j = 1
    $(".widenext").click(function () {
        if (j>=3) {
            j = 0;
        }
        j += 1
        $(".widepage .pagecurrent").text(j);
        
    })
    $(".wideprev").click(function () {
        if (j<=1) {
            j = 4;
        }
        j -= 1
        $(".widepage .pagecurrent").text(j);
    })
})

//----------- 오른쪽 광고 배너 슬라이드
$(function () {
    var i = 0
    $(".widenext").click(function () {
        if (i>=2) {
            i = -1;
        }
        i += 1
        $(".wbslide").css("display", "none");
        $(".wbslide").eq(i).css("display", "block");
    })
    $(".wideprev").click(function () {
        if (i<=0) {
            i = 3;
        }
        i -= 1
        $(".wbslide").css("display", "none");
        $(".wbslide").eq(i).css("display", "block");
    })
})