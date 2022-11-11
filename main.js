/* // 배열
var 변수 = 10;
console.log(변수) //10

var 배열 =['일동','이동','삼동','사동']
console.log(배열[1]) //이동 컴퓨터는 zero 베이스기 때문에 1을 넣으면 두번째 이동이가 불러짐
console.log(배열[3]) //사동

//배열요소 각각 할일
//배열.forEach(할일);
//배열.forEach(function(){실행문});
배열.forEach(function(ryu){
    console.log(ryu+"아~ 안녕!")
}); */

var allVideos=document.querySelectorAll('.video');

var allplay=document.querySelector('#play-all')

allVideos.forEach(function(v){
    v.addEventListener('mouseover',function(){
        var video = v.querySelector('video')
        video.play();
    })

    v.addEventListener('mouseleave',function(){
        var video = v.querySelector('video')
        video.pause();
    })
});

allplay.addEventListener('click',function(){
    //allplay야~ 너 on이라는 클래스명을 가지고 있니?
/*  if(조건문){
        조건문이 참일 때 실행할 일
    }else{
        조건문이 거짓일때 실행할 일
    } */
    if(allplay.classList.contains('on')){
        console.log('ok')
        allplay.classList.remove('on')
        document.querySelector('.play-all').innerHTML="pause all"
        allVideos.forEach(function(v){
            var video=v.querySelector('video')
            video.play()
        })
    }else{
        console.log('no')
        allplay.classList.add('on')
        document.querySelector('.play-all').innerHTML="play all"
        allVideos.forEach(function(v){
            var video=v.querySelector('video')
            video.pause()
        })
        
    }
});