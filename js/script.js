$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= $('.cover').offset().top){
        //console.log(wScroll + " : " + $('.skill-wrapper').offset().top);
        $('.seperator').addClass('scroll-effect');
    }else
        $('.seperator').removeClass('scroll-effect');
});

$(document).ready(function(){
    $('#menu').click(function(){
        //console.log('menu click ')
        $('.hidden-links').toggleClass('hidden');
        $('.content').toggleClass('hidden')
    });
    $('.clink li a').click(function(){
        $('.hidden-links').toggleClass('hidden');
        $('.content').toggleClass('hidden')
    });
});