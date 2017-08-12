var windowsize = $(window).width();
console.log(windowsize);

if(windowsize > 959){
    $(".small-picture").remove();
    $(".web").hover(function(){
    $(".service-pic").show();
    $(".service-pic").prepend('<img class="img1" src="images/websites.png" class="img-responsive" style="background-repeat:no-repeat"/>');
    $(".bkg").css("background-color", "#F48FB1");
    }, function(){
        $(".img1").remove();
        $(".bkg").css("background-color", "#FF5722");
    });

    $(".mob").hover(function(){
    $(".service-pic").show();
    $(".service-pic").prepend('<img class="img2" src="images/mobui.png" class="img-responsive" style="background-repeat:no-repeat"/>');
    $(".bkg").css("background-color", "#F48FB1");
    }, function(){
        $(".img2").remove();
        $(".bkg").css("background-color", "#FF5722");
});
    
}else{
    $(".picture").remove();
    $("img").css("width", "100%")
    $(".small-picture").css("width", "160px");
    $(".description").css("margin-top", "40px");
    $(".small-picture").css("display", "block");
    $(".small-picture").css("margin", "auto");
    
}

