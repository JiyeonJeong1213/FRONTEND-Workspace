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
    let img_position = 1;

    // 1번 이미지를 복사에서 마지막 슬라이드 뒤에 붙이고, 마지막 이미지를 복사해서 처음 슬라이드 앞에 붙임
        let clone_first = imgs.children().eq(0).clone(true);
        let clone_last = imgs.children().eq(2).clone(true);
        imgs.append(clone_first);
        // imgs.prepend(clone_last);    

    $(".prev").click(function(){
        back();
    });
    $(".next").click(function(){
        next();
    });

    function back() {
        if(1<img_position){
            imgs.animate({
                left: "+=1903px"}, 500
            );
        img_position--;
        }
        // if(1===img_position) {
        //     setTimeout(function(){
        //         imgs.animate({
        //             left: "-=5709px"
        //         },0)
        //     },500);
        //     img_position = 1;
        // }

    }    

    function next() {
        if(img_count>img_position) {
            imgs.animate({
                left: "-=1903px"}, 500
            );
        img_position++;
        }
        // if(img_position===img_count) {
        //     setTimeout(function(){
        //         //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
        //         imgs.animate({
        //             left: "+=5709px"
        //         },0);
        //     },500);
        //     img_position = 3;
        // }
    }
});