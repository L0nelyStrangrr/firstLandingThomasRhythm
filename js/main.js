var options = {
    offset: 400
}
var header = new Headhesive('.header', options);

$(document).on('click', '.tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.tab_content').hide(400);
});

$(document).on('click', '.portfolio_tabs_nav-link', function(e){
    e.preventDefault();
    var tabId = $(this).attr('href');
    $(this).addClass('active');
    $(this).parent('li').siblings().find('.portfolio_tabs_nav-link').removeClass('active');
    $(tabId).show(400);
    $(tabId).siblings('.designs').hide(400);
});

$('.testemonials_carousel').slick({
    prevArrow: '<button type="button" class="slick-prev"><span><i class="fa fa-angle-left"</i></span></button>',
    nextArrow: '<button type="button" class="slick-next"><span><i class="fa fa-angle-right"</i></span></button>',
    dots: true
});

$(document).ready(function() {
    $('.section_link').on("click", function(e) {
        e.preventDefault();
        var hrefId = $(this).attr('href'),
            top = $(hrefId).offset().top;

        $('body, html').animate({scrollTop: top}, 1200);    
    });
});
    