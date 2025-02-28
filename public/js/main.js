
// // Menu
// document.addEventListener("DOMContentLoaded", function () {
//     const bars = document.querySelector(".bars");
//     const body = document.body;
//     const headerMob = document.querySelector(".header_mob");
//     const headerMobTabs = document.querySelectorAll(".mob_link");

//     const toggleMenu = () => {
//         headerMob.classList.toggle("active");
//         bars.classList.toggle("active");
//         body.classList.toggle("no-scroll");
//     };
//     const closeMenu = () => {
//         headerMob.classList.remove("active");
//         bars.classList.remove("active");
//         body.classList.remove("no-scroll");
//     };

//     bars.addEventListener("click", (event) => {
//         event.stopPropagation();
//         toggleMenu();
//     });

//     headerMobTabs.forEach(tab => tab.addEventListener("click", closeMenu));

//     document.addEventListener("click", (event) => {
//         if (!headerMob.contains(event.target) && !bars.contains(event.target)) {
//             closeMenu();
//         }
//     });


//     // Language change
//     const language = document.querySelector(".language");
//     const tabsContainer = document.querySelector(".tabs");
//     const tabs = document.querySelectorAll(".tab");

//     // language.addEventListener("click", function (event) {
//     //     event.stopPropagation();
//     //     tabsContainer.classList.toggle("active");
//     // });

//     tabs.forEach(tab => {
//         tab.addEventListener("click", function (event) {
//             tabs.forEach(t => t.classList.remove("active"));
//             this.classList.add("active");

//             language.textContent = this.textContent;
//             tabsContainer.classList.remove("active");
//             event.stopPropagation();
//         });
//     });

//     document.addEventListener("click", function () {
//         tabsContainer.classList.remove("active");
//     });


//     // portfolio more
//     // document.querySelector('.portfolio_more').addEventListener('click', function () {
//     //     const portfolioImgs = document.querySelectorAll('.portfolio_img');

//     //     portfolioImgs.forEach(img => {
//     //         if (img.classList.contains('none')) {
//     //             img.classList.remove('none');
//     //         }
//     //     });

//     //     this.remove();
//     // });

// });



// // productiveSlide
// var productiveSlide2 = new Swiper(".productiveSlide", {
//     direction: 'vertical',
//     slidesPerView: 2.8,
//     spaceBetween: 90,
//     loop: true, 
//     speed: 4000, 
//     autoplay: {
//         delay: 0, 
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         300: { spaceBetween: 50 },
//         576: { spaceBetween: 90 },
//     },
// });

// // productiveSlide2
// var productiveSlide2 = new Swiper(".productiveSlide2", {
    // slidesPerView: 2.8,
    // spaceBetween: 90,
    // loop: true, 
    // speed: 4000, 
//     autoplay: {
//         delay: 0, 
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         300: { spaceBetween: 50 },
//         576: { spaceBetween: 90 },
//     },
// });


// // testimonialSlide
// var testimonialSlide = new Swiper(".testimonialSlide", {
//     slidesPerView: 2,
//     spaceBetween: 82,
//     loop: true,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     breakpoints: {
        // 300: {
        //     spaceBetween: 30,
        //     slidesPerView: 1,
        // },
        // 776: {
        //     slidesPerView: 1.5,
        //     spaceBetween: 60,
        // },
        // 991: {
        //     slidesPerView: 1.7,
        //     spaceBetween: 60,
        // },
        // 1200: {
        //     slidesPerView: 2,
        //     spaceBetween: 82,
        // },

//     },
// });


// // Imask phone
// // const phone = document.getElementById('phone');
// // const maskOptions = {
// //     mask: '+000 (00) 000-00-00'
// // };
// // const mask = IMask(phone, maskOptions);


// // Aos js
// // AOS.init();
