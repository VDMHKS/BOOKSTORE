/* 북 커버 슬라이드 & 마지막 페이지 알림 & 미리보기 버튼 Hide/Show */

$(function(){
    var $index = 0

    $(function () {
        $('.leftarrow2 span').click(function(){
            if ($index > 0) {
                $index--;
                $('.swipercontainer .swiperwrapper').stop().animate({marginLeft:($index * -502)});
                if ($index < 1) {
                $('.prevbox a').css('opacity', '1');
                }   
            }
        })
    })

    $(function () {
        $('.rightarrow2 span').click(function(){
            if ($index < 16) {
                $index++;
                $('.swipercontainer .swiperwrapper').stop().animate({marginLeft:($index * -502)});
                $('.prevbox a').css('opacity', '0');
            }
            else if ($index == 16) {
                $(".lastpic").css('display', 'flex');
                setTimeout(function () {
                    $(".lastpic").css('display', 'none');
                }, 2000); 
            }
        })
    })
})


/* 메인 커버 회전 */

$(function () {
    var isRotated = false;

    $(".coveritem").click(function () {
        if (isRotated) {
            $(this).css("transform", "rotateY(35deg)");
            isRotated = false;
        } else {
            $(this).css("transform", "rotateY(180deg)");
            isRotated = true;
        }
    });

    $(".coveritem").hover(
        function () {
            if (!isRotated) {
                $(this).css("transform", "rotateY(35deg)");
            }
        },
        function () {
            if (!isRotated) {
                $(this).css("transform", "rotateY(0deg)");
            }
        }
    );
});
