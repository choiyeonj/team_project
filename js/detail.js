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

/* -------------card_benefit--------------- */
const modalBtn = document.querySelector('.card_benefit > span');
const cardModal = document.querySelector('.card_benefit .card_modal');
const closeModal = document.querySelector('.card_modal .modal_wrap > i');
const closeModal2 = document.querySelector('.card_modal .modal_wrap .modal_btn > p');

modalBtn.onclick = function () {
    cardModal.style.visibility = 'visible';
};
closeModal.onclick = function () {
    cardModal.style.visibility = 'hidden';
};
closeModal2.onclick = function () {
    cardModal.style.visibility = 'hidden';
};

/* -------------price_count--------------- */
let price = document.querySelector('.total_price .it_pay');
let productPrice = price.dataset.price;
let totalPrice = price.innerHTML.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

price.innerHTML = totalPrice;

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resultElement = document.getElementById('result');
let totalNumber = resultElement.innerHTML;

plusBtn.addEventListener('click', plusCount);
minusBtn.addEventListener('click', minusCount);

function plusCount() {
    totalNumber = parseInt(totalNumber) + 1;
    resultElement.innerHTML = totalNumber;
    let setPrice = totalNumber * productPrice;
    price.innerHTML = setPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    console.log(totalNumber);
    console.log(setPrice);

    if (totalNumber < 1) {
        alert('수량은 1개 이상 입력해 주십시오.');
    } else if (totalNumber > 10) {
        alert('죄송합니다. 재고가 부족합니다.');
    }
    return setPrice;
}
function minusCount() {
    totalNumber = parseInt(totalNumber) - 1;
    resultElement.innerHTML = totalNumber;
    let setPrice = totalNumber * productPrice;
    price.innerHTML = setPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    console.log(totalNumber);
    console.log(setPrice);

    if (totalNumber < 1) {
        alert('수량은 1개 이상 입력해 주십시오.');
    } else if (totalNumber > 10) {
        alert('죄송합니다. 재고가 부족합니다.');
    }

    return setPrice;
}

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

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        gsap.to(topBtn, 0.3, {
            opacity: 1,
        });
    } else {
        gsap.to(topBtn, 0.3, {
            opacity: 0,
        });
    }
}); // window_scroll_event

topBtn.addEventListener('click', () => {
    gsap.to(window, 0.5, {
        scrollTo: 0,
    });
});
const hisBtn = document.querySelector('.history_btn');
const hisList = document.querySelector('.shop_history');
const hisBlock = 'is-click';

hisBtn.addEventListener('click', openHistory);

function openHistory() {
    hisList.classList.add(hisBlock);
}

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

const reviewBtn = document.querySelector('.review_btn');
const reviewForm = document.querySelector('.review_form');

reviewBtn.addEventListener('click', function () {
    reviewForm.style.display = 'block';
    inputName.focus();
});

const inputBar = document.getElementById('comment-input');
const inputName = document.getElementById('name-input');
const selectOption = document.getElementById('list_option');
const inputPhoto = document.getElementById('fileUpload');
const rootDiv = document.getElementById('comments');
const btn = document.getElementById('submit');
const ratingStar = document.querySelector('#star .rate_radio');
const mainCommentCount = document.getElementById('count'); //맨위 댓글 숫자 세는거.

