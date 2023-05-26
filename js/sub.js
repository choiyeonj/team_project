import shoppingList from '../js/data.js';

const bestProduct = document.querySelector('.product_list');

for (let i = 0; i < shoppingList.length; i++) {
    const bestDiv = document.createElement('li');
    bestDiv.setAttribute('class', 'best_box');

    const boxA = document.createElement('a');
    boxA.setAttribute('class', 'products');
    boxA.setAttribute('href', './detail.html');

    const bestImg = document.createElement('img');
    const bestImgTxt = document.createTextNode(shoppingList[i].id);
    bestImg.setAttribute('src', shoppingList[i].src);
    bestImg.appendChild(bestImgTxt);

    const txtBox = document.createElement('div');
    txtBox.setAttribute('class', 'txt_box');

    const bestName = document.createElement('P');
    const bestNameTxt = document.createTextNode(shoppingList[i].name);
    bestName.appendChild(bestNameTxt);

    const bestPrice = document.createElement('p');
    const bestPriceTxt = document.createTextNode(shoppingList[i].price);
    bestPrice.setAttribute('class', 'price');
    bestPrice.appendChild(bestPriceTxt);

    const price = shoppingList[i].price;
    console.log(price.toLocaleString('ko-KO', {style: 'currency', currency: 'KRW'}));
    console.log(price);

    boxA.appendChild(bestImg);
    boxA.appendChild(txtBox);
    txtBox.appendChild(bestName);
    txtBox.appendChild(bestPrice);
    bestDiv.appendChild(boxA);

    bestProduct.appendChild(bestDiv);
}

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

const countPerPage = 5; // 페이지당 데이터 건수
const showPageCnt = 3; // 화면에 보일 페이지 번호 개수

$(function () {
    const todosUrl = './js/data.js';
    axios.get(todosUrl).then((res) => {
        console.log(res.data);
        shoppingList.data;

        // 별도의 서버에 페이지별로 요청하는 게 아니기 때문에
        // 데이터를 한 번에 가져와서 페이지별로 화면에 출력합니다.
        setTable(1);
        setPaging(1);
    });
    // .catch((err) => console.error(err))
    // .then(() => {
    //     // finally
    // });

    $(document).on('click', 'div.paging>div.pages>span', function () {
        if (!$(this).hasClass('active')) {
            $(this).parent().find('span.active').removeClass('active');
            $(this).addClass('active');

            setTable(Number($(this).text()));
        }
    });

    $(document).on('click', 'div.paging>i', function () {
        const totalPage = Math.floor(shoppingList.length / countPerPage) + (shoppingList.length % countPerPage == 0 ? 0 : 1);
        const id = $(this).attr('id');
        console.log(id);

        if (id == 'first_page') {
            setTable(1);
            setPaging(1);
        } else if (id == 'prev_page') {
            let arrPages = [];
            $('div.paging>div.pages>span').each(function (idx, item) {
                arrPages.push(Number($(this).text()));
            });

            const prevPage = _.min(arrPages) - showPageCnt;
            setTable(prevPage);
            setPaging(prevPage);
        } else if (id == 'next_page') {
            let arrPages = [];
            $('div.paging>div.pages>span').each(function (idx, item) {
                arrPages.push(Number($(this).text()));
            });

            const nextPage = _.max(arrPages) + 1;
            setTable(nextPage);
            setPaging(nextPage);
        } else if (id == 'last_page') {
            const lastPage = Math.floor((totalPage - 1) / showPageCnt) * showPageCnt + 1;
            setTable(lastPage);
            setPaging(lastPage);
        }
    });
});

function setTable(pageNum) {
    // filtering data
    const filteredData = _.slice(shoppingList, (pageNum - 1) * countPerPage, pageNum * countPerPage);
    console.log(filteredData);
}

/**
 * 페이징 정보를 세팅합니다.
 * @param {int} pageNum - Page Number
 */
function setPaging(pageNum) {
    const currentPage = pageNum;
    const totalPage = Math.floor(shoppingList.length / countPerPage) + (shoppingList.length % countPerPage == 0 ? 0 : 1);
    console.log(currentPage, totalPage);

    showAllIcon();

    if (currentPage <= showPageCnt) {
        $('#first_page').hide();
        $('#prev_page').hide();
    }
    if (totalPage <= showPageCnt || Math.floor((currentPage - 1) / showPageCnt) * showPageCnt + showPageCnt + 1 > totalPage) {
        $('#next_page').hide();
        $('#last_page').hide();
    }

    let start = Math.floor((currentPage - 1) / showPageCnt) * showPageCnt + 1;
    let sPagesHtml = '';
    for (const end = start + showPageCnt; start < end && start <= totalPage; start++) {
        sPagesHtml += '<span class="' + (start == currentPage ? 'active' : '') + '">' + start + '</span>';
    }
    $('div.paging>div.pages').html(sPagesHtml);
}

function showAllIcon() {
    $('#first_page').show();
    $('#prev_page').show();
    $('#next_page').show();
    $('#last_page').show();
}

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
