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

/*Theme Changer*/
var compHead = $(".comp-head");
var navBar = $(".navbar");
var footBar = $(".footer");
var allLinks = $("a");

var themeList = $("#theme-list");
themeList.on("click", function (event) {
    if (!event || !event.target) {
        return;
    }
    event.preventDefault();
    var themeClass = event.target.firstChild ? event.target.firstChild.getAttribute("class") || event.target.firstElementChild.className : '';
    document.body.className = themeClass;
    
    switch(themeClass){
        case "switch-theme theme-1":
            compHead.css('background-color','#D83F87');
            compHead.css('color','#FFFFFF');
            navBar.css('background-color','#D83F87');
            navBar.css('color','#FFFFFF');
            footBar.css('background-color','#D83F87');
            footBar.css('color','#FFFFFF');
            allLinks.css('color','#FFFFFF');
            break;

        case "switch-theme theme-2":
            compHead.css('background-color','#53900F');
            compHead.css('color','#000000');
            navBar.css('background-color','#53900F');
            navBar.css('color','#FFFFFF');
            footBar.css('background-color','#53900F');
            footBar.css('color','#000000');
            allLinks.css('color','#000000');
            break;

        case "switch-theme theme-3":
            compHead.css('background-color','#17252A');
            compHead.css('color','#FFFFFF');
            navBar.css('background-color','#17252A');
            navBar.css('color','#FFFFFF');
            footBar.css('background-color','#17252A');
            footBar.css('color','#FFFFFF');
            allLinks.css('color','#FFFFFF');
            break;

        case "switch-theme theme-4":
            compHead.css('background-color','#1F2833');
            compHead.css('color','#FFFFFF');
            navBar.css('background-color','#1F2833');
            navBar.css('color','#FFFFFF');
            footBar.css('background-color','#1F2833');
            footBar.css('color','#FFFFFF');
            allLinks.css('color','#FFFFFF');
            break;

        default:
            compHead.css('background-color','#DEB887');
            compHead.css('color','#000000');
            navBar.css('background-color','#DEB887');
            navBar.css('color','#000000');
            footBar.css('background-color','#DEB887');
            footBar.css('color','#000000');
            allLinks.css('color','#000000');
            break;

    }
   });
// var s1 = $('#color1')
// s1.on("click", function (event) {
//     if (!event || !event.target) {
//         return;
//     }
//     event.preventDefault();
//     $('body').css('background', '#84CEEB');
//     s1.css('border-color','green');
//     s1.css('box-shadow-color','green');
// });

// var s1 = $('#color2')
// s1.on("click", function (event) {
//     if (!event || !event.target) {
//         return;
//     }
//     event.preventDefault();
//     $('body').css('background', '#000000');
//     s1.css('border-color','green');
//     s1.css('box-shadow-color','green');
// });
/*Slick Carousel*/

$("#thoughts .slick").slick({
    autoplay: true,
    // fade: true,
    autoplaySpeed: 5000,
    //dots: true,
    arrows: true,
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
                arrows: true
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