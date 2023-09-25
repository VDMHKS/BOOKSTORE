//---------- 추천마법사의 선택

$(function () {
    $('.section4 .cover').mouseenter(function(){
        $(this).find('.bookbtnlayer').show();
    })
    $('.section4 .cover').mouseleave(function(){
        $(this).find('.bookbtnlayer').hide();
    })
})

$(function () {
    $('.section4 .whiteprev').click(function(){
        $('.section4 .swiperwrapper').children('.swiperslide').slice(5).prependTo('.section4 .swiperwrapper');
        $('.section4 .swiperwrapper').css('margin-left',-1050);
        $('.section4 .swiperwrapper').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $('.section4 .whitenext').click(function(){
        $('.section4 .swiperwrapper').filter(':not(:animated)').stop().animate({marginLeft:-1050}, function(){
            $('.section4 .swiperwrapper').children('.swiperslide').slice(0,5).appendTo('.section4 .swiperwrapper');
            $('.section4 .swiperwrapper').css({marginLeft:0})
        });
    })
})



//---------- 화제의 책 소식

$(function () {
    $('.section5 .whiteprev2').click(function(){
        $('.section5 .swiperwrapper').children('.swiperslide').slice(3).prependTo('.section5 .swiperwrapper');
        $('.section5 .swiperwrapper').css('margin-left',-1030);
        $('.section5 .swiperwrapper').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $('.section5 .whitenext2').click(function(){
        $('.section5 .swiperwrapper').filter(':not(:animated)').stop().animate({marginLeft:-1030}, function(){
            $('.section5 .swiperwrapper').children('.swiperslide').slice(0,3).appendTo('.section5 .swiperwrapper');
            $('.section5 .swiperwrapper').css({marginLeft:0})
        });
    })
})


//---------- 알라딘이 만든 사은품

$(function () {
    $('.section6 .whiteprev2').click(function(){
        $('.section6 .swiperwrapper').children('.swiperslide').slice(3).prependTo('.section6 .swiperwrapper');
        $('.section6 .swiperwrapper').css('margin-left',-1030);
        $('.section6 .swiperwrapper').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $('.section6 .whitenext2').click(function(){
        $('.section6 .swiperwrapper').filter(':not(:animated)').stop().animate({marginLeft:-1030}, function(){
            $('.section6 .swiperwrapper').children('.swiperslide').slice(0,3).appendTo('.section6 .swiperwrapper');
            $('.section6 .swiperwrapper').css({marginLeft:0})
        });
    })
})



//---------- 이달의 주목도서

$(function () {
    $('.section7 .whiteprev').click(function(){
        $('.section7 .swiperwrapper').children('.swiperslide').slice(5).prependTo('.section7 .swiperwrapper');
        $('.section7 .swiperwrapper').css('margin-left',-1050);
        $('.section7 .swiperwrapper').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $('.section7 .whitenext').click(function(){
        $('.section7 .swiperwrapper').filter(':not(:animated)').stop().animate({marginLeft:-1050}, function(){
            $('.section7 .swiperwrapper').children('.swiperslide').slice(0,5).appendTo('.section7 .swiperwrapper');
            $('.section7 .swiperwrapper').css({marginLeft:0})
        });
    })
})



//---------- 이 주의 특가

$(function () {
    $('.section8 .whiteprev').click(function(){
        $('.section8 .swiperwrapper').children('.swiperslide').slice(5).prependTo('.section8 .swiperwrapper');
        $('.section8 .swiperwrapper').css('margin-left',-1050);
        $('.section8 .swiperwrapper').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $('.section8 .whitenext').click(function(){
        $('.section8 .swiperwrapper').filter(':not(:animated)').stop().animate({marginLeft:-1050}, function(){
            $('.section8 .swiperwrapper').children('.swiperslide').slice(0,5).appendTo('.section8 .swiperwrapper');
            $('.section8 .swiperwrapper').css({marginLeft:0})
        });
    })
})




//---------- 알라딘 스페셜

$(function () {
    $('.section9 .whiteprev').click(function(){
        $('.section9 .swiperwrapper').children('.swiperslide').slice(5).prependTo('.section9 .swiperwrapper');
        $('.section9 .swiperwrapper').css('margin-left',-1050);
        $('.section9 .swiperwrapper').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $('.section9 .whitenext').click(function(){
        $('.section9 .swiperwrapper').filter(':not(:animated)').stop().animate({marginLeft:-1050}, function(){
            $('.section9 .swiperwrapper').children('.swiperslide').slice(0,5).appendTo('.section9 .swiperwrapper');
            $('.section9 .swiperwrapper').css({marginLeft:0})
        });
    })
})



//---------- 중간 광고 배너

$(function () {
    $('.section10 .whiteprev2').click(function(){
        $('.section10 .swiperwrapper').children('.swiperslide').slice(3).prependTo('.section10 .swiperwrapper');
        $('.section10 .swiperwrapper').css('margin-left',-1030);
        $('.section10 .swiperwrapper').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $('.section10 .whitenext2').click(function(){
        $('.section10 .swiperwrapper').filter(':not(:animated)').stop().animate({marginLeft:-1030}, function(){
            $('.section10 .swiperwrapper').children('.swiperslide').slice(0,3).appendTo('.section10 .swiperwrapper');
            $('.section10 .swiperwrapper').css({marginLeft:0})
        });
    })
})



//---------- 투비컨티뉴드 추천 노트

$(function () {
    $('.section11 .whiteprev2').click(function(){
        $('.section11 .swiperwrapper').children('.swiperslide').slice(5).prependTo('.section11 .swiperwrapper');
        $('.section11 .swiperwrapper').css('margin-left',-1030);
        $('.section11 .swiperwrapper').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $('.section11 .whitenext2').click(function(){
        $('.section11 .swiperwrapper').filter(':not(:animated)').stop().animate({marginLeft:-1030}, function(){
            $('.section11 .swiperwrapper').children('.swiperslide').slice(0,5).appendTo('.section11 .swiperwrapper');
            $('.section11 .swiperwrapper').css({marginLeft:0})
        });
    })
})



//---------- 알라디너의 선택

$(function () {
    $('.section12 .whiteprev').click(function(){
        $('.section12 .swiperwrapper').children('.swiperslide').slice(5).prependTo('.section12 .swiperwrapper');
        $('.section12 .swiperwrapper').css('margin-left',-1030);
        $('.section12 .swiperwrapper').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $('.section12 .whitenext').click(function(){
        $('.section12 .swiperwrapper').filter(':not(:animated)').stop().animate({marginLeft:-1030}, function(){
            $('.section12 .swiperwrapper').children('.swiperslide').slice(0,5).appendTo('.section12 .swiperwrapper');
            $('.section12 .swiperwrapper').css({marginLeft:0})
        });
    })
})


//---------- 끝 광고 배너

$(function () {
    $('.section15 .whiteprev').click(function(){
        $('.section15 .swiperwrapper').children('.swiperslide').slice(3).prependTo('.section15 .swiperwrapper');
        $('.section15 .swiperwrapper').css('margin-left',-1030);
        $('.section15 .swiperwrapper').stop().animate({marginLeft:0},400);
    })
})

$(function () {
    $('.section15 .whitenext').click(function(){
        $('.section15 .swiperwrapper').filter(':not(:animated)').stop().animate({marginLeft:-1030}, function(){
            $('.section15 .swiperwrapper').children('.swiperslide').slice(0,3).appendTo('.section15 .swiperwrapper');
            $('.section15 .swiperwrapper').css({marginLeft:0})
        });
    })
})