
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


/* 장바구니 담기 버튼 */
$(function(){
    $(".erebtncart a").click(function(){
        $("#tobasketlayer").fadeIn(200);
        setTimeout(function () {
            $("#tobasketlayer").fadeOut(200);
        }, 3000); 
    })
    $("#tobasketlayer .close2").click(function(){
        $("#tobasketlayer").fadeOut(200);
    })
})


/* 선물하기 버튼 */
$(function(){
    $("#btnpresent a").click(function(){
        $("#tbgiftbooklayer").css("display", "block");
    })
    $("#tbgiftbooklayer .close2").click(function(){
        $("#tbgiftbooklayer").fadeOut(200);
    })
    $("#btnpresent a, #tbgiftbooklayer").mouseenter(function(){
        $("#tbgiftbooklayer").stop().css("display", "block");
    })
    $("#btnpresent a, #tbgiftbooklayer").mouseleave(function(){
        $("#tbgiftbooklayer").stop().css("display", "none");
    })
})


/* 보관함 버튼 */
$(function(){
    $("#btnsavebasket a, layersavebasket").mouseenter(function(){
        $("#layersavebasket").stop().css("display", "block");
    })
    $("#btnsavebasket a, layersavebasket").mouseleave(function(){
        $("#layersavebasket").stop().css("display", "none");
    })
})