/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// ================================================================================================

  
// ==============================================================================================

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// =================== readmore ===============
function toggleReadMore() {
    var moreContent = document.getElementById("moreContent");
    var btn = document.getElementById("readMoreBtn");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        moreContent.style.display = "none";
        btn.innerText = "Read More";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("moreContent").style.display = "none";
});

// -------------------------------------------------------------------------------------------------------------

function toggleReadMore1() {
    var moreContent = document.getElementById("moreContent1");
    var btn = document.getElementById("readMoreBtn1");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        moreContent.style.display = "none";
        btn.innerText = "Read More";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("moreContent1").style.display = "none";
});

// -------------------------------------------------------------------------------------------------------------

function toggleReadMore2() {
    var moreContent = document.getElementById("moreContent2");
    var btn = document.getElementById("readMoreBtn2");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        moreContent.style.display = "none";
        btn.innerText = "Read More";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("moreContent2").style.display = "none";
});

// -------------------------------------------------------------------------------------------------------------

function toggleReadMore3() {
    var moreContent = document.getElementById("moreContent3");
    var btn = document.getElementById("readMoreBtn3");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        moreContent.style.display = "none";
        btn.innerText = "Read More";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("moreContent3").style.display = "none";
});


ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });