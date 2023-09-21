// ----------- 슬라이더 탭 호버 컨트롤
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
        $(".ebwrap").css("display", "none");
        $(".ebwrap").eq(0).css("display", "flex");
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
        $(".ebwrap").css("display", "none");
        $(".ebwrap").eq(1).css("display", "flex");
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
        $(".ebwrap").css("display", "none");
        $(".ebwrap").eq(2).css("display", "flex");
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
        $(".ebwrap").css("display", "none");
    })
})

//--------- 슬라이더 탭 페이지 넘기기
$(function () {
    $(".editorbtn .ebprev").eq(0).click(function(){
        $('.listinner').eq(0).children('.innerbook').slice(4).prependTo('.ediliwrap1');
        $('.listinner').css('margin-left',-700);
        $('.listinner').filter(':not(:animated)').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $(".editorbtn .ebnext").eq(0).click(function(){
        $('.listinner').filter(':not(:animated)').stop().animate({marginLeft:-700}, function(){
            $('.listinner').eq(0).children('.innerbook').slice(0,3).appendTo('.ediliwrap1');
            $('.listinner').css({marginLeft:0})
        });
    })
})

$(function () {
    $(".editorbtn .ebprev").eq(1).click(function(){
        $('.listinner').eq(1).children('.innerbook').slice(4).prependTo('.ediliwrap2');
        $('.listinner').css('margin-left',-700);
        $('.listinner').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $(".editorbtn .ebnext").eq(1).click(function(){
        $('.listinner').filter(':not(:animated)').stop().animate({marginLeft:-700}, function(){
            $('.listinner').eq(1).children('.innerbook').slice(0,3).appendTo('.ediliwrap2');
            $('.listinner').css({marginLeft:0})
        });
    })
})

$(function () {
    $(".editorbtn .ebprev").eq(2).click(function(){
        $('.listinner').eq(2).children('.innerbook').slice(4).prependTo('.ediliwrap3');
        $('.listinner').css('margin-left',-700);
        $('.listinner').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $(".editorbtn .ebnext").eq(2).click(function(){
        $('.listinner').filter(':not(:animated)').stop().animate({marginLeft:-700}, function(){
            $('.listinner').eq(2).children('.innerbook').slice(0,3).appendTo('.ediliwrap3');
            $('.listinner').css({marginLeft:0})
        });
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