/* -------------header_scroll--------------- */
const header = document.querySelector('.header');
const toggleClass = 'is-sticky';

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});

/* -------------aside_lnb--------------- */
const menu = document.getElementById('menu_list');
const asideLnb = document.getElementsByClassName('aside');

menu.addEventListener('mouseover', function () {
    header.style.backgroundColor = '#fff';
    header.style.borderBottom = '1px solid #ccc';
    header.style.transition = 'all 0.3s';
});
menu.addEventListener('mouseout', function () {
    header.style.backgroundColor = 'transparent';
    header.style.borderBottom = 'none';
});

/* -------------main_swiper--------------- */
let mainSwiper = new Swiper('.main_swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* -------------new_swiper--------------- */
let newSwiper = new Swiper('.new_swiper', {
    loop: true,
    loopAdditionalSlides: 1,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

/* -------------best_swiper--------------- */
let bestSwiper = new Swiper('.best_swiper', {
    slidesPerView: 'auto',
    loop: true,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
