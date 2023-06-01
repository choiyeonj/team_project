/* -------------header_scroll--------------- */
// const rightFixed = document.querySelector('.right_wrap');
// const toggleClass = 'right_fixed';

// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;
//     if (currentScroll > 350) {
//         rightFixed.classList.add(toggleClass);
//     } else {
//         rightFixed.classList.remove(toggleClass);
//     }
// });
/* -------------aside_lnb--------------- */
const headerInner = document.getElementById('header');

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
        $('html, body').animate({scrollTop: scrollTop}, 500);
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
const colorImg = document.getElementById('color_img');
const colorBtn = document.querySelectorAll('.color_option li');
const colorTxt = document.querySelector('.color_option .color_box .color_txt');

for (let i = 0; i < colorBtn.length; i++) {
    colorBtn[i].onclick = function () {
        colorImg.src = './images/detail' + (i + 1) + '.jpg';

        switch (colorBtn[i]) {
            case colorBtn[0]:
                colorTxt.innerHTML = 'ALL BUTTER';
                break;
            case colorBtn[1]:
                colorTxt.innerHTML = 'WHITE & ICE BLUE';
                break;
            case colorBtn[2]:
                colorTxt.innerHTML = 'PEACH & DEEP GREEN';
                break;
        }
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
}

Number.prototype.formatNumber = function () {
    if (this == 0) return 0;

    let regex = /(^[+-]?\d+)(\d)/;

    let nstr = this + '';

    while (regex.test(nstr)) nstr = nstr.replace(regex, '$1' + ',' + '$2');

    return nstr;
};

// String.prototype.format = function () {
//     let num = parseFloat(this);
//     if (isNaN(num)) return '0';

//     return num.format();
// };

// let basicAmount = parseInt('230000');

// const changeQty = document.querySelector('.qty');
// const minus = document.getElementById('minus');
// const plus = document.getElementById('plus');
// let totalPrice = document.getElementById('total_amount');

// changeQty.addEventListener('click', totalQty);

// function totalQty(e) {
//     let min_qty = 1;
//     let this_qty = $('#ct_qty').val() * 1;
//     let max_qty = '200'; // 현재 재고
//     if (e == 'm') {
//         this_qty -= 1;
//         if (this_qty < min_qty) {
//             //alert("최소구매수량 이상만 구매할 수 있습니다.");
//             alert('수량은 1개 이상 입력해 주십시오.');
//             return;
//         }
//     } else if (e == 'p') {
//         this_qty += 1;
//         if (this_qty > max_qty) {
//             alert('죄송합니다. 재고가 부족합니다.');
//             return;
//         }
//     }

//     let show_total_amount = basicAmount * this_qty;
//     //$("#ct_qty_txt").text(this_qty);
//     $('#ct_qty').val(this_qty);
//     $('#it_pay').val(show_total_amount);
//     $('#total_amount').html(show_total_amount.format());
// }

// function change_qty2(t) {
//     //var min_qty = '수량버튼'*1;
//     let min_qty = 1;
//     let this_qty = $('#ct_qty').val() * 1;
//     let max_qty = '200'; // 현재 재고
//     if (t == 'm') {
//         this_qty -= 1;
//         if (this_qty < min_qty) {
//             //alert("최소구매수량 이상만 구매할 수 있습니다.");
//             alert('수량은 1개 이상 입력해 주십시오.');
//             return;
//         }
//     } else if (t == 'p') {
//         this_qty += 1;
//         if (this_qty > max_qty) {
//             alert('죄송합니다. 재고가 부족합니다.');
//             return;
//         }
//     }

//     let show_total_amount = basicAmount * this_qty;
//     //$("#ct_qty_txt").text(this_qty);
//     $('#ct_qty').val(this_qty);
//     $('#it_pay').val(show_total_amount);
//     $('#total_amount').html(show_total_amount.format());
// }

/* -------------delivery_info--------------- */
const accBox = document.getElementsByClassName('panel');
let acc = document.getElementsByClassName('accordion');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        slideUp();

        this.classList.toggle('active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
}
function slideUp() {
    accBox.maxHeight = 0;
}

/* -------------top_btn--------------- */
const topBtn = document.querySelector('.top_btn');
const btns = document.getElementsByClassName('buttons');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        gsap.to(btns, 0.3, {
            opacity: 1,
        });
    } else {
        gsap.to(btns, 0.3, {
            opacity: 0,
        });
    }
}); // window_scroll_event

topBtn.addEventListener('click', () => {
    gsap.to(window, 0.5, {
        scrollTo: 0,
    });
});

/* -------------review--------------- */
let reviewSwiper = new Swiper('.review_swiper', {
    slidesPerView: 5.5,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const inputBar = document.getElementById('comment-input');
const inputName = document.getElementById('name-input');
const rootDiv = document.getElementById('comments');
const btn = document.getElementById('submit');
const ratingStar = document.getElementById('star');
const mainCommentCount = document.getElementById('count'); //맨위 댓글 숫자 세는거.

//타임스템프 만들기
function generateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const wDate = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const time = year + '-' + month + '-' + wDate + ' ' + hour + ':' + min + ':' + sec;
    return time;
}

function deleteComments(event) {
    const btn = event.target;
    const list = btn.parentNode.parentNode; //commentList
    rootDiv.removeChild(list);
    //메인댓글 카운트 줄이기.
    if (mainCommentCount.innerHTML <= '0') {
        mainCommentCount.innerHTML = 0;
    } else {
        mainCommentCount.innerHTML--;
    }
}

//댓글보여주기
function showComment(comment) {
    const userName = document.createElement('div');
    const inputValue = document.createElement('span');
    const showTime = document.createElement('div');
    const countSpan = document.createElement('span');
    const commentList = document.createElement('div');
    //삭제버튼 만들기
    const delBtn = document.createElement('button');
    delBtn.className = 'deleteComment';
    delBtn.innerHTML = '삭제';
    commentList.className = 'eachComment';
    userName.className = 'name';
    inputValue.className = 'inputValue';
    showTime.className = 'time';
    //유저네임가져오기
    userName.innerHTML = inputName.value;
    userName.appendChild(delBtn);
    //입력값 넘기기
    inputValue.innerText = comment;
    //타임스템프찍기
    showTime.innerHTML = generateTime();
    countSpan.innerHTML = 0;

    //댓글뿌려주기
    commentList.appendChild(userName);
    commentList.appendChild(inputValue);
    commentList.appendChild(showTime);
    commentList.appendChild(ratingStar);
    rootDiv.prepend(commentList);

    delBtn.addEventListener('click', deleteComments);
    console.dir(rootDiv);
}

//버튼만들기+입력값 전달
function pressBtn() {
    const currentVal = inputBar.value;
    const nameVal = inputName.value;

    if (!nameVal.length) {
        alert('상품명을 입력해주세요.');
    } else {
        showComment(currentVal);
        mainCommentCount.innerHTML++;
        inputBar.value = '';
        inputName.value = '';
    }
}

btn.onclick = pressBtn;