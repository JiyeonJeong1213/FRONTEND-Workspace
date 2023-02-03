$(document).ready(function(){

      $(window).scroll(function(){
  
      let h = $(document).scrollTop(); // 스크롤 위치

      // let h = $(document).scrollTop(($(document).height()));

      var innerHeight = $(this).innerHeight();
      console.log(innerHeight)

      h = (h+1000);
 
      let text1Y = $("#text1").offset().top; // text1의 위치
      let text2Y = $("#text2").offset().top; 
      let text3Y = $("#text3").offset().top; 
      let text4Y = $("#text4").offset().top; 
      let text5Y = $("#text5").offset().top; 
      let text6Y = $("#text6").offset().top; 

      if(h >= text1Y ){
          $("#text1").addClass("up_down");
          $("#text1").removeClass("op");
      }

      if(h >= text2Y){
         $("#text2").addClass("down_up");
         $("#text2").removeClass("op");
      }

      if(h >= text3Y){
        $("#text3").find("p").addClass("text-m1");
        $("#hoder1").addClass("text-m3");
        
      }

      if(h >= text4Y){
        $("#text4").find("p").addClass("text-m1");
        $("#hoder2").addClass("text-m2");
        
      }

      if(h >= text5Y){
        $("#text5").addClass("fade-in");
        $("#text5").removeClass("op");
      }

      if(h >= text6Y){
        $("#text6").find("p").addClass("text-m1");
        $("#text6").find("hr").addClass("text-m1");
      }
   
  
    })


      // 메뉴바
    $("#menu>li").hover(function(){
        $(this).children('a').css("color","gray");
    },function(){
        $(this).children('a').css("color","black");
    });
    $("#menu>li").eq(1).hover(function(){
        $(this).children('a').text("클라이밍");
    },function(){
        $(this).children('a').text("ABOUT");
    });
    $("#menu>li").eq(2).hover(function(){
        $(this).children('a').text("회원권");
    },function(){
        $(this).children('a').text("MEMBERSHIP");
    });
    $("#menu>li").eq(3).hover(function(){
        $(this).children('a').text("수업");
    },function(){
        $(this).children('a').text("CLASS");
    });
    $("#menu>li").eq(4).hover(function(){
        $(this).children('a').text("개강 및 세팅일정");
    },function(){
        $(this).children('a').text("SCHEDULE");
    });
    $("#menu>li").eq(5).hover(function(){
        $(this).children('a').text("스토어");
    },function(){
        $(this).children('a').text("STORE");
    });
    $("#menu>li").eq(6).hover(function(){
        $(this).children('a').text("공지 및 게시판");
    },function(){
        $(this).children('a').text("NOTICE");
    });
    $("#menu>li").find("li").hover(function(){
        $(this).css("background","rgb(70, 67, 67)");
        $(this).children('a').css("color","white");
    },function(){
        $(this).css("background","white");
        $(this).children('a').css("color","black");
    });
    // 아이콘
    $("#h_right a").hover(function(){$(this).css("color","gray")},function(){$(this).css("color","black")});


  })


