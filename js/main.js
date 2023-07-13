
//메인1 슬라이드(페이드인)
$('.slide_list').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: 'm1_prev',
    nextArrow: 'm1_next',
});

//메인2 슬라이드(페이드인)
$('.right_list').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false,
    dots: true
});

//메인4 슬릭
$('.slick_inner').slick({
    infinite: true,
    slidesToShow: 2,
    mobileFirst: true,
    arrows : true,
    prevArrow: 'm4_prev',
    nextArrow: 'm4_next',
    responsive : [
        {
            breakpoint : 900,
            settings : {
                slidesToShow : 3
            }
        },
        {
            breakpoint : 1100,
            settings : {
                slidesToShow : 4,
            }
        }
    ]
});

//메인5 place_drop 열고 닫기
$('.place').click(function(){
    let placeDrop = $(this).siblings('.place_drop');
    if(placeDrop.css('display') === 'none'){
        placeDrop.css('display','block')
    } else{
        placeDrop.css('display','none');
    }
    return false;
});