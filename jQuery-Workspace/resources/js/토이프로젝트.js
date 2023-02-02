$(function(){
    // ---헤더부분---
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

    // ---컨텐츠부분---

    // 이미지슬라이드
    let imgs = $("#slides");
    let img_count = $("#slides").children().length;
    let img_index = 1;

    $(".prev").click(function(){
        back();
    });
    $(".next").click(function(){
        next();
    });

    /* 슬라이드마다 불렛 컬러 바꿔주기 */
    function b_color() {
        $("#bullets>div").css("background","rgba(255, 255, 255, 0.5)");
        switch(img_index){
            case 1: $("#bullets>div").eq(0).css("background","white"); break;
            case 2: $("#bullets>div").eq(1).css("background","white"); break;
            case 3: $("#bullets>div").eq(2).css("background","white"); break;
        }
    }

    /* <화살표 클릭하면 이전 슬라이드로 이동 */
    function back() { 
        imgs.css("transition",'0.5s ease-out')
        imgs.animate({
            left: "+=1903px"}, 500
        );
        img_index--;

        if(0===img_index) {
            setTimeout(function(){
                imgs.css("transition",'0s ease-out')
                imgs.animate({
                    left: "-=5709px"
                },0)
            },1000);
            img_index = 3;
        }

        b_color();
    }    

    /* >화살표 클릭하면 다음 슬라이드로 이동 */
    function next() {
        imgs.css("transition",'0.5s ease-out')
        imgs.animate({
            left: "-=1903px"}, 500
        );
        img_index++;
        
        if(img_index===img_count-1) {
            setTimeout(function(){
                //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
                imgs.css("transition",'0s ease-out')
                imgs.animate({
                    left: "+=5709px"
                },0);
            },1000);
            img_index = 1;
        }
        
        b_color();
    }

    /* 불렛 클릭하면 슬라이드 이동 */
    let bullets = $("#bullets>div");
    $.each (bullets, function(index){
        $(this).click(function(){
            imgs.css("left", -1903*(index+1)+"px")
            img_index=index+1;
            b_color();
        });
    });

    /* 자동 슬라이드 */
    setInterval(next,3000);

    // content2
    /* 마우스 올리면 글씨 보이게 */
    let content_2_imgs = $("#content_2 img");
    let hover_texts = $(".hover-text");

    content_2_imgs.each(function(index){
        $(this).hover(function(){
            $(hover_texts[index]).css("display","block");
        },function(){
            $(hover_texts[index]).css("display","none");
        });
    });
    hover_texts.each(function(){
        $(this).hover(function(){
            $(this).css("display","block");
        },function(){
            $(this).css("display","none");
        });
    });

    // content3
    /* 더보기 클릭하면 펼쳐지게 */ 
    $("#more").click(more);

    function more() {
        $("#insta_inner").css("height","1232px");
    }
});