$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    
    $('.welcome').css({
        'transform': 'translate(0px, '+ wScroll /10+'%)'
    });
    
    $('.terminal').css({
        'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
    });
    
    
    $('.content').css({
        'transform' : 'translate(0px, -'+ wScroll /20 +'%)'
    });
    
});