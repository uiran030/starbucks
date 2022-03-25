var lia = $('.company-info .depth1 > li > a')
lia.on('click', function(e){
    e.preventDefault()
    $(this).next().stop().slideToggle()
    // $(this).parent().toggleClass('on')
    // $(this).parent().siblings().removeClass('on')
    $(this).parent().siblings().find('.depth2').slideUp()
})