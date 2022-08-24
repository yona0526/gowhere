$(document).ready(function() {

    $(".gnb_sub-mob").hide();
    $(".gnb-mobile>li").click(function() {
        $(this).children(".gnb_sub-mob").slideToggle();
        $(this).toggleClass("mob_gnb_on");
    });




    $(".menu").hide();
    $(".btn_menu").click(function() {
        $(".menu").slideToggle(300);
    });
    $(".btn_menuClose").click(function() {
        $(this).parent(".menu").slideUp(300);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.btn-top').fadeIn();
        } else {
            $('.btn-top').fadeOut();
        }
    });
    $('.btn-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });


    $(".search_modal").hide();
    $(".btn_srch").click(function() {
        $(".search_modal").fadeToggle(300);
    });

    $("h1").click(function() {
        window.location.href = '/vip/';
    });

    $(".btn_user").click(function() {
        window.location.href = '/vip/mypage/index.php';
    });



});