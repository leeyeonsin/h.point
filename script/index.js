$(function(){
    $("li").on("click",function(){
        var i = $(this).index();
        alert("나는"+i+"임");
    });
});


/* li를 클릭했을때 이벤트가 일어난 
요소인 li(this)의 순서값을 경고창으로 알려주기 */ 