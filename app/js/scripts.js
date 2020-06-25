$(document).ready(function() {

    $('.main_background_slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
    });


    $('.slider_right').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
    });

    $('.slider_left').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    
    $('.arrow_right').on('click', function() {
        $('.slider_right').slick('slickNext');
        $('.slider_left').slick('slickNext');
        $('.main_background_slider').slick('slickNext');
        // selected_item.next().addClass('opacity'); 
       
    
      });

    $('.slider_right').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    let current = currentSlide;
    let next = nextSlide;
    let selected_item = $('.slider_right').find('.opacity');
    selected_item.removeClass('opacity');
    $('.slider_right_item').eq(current + 2).removeClass('opacity');
    $('.slider_right_item').eq(next + 2).addClass('opacity');

    });

      
    $('.arrow_left').on('click', function() {
        $('.slider_right').slick('slickPrev');
        $('.slider_left').slick('slickPrev');
        $('.main_background_slider').slick('slickPrev');
        // let selected_item = $('.slider_right').find('.opacity');
        // selected_item.removeClass('opacity');
        // selected_item.prev().addClass('opacity'); 
    });

      
    $('.tagged_left').on('click', function(){
        $('.triangle').toggleClass('hidden');
        $('#left_tagget_content').toggleClass('hidden');
       
    });

    $(document).mouseup(function (e) {
        var container = $("#left_tagget_content");
        if (container.has(e.target).length === 0){
            container.addClass('hidden');
            $('.triangle').addClass('hidden');
        }
    });

    $('.check_box').on('click', function() {
        $('.cheked').toggleClass('hidden');
    })
    

    $('.call').on('click', function() {
        $('.callback_form').toggleClass('no_display');
    });

    $('.back_call').on('click', function() {
        $('.callback_form').toggleClass('no_display');
    });

    $('.close_icon_wrap').on('click', function() {
        $('.callback_form').toggleClass('no_display');
    })
    

    $('.hamburger_menu').on('click', function() {
        $('.hamburger_menu').toggleClass('hamburger_menu_show');
        $('.mobile_menu_wrap').toggleClass('mobile_menu_show');
        $('body').toggleClass('overflow-hidden');
    })

    var header = $('header'),
	scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
    
        if ( scrolled > 1 && scrolled > scrollPrev ) {
            header.addClass('out');
        } else {
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });
});











