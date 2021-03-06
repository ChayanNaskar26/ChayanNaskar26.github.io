$.scrollify({
    section : ".fullpage",
    sectionName : "section-name",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset : 0,
    scrollbars: false,
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

let goToProjects = () => {
    window.location.replace("projects.html");
}

let navigate = (id) => {
    $.scrollify.move(id);
}