//타임스템프 만들기
function generateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function deleteComments(event) {
    const btn = event.target;
    const list = btn.parentNode; //commentList
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
    const inputValue = document.createElement('p');
    const showTime = document.createElement('div');
    const countSpan = document.createElement('span');
    const commentList = document.createElement('div');
    const starValue = document.createElement('div');
    const selectValue = document.createElement('div');
    const topReview = document.createElement('div');
    const bottomReview = document.createElement('div');
    const photoValue = document.createElement('img');
    const topWrap = document.createElement('div');

    //삭제버튼 만들기
    const delBtn = document.createElement('button');
    delBtn.className = 'deleteComment';
    delBtn.innerHTML = '삭제';

    commentList.className = 'eachComment';
    topReview.className = 'top_review';
    topWrap.className = 'star_wrap';
    userName.className = 'name';
    starValue.className = 'rating_value';
    selectValue.className = 'option';
    bottomReview.className = 'bottom_review';
    inputValue.className = 'inputValue';
    photoValue.id = 'previewImg';
    showTime.className = 'time';

    //유저네임가져오기
    userName.innerHTML = inputName.value;
    starValue.innerHTML = ratingStar.value;
    //console.log(ratingStar);
    selectValue.innerHTML = selectOption.value;

    //입력값 넘기기
    inputValue.innerText = comment;

    //타임스템프찍기
    showTime.innerHTML = generateTime();
    countSpan.innerHTML = 0;

    //리뷰 작성
    topWrap.appendChild(starValue);
    topWrap.appendChild(userName);
    topReview.appendChild(topWrap);
    topReview.appendChild(showTime);
    bottomReview.appendChild(inputValue);
    bottomReview.appendChild(photoValue);

    commentList.appendChild(topReview);
    commentList.appendChild(selectValue);
    commentList.appendChild(bottomReview);
    commentList.appendChild(delBtn);

    rootDiv.prepend(commentList);

    delBtn.addEventListener('click', deleteComments);
    //console.log(rootDiv);

    const handleFiles = (e) => {
        const selectedFile = [...inputPhoto.files];
        const fileReader = new FileReader();

        fileReader.readAsDataURL(selectedFile[0]);

        fileReader.onload = function () {
            photoValue.src = fileReader.result;
        };
    };
    inputPhoto.addEventListener('change', handleFiles);
}

//버튼만들기+입력값 전달
function pressBtn() {
    const currentVal = inputBar.value;
    const nameVal = inputName.value;

    if (!nameVal.length) {
        alert('성함을 입력해주세요.');
    } else {
        showComment(currentVal);
        mainCommentCount.innerHTML++;
        inputBar.value = '';
        inputName.value = '';
        reviewForm.style.display = 'none';
    }
}

btn.onclick = pressBtn;

/* -------------cs--------------- */
// const csInput = document.querySelector('#cs-input');
// const csRoot = document.querySelector('#cs-comments');
// const csBtn = document.querySelector('#cs-submit');

// //타임스템프 만들기
// function generateTime() {
//     const date = new Date();
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
// }

// //유저이름 발생기
// //유저이름은 8글자로 제한.
// function generateUserName() {
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     var makeUsername = '';
//     for (let i = 0; i < 4; i++) {
//         let index = Math.floor(Math.random(10) * alphabet.length);
//         makeUsername += alphabet[index];
//     }
//     for (let j = 0; j < 4; j++) {
//         makeUsername += '*';
//     }
//     return makeUsername;
// }

// function deleteComments(event) {
//     const btn = event.target;
//     csRoot.removeChild(list);
//     //메인댓글 카운트 줄이기.
//     if (mainCommentCount.innerHTML <= '0') {
//         mainCommentCount.innerHTML = 0;
//     } else {
//         mainCommentCount.innerHTML--;
//     }
// }

// //댓글보여주기
// function csShow(comment) {
//     const commentName = document.createElement('div');
//     const inputValue = document.createElement('span');
//     const showTime = document.createElement('div');
//     const countSpan = document.createElement('span');
//     const commentList = document.createElement('div'); //이놈이 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴.
//     //삭제버튼 만들기
//     const delBtn = document.createElement('button');
//     delBtn.className = 'csDelete';
//     delBtn.innerHTML = '삭제';
//     commentList.className = 'csEachComment';
//     commentName.className = 'csName';
//     inputValue.className = 'csValue';
//     showTime.className = 'csTime';
//     //유저네임가져오기
//     commentName.innerHTML = generateUserName();
//     commentName.appendChild(delBtn);
//     //입력값 넘기기
//     inputValue.innerText = comment;
//     //타임스템프찍기
//     showTime.innerHTML = generateTime();
//     countSpan.innerHTML = 0;

//     //댓글뿌려주기
//     commentList.appendChild(userName);
//     commentList.appendChild(inputValue);
//     commentList.appendChild(showTime);

//     rootDiv.prepend(commentList);

//     delBtn.addEventListener('click', deleteComments);
//     console.dir(rootDiv);
// }

// //버튼만들기+입력값 전달
// function csPressBtn() {
//     const currentVal = csInput.value;

//     if (!currentVal.length) {
//         alert('댓글을 입력해주세요!!');
//     } else {
//         csShow(currentVal);
//         csInput.value = '';
//     }
// }

// csBtn.onclick = csPressBtn;
