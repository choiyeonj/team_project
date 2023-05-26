/* -------------header_scroll--------------- */
// const header = document.querySelector('.header');
// const toggleClass = 'is-sticky';

// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll > 150) {
//         header.classList.add(toggleClass);
//     } else {
//         header.classList.remove(toggleClass);
//     }
// });
/* -------------aside_lnb--------------- */
const headerInner = document.getElementById('top');

headerInner.addEventListener('mouseover', function () {
    header.style.backgroundColor = '#fff';
    header.style.borderBottom = '1px solid #ccc';
    header.style.transition = 'all 0.3s';
});
headerInner.addEventListener('mouseout', function () {
    header.style.backgroundColor = 'transparent';
    header.style.borderBottom = 'none';
});

/* -------------detail_swiper--------------- */
let detailSwiper = new Swiper('.detail_swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
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

/* -------------scroll_tab--------------- */
class StickyNavigation {
    constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.tab_menu').click(function () {
            self.onTabClick(event, $(this));
        });
        $(window).scroll(() => {
            this.onScroll();
        });
        $(window).resize(() => {
            this.onResize();
        });
    }

    onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({scrollTop: scrollTop}, 600);
    }

    onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
    }

    onResize() {
        if (this.currentId) {
            this.setSliderCss();
        }
    }

    checkTabContainerPosition() {
        let offset = $('.content_wrap').offset().top + $('.content_wrap').height() - this.tabContainerHeight;
        if ($(window).scrollTop() > offset) {
            $('.tab_wrap').addClass('tab_wrap--top');
        } else {
            $('.tab_wrap').removeClass('tab_wrap--top');
        }
    }

    findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.tab_menu').each(function () {
            let id = $(this).attr('href');
            let offsetTop = $(id).offset().top - self.tabContainerHeight;
            let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
            if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
                newCurrentId = id;
                newCurrentTab = $(this);
            }
        });
        if (this.currentId != newCurrentId || this.currentId === null) {
            this.currentId = newCurrentId;
            this.currentTab = newCurrentTab;
            this.setSliderCss();
        }
    }

    setSliderCss() {
        let width = 0;
        let left = 0;
        if (this.currentTab) {
            width = this.currentTab.css('width');
            left = this.currentTab.offset().left;
        }
        $('.tab_bar').css('width', width);
        $('.tab_bar').css('left', left);
    }
}

new StickyNavigation();

/* -------------color_button--------------- */
const butterBtn = document.querySelector('.color_option .butter');
const whiteBtn = document.querySelector('.color_option .white');
const greenBtn = document.querySelector('.color_option .green');
const colorImg = document.getElementById('color_img');

// butterBtn.onclick = function () {
//     colorImg.src = './images/detail1.jpg';
// };
// whiteBtn.onclick = function () {
//     colorImg.src = './images/detail2.jpg';
// };
// greenBtn.onclick = function () {
//     colorImg.src = './images/detail3.jpg';
// };

const colorBtn = document.querySelectorAll('.color_option li');
const colorTxt = document.querySelectorAll('.color_option .span_box .color_txt');
const colorNone = document.querySelectorAll('.color_option .span_box .color_none');

for (let i = 0; i < colorBtn.length; i++) {
    colorBtn[i].onclick = function () {
        colorImg.src = './images/detail' + (i + 1) + '.jpg';
        colorTxt[i].style.display = 'inline-block';
    };

    function handleClick(event) {
        colorBtn.forEach((e) => {
            e.classList.remove('click');
        });
        event.target.classList.add('click');
    }

    colorBtn.forEach((e) => {
        e.addEventListener('click', handleClick);
    });

    // function txtClick(event) {
    //     colorTxt.forEach((e) => {
    //         e.classList.remove('click');
    //     });
    //     event.target.classList.add('click');
    // }

    // colorTxt.forEach((e) => {
    //     e.addEventListener('click', txtClick);
    // });
}
