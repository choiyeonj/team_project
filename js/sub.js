import shoppingList from '../js/data.js';

/* -------------header_scroll--------------- */
const header = document.getElementById('header');
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

/* pagenation */

let currentPage = 1;
const itemsPerPage = 16; // 한 페이지에 표시할 항목의 수
const ShopSelector = document.querySelector('#shop_selector option');
const Selector = document.querySelector('#shop_selector');

Selector.addEventListener('change', (e) => {
    if (e.target.value == 0) {
        ProductSortUp();
    } else if (e.target.value == 1) {
        ProductSortDown();
    } /* else if (e.target.value == '10만원 이하') {
        ProductFilter();
    } */ else if (e.target.value == 3) {
        ProductABC();
    }
});

function ProductABC(bestProduct, page) {
    const $mainContainer = $('.product_list');
    $mainContainer.empty(); // 현재 페이지의 내용을 지웁니다.

    const start = (page - 1) * itemsPerPage; // 시작 인덱스
    const end = start + itemsPerPage; // 끝 인덱스

    // 시작과 끝 인덱스 사이의 데이터만 가져옵니다.
    const pageItems = bestProduct.slice(start, end);

    for (let i = 0; i < pageItems.length; i++) {
        shoppingList.sort(function compare(a, b) {
            if (a.anme < b.anme) return -1;
            else if (a.anme == b.anme) return 0;
            else return 1;
        });
        const product = pageItems[i];
        let $mainBox = $(`<a href="detail.html?id=${product.id}" class="main_box"></a>`);

        $mainBox.append(`<img src="${product.src}" alt="">`);

        let $textBox = $('<div class="pro_txt_box"></div>');
        $textBox.append(`<p class="product_name">${product.name}</p>`);
        $textBox.append(`<p class="product_price">${product.price}원</p>`);

        $mainBox.append($textBox);

        $mainContainer.append($mainBox);
    }
}
ProductABC(shoppingList, currentPage);

function ProductSortUp(bestProduct, page) {
    const $mainContainer = $('.product_list');
    $mainContainer.empty(); // 현재 페이지의 내용을 지웁니다.

    const start = (page - 1) * itemsPerPage; // 시작 인덱스
    const end = start + itemsPerPage; // 끝 인덱스

    // 시작과 끝 인덱스 사이의 데이터만 가져옵니다.
    const pageItems = bestProduct.slice(start, end);
    console.log(shoppingList);

    for (let i = 0; i < pageItems.length; i++) {
        shoppingList.sort(function compare(a, b) {
            return a.price - b.price;
        });
        const product = pageItems[i];
        let $mainBox = $(`<a href="detail.html?id=${product.id}" class="main_box"></a>`);

        $mainBox.append(`<img src="${product.src}" alt="">`);

        let $textBox = $('<div class="pro_txt_box"></div>');
        $textBox.append(`<p class="product_name">${product.name}</p>`);
        $textBox.append(`<p class="product_price">${product.price}원</p>`);

        $mainBox.append($textBox);

        $mainContainer.append($mainBox);
    }
}
ProductSortUp(shoppingList, currentPage);

function ProductSortDown(bestProduct, page) {
    const $mainContainer = $('.product_list');
    $mainContainer.empty(); // 현재 페이지의 내용을 지웁니다.

    const start = (page - 1) * itemsPerPage; // 시작 인덱스
    const end = start + itemsPerPage; // 끝 인덱스

    // 시작과 끝 인덱스 사이의 데이터만 가져옵니다.
    const pageItems = bestProduct.slice(start, end);
    console.log(shoppingList);

    for (let i = 0; i < pageItems.length; i++) {
        shoppingList.sort(function compare(a, b) {
            return b.price - a.price;
        });
        const product = pageItems[i];
        let $mainBox = $(`<a href="detail.html?id=${product.id}" class="main_box"></a>`);

        $mainBox.append(`<img src="${product.src}" alt="">`);

        let $textBox = $('<div class="pro_txt_box"></div>');
        $textBox.append(`<p class="product_name">${product.name}</p>`);
        $textBox.append(`<p class="product_price">${product.price}원</p>`);

        $mainBox.append($textBox);

        $mainContainer.append($mainBox);
    }
}
ProductSortDown(shoppingList, currentPage);

// 가장 첫 페이지와 마지막 페이지 번호를 변수에 할당합니다.
const firstPage = 1;
const lastPage = Math.ceil(shoppingList.length / itemsPerPage);

// 페이지 버튼 클릭 이벤트
$('.paging > div').click(function () {
    const $this = $(this);
    const buttonText = $this.text();

    $('.paging > div').removeClass('active');

    switch (buttonText) {
        case '<<':
            currentPage = firstPage;
            break;
        case '<':
            if (currentPage > firstPage) {
                // 현재 페이지가 첫 페이지보다 크면
                currentPage--;
            }
            break;
        case '>':
            if (currentPage < lastPage) {
                // 현재 페이지가 마지막 페이지보다 작으면
                currentPage++;
            }
            break;
        case '>>':
            currentPage = lastPage;
            break;
        default:
            const pageNo = parseInt(buttonText, 10);
            if (!isNaN(pageNo)) {
                currentPage = pageNo;
            }
    }
    $('.paging > div')
        .eq(currentPage + 1)
        .addClass('active');
    ProductABC(shoppingList, currentPage);
});

/* history_btn */
// let delBtn = $('.delet_btn');
//const history = document.querySelector('.his_box ul li a');

// delBtn.each(function () {
//     let $this = $(this);

//     $this.on('click', function (e) {
//         e.preventDefault();
//         $(this).toggleClass('active-' + 3);
//     });
// });

const hisBtn = document.querySelector('.history_btn');
const hisList = document.querySelector('.shop_history');

hisBtn.addEventListener('click', openHistory);
function openHistory() {
    hisList.style.display = 'block';
}

/* top_btn */
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

topBtn.addEventListener('click', () => {
    gsap.to(window, 0.5, {
        scrollTo: 0,
    });
});
