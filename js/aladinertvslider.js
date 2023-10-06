/* 영상 슬라이더 */
$(function () {
    $('.leftarrows a').click(function(){
        $('#aladinertvlistcontainer .swiperwrapper').stop().animate({marginLeft:0},200);
    })
})

$(function () {
    $('.rightarrows a').click(function(){
        $('#aladinertvlistcontainer .swiperwrapper').stop().animate({marginLeft:-203},200);
    })
})



/* 클릭하면 영상 바뀜 */
$(function () {
    
    $('.aladinertvlist .erealadinertvwrap').eq(0).click(function(){
        $('#aladinertvplayvideo iframe').attr("src", "https://www.youtube.com/embed/p_Phjdi0rLY?si=1sMe5D6EatUpjDtN")
    })

    $('.aladinertvlist .erealadinertvwrap').eq(1).click(function(){
        $('#aladinertvplayvideo iframe').attr("src", "https://www.youtube.com/embed/-SV321tMDp0?si=KeScP2fz-pdmS0-7")
    })

    $('.aladinertvlist .erealadinertvwrap').eq(2).click(function(){
        $('#aladinertvplayvideo iframe').attr("src", "https://www.youtube.com/embed/DcWvWnWMV7M?si=yPq-9-OE3g3y8K3q")
    })

    $('.aladinertvlist .erealadinertvwrap').eq(3).click(function(){
        $('#aladinertvplayvideo iframe').attr("src", "https://www.youtube.com/embed/5a4KcbeEVmc?si=FRGFEF5rwa9oOETW")
    })

    $('.aladinertvlist .erealadinertvwrap').eq(4).click(function(){
        $('#aladinertvplayvideo iframe').attr("src", "https://www.youtube.com/embed/eaO4vnGKDI8?si=hUuDxlKdhrTRJwKs")
    })

    $('.aladinertvlist .erealadinertvwrap').eq(0).click(function(){
        $('#aladinertvplayvideo .bloglist3').css("display", "none")
        $('#aladinertvplayvideo .bloglist3').eq(0).css("display", "block")
    })

    $('.aladinertvlist .erealadinertvwrap').eq(1).click(function(){
        $('#aladinertvplayvideo .bloglist3').css("display", "none")
        $('#aladinertvplayvideo .bloglist3').eq(1).css("display", "block")
    })

    $('.aladinertvlist .erealadinertvwrap').eq(2).click(function(){
        $('#aladinertvplayvideo .bloglist3').css("display", "none")
        $('#aladinertvplayvideo .bloglist3').eq(2).css("display", "block")
    })

    $('.aladinertvlist .erealadinertvwrap').eq(3).click(function(){
        $('#aladinertvplayvideo .bloglist3').css("display", "none")
        $('#aladinertvplayvideo .bloglist3').eq(3).css("display", "block")
    })

    $('.aladinertvlist .erealadinertvwrap').eq(4).click(function(){
        $('#aladinertvplayvideo .bloglist3').css("display", "none")
        $('#aladinertvplayvideo .bloglist3').eq(4).css("display", "block")
    })
})

