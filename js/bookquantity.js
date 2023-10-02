$(function() {

    let num = $(".ereforminput");
    let qty = num.val();

    $('.ereforminput').on('change', function () {
        $('.priceval').empty();
        var amount = (17550*$('.ereforminput').val());
        $('.priceval').append(amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        qty = num.val();
    })

    $(".plusbtn").click(function() {
        if (qty < 500) {
            qty++;
            total();
        } else {
            alert ("500권(개) 이하만 주문 가능합니다.")
        }

    });
    $(".minusbtn").click(function() {
        if (qty > 1) {
            qty--;
            total();
        } else {
            alert ("1개 이상만 주문이 가능합니다.")
        }
    });

    function total() {
        let total = qty * 17550;
        $(".ereforminput").val(qty);
        $(".priceval").text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }

});