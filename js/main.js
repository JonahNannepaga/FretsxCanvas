$.getScript("js/art.js");
$.getScript("js/thoughts.js");
$.getScript("js/music.js");


/*Scroll Functionality*/

var navList = $("#scroll");
navList.on("click", function (event) {
    if (!event || !event.target) {
        return;
    }
    event.preventDefault();
    var linkid = event.target.getAttribute("href");
    var scrollToBlock = document.querySelector(linkid);
    const pageTop = scrollToBlock ? scrollToBlock.offsetTop : 0;
    // console.log("pagetop" + pageTop);
    window.scrollTo({
        left: 0,
        top: pageTop,
        behavior: "smooth"
    });
});

/*Scroll toTop*/
// var scrollTop = $('#logo');
// event.preventDefault();
// scrollTop.addEventListener("click", function (event) {
//     if (!event || !event.target) {
//         return;
//     }
//     // event.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     })
// });

/*Slick Carousel*/

$("#thoughts .slick").slick({
    autoplay: true,
    // fade: true,
    autoplaySpeed: 5000,
    //dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    //speed: 4000,
    autoplay: true,
    // mobileFirst: true,
    prevArrow: '<span class="prev"><i class="fa fa-angle-left fa-4x" aria-hidden="true"></i></span>',
    nextArrow: '<span class="next"><i class="fa fa-angle-right fa-4x" aria-hidden="true"></i></span>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});