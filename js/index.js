var lia = $('.company-info .depth1 > li > a')
lia.on('click', function(e){
    e.preventDefault()
    $(this).next().stop().slideToggle()
    // $(this).parent().toggleClass('on')
    // $(this).parent().siblings().removeClass('on')
    $(this).parent().siblings().find('.depth2').slideUp()
})

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if(sct>100){
        $('.startorder > button').addClass('on')
    } else {
        $('.startorder > button').removeClass('on')
    }
})

$('.startorder button').on('click', function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop:0},'500');
})