// var depth1Li = document.querySelectorAll('.company-info .depth1 > li')
// for (let i in depth1Li){
//     depth1Li[i].firstElementChild.addEventListener('click', function(e){
//         e.preventDefault()
//         // this.nextElementSibling.style.display = "block"
//         // var disp = this.nextElementSibling.style.display
//         // if (disp !== "block"){
//         //     this.nextElementSibling.style.display = "block"
//         // } else {
//         //     this.nextElementSibling.style.display = "none"
//         // }

//          밑에 방식으로 바꿔서 만들 수 있음.
//         // depth1Li[i].className = "on"
//         var licname = depth1Li[i].className
//         if (licname !== "on"){
//             depth1Li[i].className = "on"
//         } else {
//             depth1Li[i].className = ""
//         }
//     })
// }

var lia = $('.company-info .depth1 > li > a')
lia.on('click', function(e){
    e.preventDefault()
    $(this).next().stop().slideToggle()
    // $(this).parent().toggleClass('on')
    // $(this).parent().siblings().removeClass('on')
    $(this).parent().siblings().find('.depth2').slideUp()
})