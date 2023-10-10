$(function(){
    $.get("/txt/txt1.txt", function(data) {
        $(".ereprodmiddlewrap .ereprodmcontsr").eq(1).html(data);
    })     
});