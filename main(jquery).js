var allVideos = $('.video');

var allplay=$("#play-all");

var video;

// 누구.hover(
//     function(){
//         누구한테 마우스 올렸을 때 할 일
//     }, function(){
//         누구에게 마우스를 내렸을 때 할 일
//     }
// )

allVideos.hover(
    function(){
        video=$(this).find('video');
        console.log(video.get(0))
        //html요소(body,header,div,h1,em...)
        //get(0)--> html 요소 중에서 첫번째 요소를 호출
        video.get(0).play();
    }, function(){
        video.get(0).pause();
    }
)

allplay.click(function(){
    //allplay야~ on클래스를 가지고 있는가?
    if(allplay.hasClass('on')){
        //조건문이 참 일때 할 일
        var vd=$('video');
        allplay.removeClass('on');
        $('.play-all').text('pause all')
        // for(초기값; 조건문; 증가감식){
        //     실행문
        // }
        console.log(vd.length)
        for(var i=0; i<vd.length; i++){
            vd.get(i).play();
        }
    }else{
        //조건문이 거짓 일때 할 일
        var vd=$('video');
        allplay.addClass('on');
        $('.play-all').text('play all')
        for(var i=0; i<vd.length; i++){
            vd.get(i).pause();
        }
    }
});