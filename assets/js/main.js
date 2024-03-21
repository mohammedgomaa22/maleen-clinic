// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';
// import 'swiper/css/autoplay';
// import 'swiper/css/controller';
// import 'swiper/css/effect-cards';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/grid';
// import 'swiper/css/manipulation';


// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();
// ***************************************************


// Chose nav active
const navActive = () => {
    const links = document.querySelectorAll("[nav-active]");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            // Delete Class
            links.forEach((link) => { link.classList.remove("nav-active"); });
            // Add Class
            link.classList.add("nav-active");
        })
    })
};
navActive();


// Swiper Landing
var swiperLanding = new Swiper(".landingSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Swiper before-after
var swiperBeforeAfter = new Swiper(".beforeAfterSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
        breakpoints: {
            769: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    
    
    // Swiper Team
    var swiperTeam = new Swiper(".teamSwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    
    
    // Swiper Feed
    var swiper = new Swiper(".feedSwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // ***************************************************
    
    
// function sendMessToWhatsapp() {
//     let params = {
//         name: document.getElementById("name").value,
//         phone: document.getElementById("phone").value,
//         service: document.getElementById("service").value,
//         teeth: document.getElementById("teeth").value,
//         leather: document.getElementById("leather").value,
//         beautifying: document.getElementById("beautifying").value,
//     };
//     // ------------


//     service.addEventListener("change", () => {

//         params.service === "teeth" ? teeth.style.display = "block" : teeth.style.display = "none";
//         params.service === "leather" ? leather.style.display = "block" : leather.style.display = "none";
//         params.service === "beautifying" ? beautifying.style.display = "block" : beautifying.style.display = "none";

//     });

//     if (params.service === "teeth" && params.service === "leather" && params.service === "beautifying") {

//         if (params.name != "" && params.phone != "" && params.teeth != "" && params.leather != "" && params.beautifying != "") {
            
//             var url = "https://wa.me/" + "+966502055577" + "?text="
            
//             + "أريد الاستفسار عن حجز موعد" + "%0a"
//             + "الاسم: " + params.name + "%0a"
//             + "رقم الهاتف: " + params.phone + "%0a"
                
//             window.open(url, '_blank').focus();
//         } else {
//             alert("يجب ملئ جميع البيانات");
//         }
        
//     } else {
        
//         if (params.name != "" && params.phone != "") {
            
//             var url = "https://wa.me/" + "+966502055577" + "?text="
            
//             + "أريد الاستفسار عن حجز موعد" + "%0a"
//             + "الاسم: " + params.name + "%0a"
//             + "رقم الهاتف: " + params.phone + "%0a"
                
//             window.open(url, '_blank').focus();
//         } else {
//             alert("يجب ملئ جميع البيانات");
//         }
//     }

// };

// function chooseServices() {
    
//     let params = {
//         name: document.getElementById("name").value,
//         phone: document.getElementById("phone").value,
//         service: document.getElementById("service").value,
//         teeth: document.getElementById("teeth").value,
//         leather: document.getElementById("leather").value,
//         beautifying: document.getElementById("beautifying").value,
//     };
//     // ------------


//     service.addEventListener("change", () => {

//         service.value === "teeth" ? teeth.style.display = "block" : teeth.style.display = "none";
//         service.value === "leather" ? leather.style.display = "block" : leather.style.display = "none";
//         service.value === "beautifying" ? beautifying.style.display = "block" : beautifying.style.display = "none";

//         console.log(service.value);
//         });
    

// }
// chooseServices();

