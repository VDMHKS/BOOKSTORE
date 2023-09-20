// ----------- 슬라이더 컨트롤
$(function () {
    $(".editortab a").eq(0).mouseenter(function () {
        $(".editortab a").css({
            "background-color" : "#EDEFF1",
            "border" : "none",
            "border-bottom" : "1px solid #dadada",
            "font-weight" : "normal"
        })
        $(this).css({
            "background-color" : "#fff",
            "border" : "1px #dadada solid",
            "border-bottom" : "none",
            "font-weight" : "bold"
        });
        $(".editorlist").css("display", "none");
        $(".editorlist").eq(0).css("display", "block");
    })
})

$(function () {
    $(".editortab a").eq(1).mouseenter(function () {
        $(".editortab a").css({
            "background-color" : "#EDEFF1",
            "border" : "none",
            "border-bottom" : "1px solid #dadada",
            "font-weight" : "normal"
        })
        $(this).css({
            "background-color" : "#fff",
            "border" : "1px #dadada solid",
            "border-bottom" : "none",
            "font-weight" : "bold"
        });
        $(".editorlist").css("display", "none");
        $(".editorlist").eq(1).css("display", "block");
    })
})

$(function () {
    $(".editortab a").eq(2).mouseenter(function () {
        $(".editortab a").css({
            "background-color" : "#EDEFF1",
            "border" : "none",
            "border-bottom" : "1px solid #dadada",
            "font-weight" : "normal"
        })
        $(this).css({
            "background-color" : "#fff",
            "border" : "1px #dadada solid",
            "border-bottom" : "none",
            "font-weight" : "bold"
        });
        $(".editorlist").css("display", "none");
        $(".editorlist").eq(2).css("display", "block");
    })
})

$(function () {
    $(".editortab a").eq(3).mouseenter(function () {
        $(".editortab a").css({
            "background-color" : "#EDEFF1",
            "border" : "none",
            "border-bottom" : "1px solid #dadada",
            "font-weight" : "normal"
        })
        $(this).css({
            "background-color" : "#fff",
            "border" : "1px #dadada solid",
            "border-bottom" : "none",
            "font-weight" : "bold"
        });
        $(".editorlist").css("display", "none");
        $(".editorlist").eq(3).css("display", "block");
    })
})









//------------ 오른쪽 광고배너 화살표 호버
$(function () {
    $('.rightbbn').mouseenter(function(){
        $('.rbiprev, .rbinext').css("opacity", "1");
    })
    $('.rightbbn').mouseleave(function(){
        $('.rbiprev, .rbinext').css("opacity", "0");
    })
})

//----------- 페이지 체크
$(function () {
    var j = 1
    $(".rbinext").click(function () {
        if (j>=4) {
            j = 0;
        }
        j += 1
        $(".page .pagecurrent").text(j);
        
    })
    $(".rbiprev").click(function () {
        if (j<=1) {
            j = 5;
        }
        j -= 1
        $(".page .pagecurrent").text(j);
    })
})

//----------- 오른쪽 광고 배너 슬라이드
$(function () {
    var i = 0
    $(".rbinext").click(function () {
        if (i>=3) {
            i = -1;
        }
        i += 1
        $(".rbicontent").css("display", "none");
        $(".rbicontent").eq(i).css("display", "block");
    })
    $(".rbiprev").click(function () {
        if (i<=0) {
            i = 4;
        }
        i -= 1
        $(".rbicontent").css("display", "none");
        $(".rbicontent").eq(i).css("display", "block");
    })
})