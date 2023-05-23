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

/* -------------instagram--------------- */
//롤링 배너 복제본 생성
let roller = document.querySelector('.roller');
roller.id = 'roller1';

let clone = roller.cloneNode(true);
clone.id = 'roller2';
document.querySelector('.insta_box').appendChild(clone); //부착

//원본, 복제본 배너 위치 지정
document.querySelector('#roller1').style.left = '0px';
document.querySelector('#roller2').style.left = document.querySelector('.roller ul').offsetWidth + 'px';

//클래스 할당
roller.classList.add('original');
clone.classList.add('clone');

//인터벌 메서드로 애니메이션 생성
let rollerWidth = document.querySelector('.roller ul').offsetWidth; //회전 배너 너비값
let betweenDistance = 1; //이동 크기 - 정수여야 함

//롤링 시작
function startRoller() {
    originalID = window.setInterval(betweenRollCallback, parseInt(1000 / 100), betweenDistance, document.querySelector('#roller1'));
    cloneID = window.setInterval(betweenRollCallback, parseInt(1000 / 100), betweenDistance, document.querySelector('#roller2'));
}

//롤링 정지
function stopRoller() {
    clearInterval(originalID);
    clearInterval(cloneID);
}

//마우스 호버시 롤링이 멈추었다 벗어나면 다시 롤링이 되도록 처리
document.getElementById('roller1').addEventListener('mouseover', () => {
    stopRoller();
});
document.getElementById('roller2').addEventListener('mouseover', () => {
    stopRoller();
});
document.getElementById('roller1').addEventListener('mouseout', () => {
    startRoller();
});
document.getElementById('roller2').addEventListener('mouseout', () => {
    startRoller();
});

//인터벌 애니메이션 함수(공용)
function betweenRollCallback(d, roller) {
    let left = parseInt(roller.style.left);
    roller.style.left = left - d + 'px'; //이동
    //조건부 위치 리셋
    if (rollerWidth + (left - d) <= 0) {
        roller.style.left = rollerWidth + 'px';
    }
}

startRoller(); //롤링 초기화

/* txt_box */
const upBtn = document.querySelector('.info_up');
const downBtn = document.querySelector('.info_down');
const txtBox = document.querySelector('.text_box');

downBtn.addEventListener('click', slideDown);
upBtn.addEventListener('click', slideUp);

function slideDown() {
    upBtn.style.display = 'inline-block';
    downBtn.style.display = 'none';
    txtBox.classList.add('ani');
}

function slideUp() {
    upBtn.style.display = 'none';
    downBtn.style.display = 'inline-block';
    txtBox.classList.remove('ani');
}

/* top_btn */
const topBtn = document.querySelector('.top_btn');
const btn = document.getElementsByClassName('buttons');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        gsap.to(btn, 0.3, {
            opacity: 1,
        });
    } else {
        gsap.to(btn, 0.3, {
            opacity: 0,
        });
    }
}); // window_scroll_event

topBtn.addEventListener('click', () => {
    gsap.to(window, 0.5, {
        scrollTo: 0,
    });
});
