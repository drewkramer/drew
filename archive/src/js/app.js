$(function () {

    var myLazyLoad = new LazyLoad({
        elements_selector: ".lazy"
    });

    //Mobile nav
    $(".Mobile-nav-toggle").click(function () {

        $(".Mobile-nav").toggle();

        $("body").addClass("nav-open");
    });
    
});