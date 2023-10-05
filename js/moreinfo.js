$(function(){
    $("#divauthorinfoshort a").click(function(){
        $("#divauthorinfoall").css("display", "block");
        $("#divauthorinfoshort").css("display", "none");
    })
    $("#divauthorinfoall a").click(function(){
        $("#divauthorinfoshort").css("display", "block");
        $("#divauthorinfoall").css("display", "none");
    })
})

$(function(){
    $("#divpublisherdescshort a").click(function(){
        $("#divpublisherdescall").css("display", "block");
        $("#divpublisherdescshort").css("display", "none");
    })
    $("#divpublisherdescall a").click(function(){
        $("#divpublisherdescshort").css("display", "block");
        $("#divpublisherdescall").css("display", "none");
    })
})
