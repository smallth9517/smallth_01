
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
    autoPlay: true,
    prevArrow: false,
    nextArrow: false,
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
