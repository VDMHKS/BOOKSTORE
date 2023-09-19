// -------- 최상단 이벤트 배너 닫기
$(function () {
    $('.close a').click(function () {
        $('.headerevent').hide();
    })
})



// -------- 최상단 탭 호버
$(function () {
    $("#htnav li").mouseenter(function () {
        $(this).children("div").css("display", "flex");
    }),
        $("#htnav li").mouseleave(function () {
        $(this).children("div").hide();
    });
});

$(function () {
    $(".mytool li").mouseenter(function () {
        $(this).children("div").css("display", "flex");
    }),
        $(".mytool li").mouseleave(function () {
        $(this).children("div").hide();
    });
});


// ---------- 검색창 드롭박스
$(function () {
    $("#searchoption, #searchdrop").mouseenter(function () {
        $("#searchdrop").css("display", "block");
    }),
        $("#searchoption, #searchdrop").mouseleave(function () {
        $("#searchdrop").hide();
    });
});



// ---------- 헤더 하단 탭 호버
$(function () {
    $(".headerbot li").mouseenter(function () {
        $(this).children("div").css("display", "flex");
    }),
        $(".headerbot li").mouseleave(function () {
        $(this).children("div").hide();
    });
});