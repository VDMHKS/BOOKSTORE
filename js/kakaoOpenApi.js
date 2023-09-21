
$(function () {
    var books = [
        "또 못 버린 물건들",
        "디케의 눈물",
        "명탐정의 제물",
        "소녀 동지여 적을 쏴라",
        "소설 보다 : 가을 2023",
        "경험은 어떻게 유전자에 새겨지는가",
        "흔한남매 이상한 나라의 고전 읽기 4",
        "사소한 추억의 힘",
        "문과 남자의 과학 공부",
        "마시지 않을 수 없는 밤이니까요",
    ];

    books.forEach(function(title){
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: $.param({ query : title, size: 1 }),
            headers: { Authorization: "KakaoAK 57053f6a3b08ec813a2b7088ee0a1cf8" }
        })
        .done(function (msg) {
            if (msg.documents.length > 0) {
                
            }
        })
    })
})

