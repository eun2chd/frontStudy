$(function(){
   var current = 0;//현재 보이는 이미지의 인덱스 0부터
   var setIntervalId;
   //지역변수(특정함수내에서만 존재하는 변수), 
   //전역변수(위치와 상관없이 스크립트 전체에서 사용할 수 있는변수)
   $("#btns > li").eq(0).addClass("on");//첫번째 버튼에 현재 이미지가 보이닌까 주석으로 클래스 적용

   $("#btns > li").click(function(){//
       var i = $(this).index();
       //console.log(i);

       $("#btns > li").removeClass("on");
       $(this).addClass("on");


       move(i);//해당되는 버튼의 번호를 매개변수로 보냄
   });
 
   //자동실행되는 함수를 제어
   $("#wrap").on({
       mouseover:function(){
          clearInterval(setIntervalId);;//자동실행을 중지
       },
       mouseout:function(){
          timer();// 자동실행을 위해 자동실행 함수를 호출
       }
   });


   //자동실행
   //setInterval(실행문, 시간) 시간차를 자동으로 실행
   //clearInterval() setInterval()의 중지하는 명령어
   timer();// 함수 호출
   function timer(){
    setIntervalId = setInterval(function(){
        var n = current + 1; //1 2 3 

        if(n == 4){
            n = 0;
        }

        $("#btns > li").removeClass("on");
        $("#btns > li").eq(n).addClass("on");

        move(n);
      },3000)
     
   }
  


   //애니메이션 함수
   function move(n){//1
       if(current == n) return; //2 

       var currentEl = $("#view ul li").eq(current);//0 1 2 3
       var nextEl = $("#view ul li").eq(n);

       currentEl.css({left:"0%"}).animate({left:"-100%"});
       nextEl.css({left:"100%"}).animate({left:"0%"});

      current = n;  //2-> 현재 보이는 이미지대상 
   }






















});