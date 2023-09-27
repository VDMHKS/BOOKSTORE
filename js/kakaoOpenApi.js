//---------- 추천마법사의 선택

$(function () {
    var bookTitles = [
        "또 못 버린 물건들",
        "디케",
        "프로메테우스",
        "도시",
        "소설 보다",
        "유전",
        "고양이",
        "노르웨이 숲",
        "잃어버린 시간을",
        "이토록",
    ];

    for (let i=0; i<11; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: bookTitles[i] },
            headers: { Authorization: "KakaoAK 57053f6a3b08ec813a2b7088ee0a1cf8"},
        }).done(function (data) {
            $(".section4 .swiperslide .cover").eq(i).append('<a href="sub.html"><img src="'+ data.documents[i].thumbnail +'" alt=""></a>');
            $(".section4 .swiperslide").eq(i).append('<div class="text"><div class="tit"><a href="sub.html">'+ data.documents[i].title +'</a></div></div>')
        });
    };
});


//---------- 화제의 책 소식

$(function () {
    var bookTitles2 = [
        "달의 아이",
        "달러 투자",
        "풍미",
        "녹색의",
        "시장",
        "케인스",
    ];

    for (let i=0; i<11; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: bookTitles2[i] },
            headers: { Authorization: "KakaoAK 57053f6a3b08ec813a2b7088ee0a1cf8"},
        }).done(function (data) {
            $(".section5 .swiperslide a").eq(i).append('<div class="cover"><img src="'+ data.documents[i].thumbnail +'" alt=""></div>');
            $(".section5 .swiperslide a").eq(i).append('<div class="rtext"><div class="tit">'+ data.documents[i].title +'</div><div class="sub">'+data.documents[i].contents.substring(0,40)+'...'+'</div></div>')
        });
    };
});


//---------- 이달의 주목도서

$(function () {
    var bookTitles = [
        "챗GPT",
        "고통",
        "백년",
        "일론",
        "데일카네기",
        "도시",
        "결심",
        "거인",
        "상황",
        "향수",
    ];

    for (let i=0; i<11; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: bookTitles[i] },
            headers: { Authorization: "KakaoAK 57053f6a3b08ec813a2b7088ee0a1cf8"},
        }).done(function (data) {
            $(".section7 .swiperslide .cover").eq(i).append('<a href="sub.html"><img src="'+ data.documents[i].thumbnail +'" alt=""></a>');
            $(".section7 .swiperslide").eq(i).append('<div class="text"><div class="tit"><a href="sub.html">'+ data.documents[i].title +'</a></div></div>')
        });
    };
});



//---------- 이 주의 특가

$(function () {
    var bookTitles = [
        "스펀지",
        "고대 생물",
        "버리다",
        "두뇌게임",
        "메타버스 투자",
        "요리",
        "셰익스피어",
        "글쓰기",
        "손글씨",
        "13세",
    ];

    for (let i=0; i<11; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: bookTitles[i] },
            headers: { Authorization: "KakaoAK 57053f6a3b08ec813a2b7088ee0a1cf8"},
        }).done(function (data) {
            $(".section8 .swiperslide .cover").eq(i).append('<a href="sub.html"><img src="'+ data.documents[i].thumbnail +'" alt=""></a>');
            $(".section8 .swiperslide .tit").eq(i).append('<a href="sub.html">'+ data.documents[i].title +'</a>')
        });
    };
});


//---------- 알라딘 스페셜

$(function () {
    var bookTitles = [
        "4대 비극",
        "폴 오스터",
        "슬픈 세상",
        "말하기",
        "식탁",
        "노래",
        "조지 오웰",
        "너의 췌장을",
        "올리브",
        "내 마음",
    ];

    for (let i=0; i<11; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: bookTitles[i] },
            headers: { Authorization: "KakaoAK 57053f6a3b08ec813a2b7088ee0a1cf8"},
        }).done(function (data) {
            $(".section9 .swiperslide .cover").eq(i).append('<a href="sub.html"><img src="'+ data.documents[i].thumbnail +'" alt=""></a>');
            $(".section9 .swiperslide").eq(i).append('<div class="text"><div class="tit"><a href="sub.html">'+ data.documents[i].title +'</a></div></div>')
        });
    };
});



//---------- 알라디너의 선택

$(function () {
    var bookTitles = [
        "하지말라고는",
        "철학",
        "영장",
        "녹색평론",
        "고통",
        "개소리",
        "영장류",
        "소크라테스",
        "생각",
        "여름",
    ];

    for (let i=0; i<11; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: bookTitles[i] },
            headers: { Authorization: "KakaoAK 57053f6a3b08ec813a2b7088ee0a1cf8"},
        }).done(function (data) {
            $(".section12 .swiperslide .cover").eq(i).append('<a href="sub.html"><img src="'+ data.documents[i].thumbnail +'" alt=""></a>');
            $(".section12 .swiperslide .tit").eq(i).append('<a href="sub.html">'+ data.documents[i].title +'</a>')
        });
    };
});



//---------- 알라딘 오디오북

$(function () {
    var bookTitles = [
        "마시지 않을 수",
        "고통에 관하여",
        "알아차림",
        "빌런",
        "유목민"
    ];

    for (let i=0; i<11; i++) {
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: bookTitles[i] },
            headers: { Authorization: "KakaoAK 57053f6a3b08ec813a2b7088ee0a1cf8"},
        }).done(function (data) {
            $(".section13 .swiperslide .cover").eq(i).append('<a href="sub.html"><span class="audiobook">오디오북</span><img src="'+ data.documents[i].thumbnail +'" alt=""></a>');
            $(".section13 .swiperslide").eq(i).append('<div class="text"><div class="tit"><a href="sub.html">'+ data.documents[i].title +'</a></div></div>')
        });
    };
});