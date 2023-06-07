$(document).ready(function(){
    $('.header_nav .nav_menu').each(function(){
        $(this).mouseenter(function(){
            $('.header_nav').css('height','295px')
            $('.container').css('top','-210px')
            $('.nav_item .sub_menu').css('display','block')
            $('.nav_item .sub_menu').css('background','rgb(0, 16, 36)')
        })
        $(this).mouseleave(function(){
            $('.header_nav').css('height','85px')
            $('.container').css('top','0px')
            $('.nav_item .sub_menu').css('display','none')
        })
    })

    //main_bg slide 
    var count=1;
    var slide=setInterval(func_slide,3000,'next')
    function func_slide(dir){
        if(dir=='next'){
            $('.slide_list').append($('.slide_list > li:first'))
            count++;
            if(count>3) count=1;
        }else{
            $('.slide_list').prepend($('.slide_list > li:last'))
            count--;
            if(count<1) count=3;
        }
    }
    //main_bg button
    $('.main_next').on('click',function(e){
        e.preventDefault();
        clearInterval(slide)
        if($('.slide').is(':animated')==false){
            $('.slide_list').animate({
                left:'-1920px'
            },800,function(){
                $('.slide_list').append($('.slide_list > li:first'))
                $('.slide_list').css('left','0px')
            })
        }
        $('.main_stop').css('display','none');
        $('.main_play').css('display','inline');
    })
    $('.main_prev').on('click',function(e){
        e.preventDefault();
        clearInterval(slide)
        if($('.slide').is(':animated')==false){
            $('.slide_list').prepend($('.slide_list > li:last'))
            $('.slide_list').css('left','-1920px')
            $('.slide_list').animate({
                left:'0px'
            },800)
        }
        $('.main_stop').css('display','none');
        $('.main_play').css('display','inline');
    })
    $('.main_stop').on('click',function(e){
        e.preventDefault();
        clearInterval(slide);
        $(this).css('display','none');
        $('.main_play').css('display','inline');
    })
    $('.main_play').on('click',function(e){
        e.preventDefault();
        slide=setInterval(func_slide,3000,'next')
        $(this).css('display','none');
        $('.main_stop').css('display','inline');
    })


    //sec02_banner


    //sec02 quick_links / notice
    $('.menu_title > a').on('click',function(e){
        e.preventDefault();
        $('.quick_menu > .menu').removeClass('current');
        $(this).parent().parent().addClass('current');

    })

    $('.notice_title > a').on('click',function(e){
        e.preventDefault();
        $('.notice_main').removeClass('orange');
        $(this).parent().parent().addClass('orange');
    })









    //누르면 페이지 맨 위로 이동하는 버튼
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('.toTop').fadeIn();
        }else{
            $('.toTop').fadeOut();
        }
    });
    $('.toTop').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },400);
        return false;
    })
})