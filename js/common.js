// 모바일검색창 열기
$('.h_search .open').click(function(){
    $('.search_wrap').fadeIn();
    $('search_wrap').css({
        display: 'block'
    });
    return false
});

// 모바일 검색창 닫기
$('.h_search span').click(function(){
    $('.search_wrap').fadeOut();
    $('search_wrap').css({
        display: 'none'
    });
});

// 모바일 메뉴 열기
$('.h_menu_btn').click(function(){
    $('.side_menu_bg').fadeIn();
    $('.h_menu').animate({
        right : 0
    })
    return false;
});

//모바일 메뉴 닫기
$('.side_menu').click(function(){
    $('.side_menu_bg').fadeOut();
    $('.h_menu').animate({
        right : '-100%'
    });
    return false
});

//아코디언 열고 닫기
$('.side_menu .d1 .m1').click(function(){
    let d = $(this).siblings('.depth2').css('display')
    if(d =='block'){
        $('.side_menu .d1').removeClass('active');
        $('.side_menu .d1 .depth2').slideUp();
    } else {
        $('.side_menu .d1').removeClass('active');
        $('.side_menu .d1 .depth2').slideUp();
        $(this).parent('.d1').addClass('active');
        $(this).siblings('.depth2').slideDown();
    }
    return false;
});

//gnb 열고 닫기
$('.pc_gnb').mouseover(function(){
    $(this).find('.d2').stop().slideDown();
    $('.d2_row').stop().slideDown();
    return false;
}).mouseout(function(){
    $(this).find('.d2').stop().slideUp();
    $('.d2_row').stop().slideUp();
    return false;
});

//푸터 공지사항
$('.f_txt_list').slick({
    vertical : true,
    arrows : true,
    autoplay : true,
    autoplaySpeed : 2000,
    prevArrow : '.f_prev',
    nextArrow : '.f_next',
    speed : 1000,
    infinite: true,
});