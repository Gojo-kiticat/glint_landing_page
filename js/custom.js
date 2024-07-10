$(document).ready(function(){
    $('.nav_menu').click(function(){
        $('.menu_block').fadeIn(0);
        $('.menu_block').animate({right:'0 !important'},300);
    });
});