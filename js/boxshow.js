
/* SNS 공유 버튼 */
$(function(){
    $(".right a").click(function(){
        $(".ereprodtitlewrap .erelayersttit2").css("display", "block")
    })
    $(".ereprodtitlewrap .close2").click(function(){
        $(".ereprodtitlewrap .erelayersttit2").css("display", "none")
    })
})

/* 마일리지 안내 버튼 */
$(function(){
    $(".parrowbtn").click(function(){
        $(".nppopup").toggle()
    })
    $(".nppopup .close2").click(function(){
        $(".nppopup").css("display", "none")
    })
})

/* 지역 변경 버튼 */
$(function(){
    $(".ritem .eresubblue").click(function(){
        $("#addrinputtable").css("display", "block")
    })
    $("td a").click(function(){
        $("#addrinputtable").css("display", "none")
    })
})


/* 세일즈 포인트 버튼 */
$(function(){
    $(".parrowbtn2").click(function(){
        $(".nppopup2").toggle()
    })
    $(".nppopup2 .close2").click(function(){
        $(".nppopup2").css("display", "none")
    })
})


/* 별점 버튼 */
$(function(){
    $(".eresubpink").click(function(){
        $("#divranklayer").toggle()
    })
    $("#divranklayer .close2").click(function(){
        $("#divranklayer").css("display", "none")
    })
})


/* 무이자 할부 버튼 */
$(function(){
    $(".eresubblue2").click(function(){
        $("#helpfreeinterest").toggle()
    })
    $("#helpfreeinterest .close2").click(function(){
        $("#helpfreeinterest").css("display", "none")
    })
})


/* 소득공제 790원 버튼 */
$(function(){
    $(".eresubblue3").click(function(){
        $("#helpdeduct").toggle()
    })
    $("#helpdeduct .close2").click(function(){
        $("#helpdeduct").css("display", "none")
    })
})