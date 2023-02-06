// 슬라이드 무한으로 연결

let slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides img'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 260,
    slideMargin = 11;

makeClone();

function makeClone(){
    for(let i=0; i<slideCount; i++){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for(let i=slideCount-1; i>=0; i--){
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitialPos();

    setTimeout(function(){
        slides.classList.add('animated');
    },100);
}

function updateWidth(){
    let currentSlides = document.querySelectorAll('.slides img');
    let newSlideCount = currentSlides.length;

    let newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
    slides.style.width = newWidth;
}

function setInitialPos(){
    let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    slides.style.transform = 'translateX(' + initialTranslateValue+'px)';
}

function moveSlide(num){
    slides.style.left = -num * (slideWidth + slideMargin)+'px';
    currentIdx = num;
    console.log(currentIdx, slideCount);

    if(currentIdx == slideCount || currentIdx == -slideCount){
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left= '0px';
            currentIdx = 0;     
        },4900);
        setTimeout(function(){
            slides.classList.add('animated');
        },4950);
    }
} 

//  슬라이드 자동 설정
let timer = undefined;

function autoSlide(){
    if(timer == undefined){
        timer = setInterval(function(){
            moveSlide(currentIdx + 1);
        },5000);
    }
}
  autoSlide();





// 이벤트
$(document).ready(function(){


$(window).scroll(function(){
  
    let h = $(document).scrollTop(); // 스크롤 위치
    let Y = $(window).height();

    h = (h+Y);

    let text1Y = $(".evt1").offset().top; 
    let text2Y = $("#text2").offset().top; 
    let text3Y = $("#rsv_btnbox").offset().top; 
    let text4Y = $(".evt2").offset().top;
    let text5Y = $(".c5_line").offset().top;
    let text6Y = $(".img_ani").offset().top;
    

     if(h >= text1Y){
         $(".evt1").addClass("text-m1");
     }
    if(h >= text2Y ){
        $("#text2").find("h2").addClass("text-m3");
    }
    if(h >= text3Y ){
        $("#rsv_btnbox").addClass("text-m3");
    }
    if(h >= text4Y ){
        $(".evt2").addClass("text-m1");
    }
    if(h >= text5Y ){
        $(".c5_line").addClass("text-m1");
    }
    if(h >= text6Y ){
        $('.img_ani').addClass("text-m3");
    }
 

  });

})









$(function(){
    
    // FAQ
    $('.c4_content>div').click(function(){
        let $p = $(this).nextUntil('div'); 
        
        if($p.css("display") == "none"){
            $(this).siblings('p') .slideUp();
            $p.slideDown(300);
            $('.content_q').css('border-bottom','1px solid rgba(32,19,3,0.1)');
        }else{
            $p.slideUp(300);
        }
    });


    // 하트버튼
    $('.i_heart').click(function(){
        $(this).css({color:'#FF8F00'});
        $(this).next().text('1').css({color:'#FF8F00'});
    });

    //글쓰기 버튼 alert
    $('#last_btn').click(function(){
        alert('작성권한이 없습니다.'); 
    });
    
    
    // 조회수 카운트
    // let $count = 0;
    // $('.count').html('')
    

   




    // // input search 포커스 , 포커스 아웃 시
    $('#search').focus(function(){
        $('#c4_content_foot>form').css('border','1px solid #FF8F00');
    });
    $('#search').blur(function(){
        $('#c4_content_foot>form').css('border','1px solid #333');
    });
    




});



// ---헤더부분---
    // 메뉴바
    $("#menu>li").hover(function(){
        $(this).children('a').css("color","gray");
    },function(){
        $(this).children('a').css("color","black");
    });
    // $("#menu>li").eq(0).click(function(){
    //     location.reload();
    // });
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
    $("#h_right button,#h_right span.hidden").hover(function(){$(this).css("color","gray")},function(){$(this).css("color","black")});
    $(".hidden").click(function(){
        $("#hidden").css("display","block"); // 히든검색창 오픈
    });
    $("#close").click(function(){
        $("#hidden").css("display","none");
    });



// ---푸터부분---
$("#f_menu li").eq(1).hover(function(){
    $(this).children('a').text("클라이밍");
},function(){
    $(this).children('a').text("ABOUT");
});
$("#f_menu li").eq(2).hover(function(){
    $(this).children('a').text("회원권");
},function(){
    $(this).children('a').text("MEMBERSHIP");
});
$("#f_menu li").eq(3).hover(function(){
    $(this).children('a').text("수업");
},function(){
    $(this).children('a').text("CLASS");
});
$("#f_menu li").eq(4).hover(function(){
    $(this).children('a').text("개강 및 세팅일정");
},function(){
    $(this).children('a').text("SCHEDULE");
});
$("#f_menu li").eq(5).hover(function(){
    $(this).children('a').text("스토어");
},function(){
    $(this).children('a').text("STORE");
});
$("#f_menu li").eq(6).hover(function(){
    $(this).children('a').text("공지 및 게시판");
},function(){
    $(this).children('a').text("NOTICE");
});