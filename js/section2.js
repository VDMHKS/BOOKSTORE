
//----------- 페이지 체크
$(function () {
    var j = 1
    $(".swipernext").click(function () {
        if (j>=11) {
            j = 0;
        }
        j += 1
        $(".swiperpage .pagecurrent").text(j);
        
    })
    $(".swiperprev").click(function () {
        if (j<=1) {
            j = 12;
        }
        j -= 1
        $(".swiperpage .pagecurrent").text(j);
    })
})

//----------- 오른쪽 광고 배너 슬라이드
$(function () {
    var i = 0
    $(".swipernext").click(function () {
        if (i>=10) {
            i = -1;
        }
        i += 1
        $(".swcontent").css("display", "none");
        $(".swcontent").eq(i).css("display", "block");
    })
    $(".swiperprev").click(function () {
        if (i<=0) {
            i = 11;
        }
        i -= 1
        $(".swcontent").css("display", "none");
        $(".swcontent").eq(i).css("display", "block");
    })
})