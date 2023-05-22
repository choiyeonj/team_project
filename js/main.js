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
const headerInner = document.getElementById('top');
const asideLnb = document.getElementsByClassName('aside');

headerInner.addEventListener('mouseover', function () {
    header.style.backgroundColor = '#fff';
    header.style.borderBottom = '1px solid #ccc';
    header.style.transition = 'all 0.3s';
});
headerInner.addEventListener('mouseout', function () {
    header.style.backgroundColor = 'transparent';
    header.style.borderBottom = 'none';
});

/* -------------main_swiper--------------- */
let mainSwiper = new Swiper('.main_swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
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

/* -------------issue_swiper--------------- */
let issueSwiper = new Swiper('.issue_swiper', {
    pagination: {
        el: '.issue_swiper .slide_tit',
        clickable: 'true',
        type: 'bullets',
        renderBullet: (index, className) => {
            return `<li class=${className}></li>`;
        },
    },
});

const livingMain = document.querySelector('.living_main li img');
const livingImg = document.querySelectorAll('.living_img li img');

const diningMain = document.querySelector('.dining_main li img');
const diningImg = document.querySelectorAll('.dining_img li img');

const bedMain = document.querySelector('.bed_main li img');
const bedImg = document.querySelectorAll('.bed_img li img');

const tableMain = document.querySelector('.table_main li img');
const tableImg = document.querySelectorAll('.table_img li img');

for (let i = 0; i < livingImg.length; i++) {
    livingImg[i].onmouseover = function () {
        livingMain.src = './images/issue_living' + (i + 1) + '.png';
    };
    diningImg[i].onmouseover = function () {
        diningMain.src = './images/issue_dining' + (i + 1) + '.png';
    };
    bedImg[i].onmouseover = function () {
        bedMain.src = './images/issue_bed' + (i + 1) + '.png';
    };
    tableImg[i].onmouseover = function () {
        tableMain.src = './images/issue_table' + (i + 1) + '.png';
    };
}
