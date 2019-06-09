$.scrollify({
    section : ".fullpage",
    sectionName : "section-name",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset : 0,
    scrollbars: false,
    updateHash: true,
    before:function(index, context) {
        $('.side-nav ul .active').removeClass('active');
        $('.side-nav ul li:nth-child(' + (index + 1) + ')').addClass('active');
    },
});

let goToAbout = () => {
    window.location.replace("about.html");
}

let goToUnderCons = () => {
    window.location.replace("underconstruction.html");
}