$(function(){
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
        img_index--;
        imgs.css("transition",'0.5s ease-out')
        imgs.animate({
            left: -1903*(img_index)+"px"}, 500
        );
        
        if(0===img_index) {
            setTimeout(function(){
                imgs.css("transition",'0s ease-out')
                imgs.animate({
                    left: "-5709px"
                },0)
            },1000);
            img_index = 3;
        }

        b_color();
    }    

    /* >화살표 클릭하면 다음 슬라이드로 이동 */
    function next() {
        img_index++;
        imgs.css("transition",'0.5s ease-out')
        imgs.animate({
            left: -1903*(img_index)+"px"}, 500
        );
        
        if(img_index===img_count-1) {
            setTimeout(function(){
                //1초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
                imgs.css("transition",'0s')
                imgs.animate({
                    left: "-1903px"
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
            imgs.animate({
                left: -1903*(index+1)+"px"
            }, 500);
            // imgs.css("left", -1903*(index+1)+"px");
            img_index=index+1;
            b_color();
        });
    });

    /* 자동 슬라이드 */
    setInterval(next,5000);

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

    /* 두둥효과 */
        $(window).scroll(function(){
            let h = $(document).scrollTop(); // 스크롤 위치
            h = (h+500);
            let text6Y = $("#content_2").offset().top; 
            if(h >= text6Y){
            $("#content_2").find("h5").addClass("text-m1");
            $("#content_2").find("hr").addClass("text-m1");
            }
        })

    // content3
    /* 더보기 클릭하면 펼쳐지게 */ 
    $("#more").click(more);

    function more() {
        $("#insta_inner").css("height","1232px");
    }

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
});