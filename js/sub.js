import shoppingList from '../js/data.js';

const bestProduct = document.querySelector('.product_list');

for (let j = 0; j <= 16; i++) {
    for (let i = 0; i < shoppingList.length; i++) {
        const bestDiv = document.createElement('div');
        bestDiv.setAttribute('class', 'best_box');

        const bestImg = document.createElement('img');
        bestImg.setAttribute('src', shoppingList[i].src);

        bestDiv.appendChild(bestImg);

        const bestName = document.createElement('P');
        const bestNameTxt = document.createTextNode(shoppingList[i].name);
        bestName.appendChild(bestNameTxt);

        const bestPrice = document.createElement('p');
        const bestPriceTxt = document.createTextNode(shoppingList[i].price);
        bestPrice.appendChild(bestPriceTxt);

        bestDiv.appendChild(bestName);
        bestDiv.appendChild(bestPrice);

        bestProduct.appendChild(bestDiv);
    }
}
