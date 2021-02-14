'use strict';
// 1. получите все кнопки и сохраните в переменную

// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick
let btn = document.querySelectorAll('button');
btn.forEach(function (element){
    element.addEventListener('click', handleClick);
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
//  */
function handleClick(clickedButtonEvent) {
    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    // const cardNode = ;
    const cardNode = clickedButtonEvent.target.parentNode;

    // 3. создайте литерал объекта со следующими свойствами:
    // const card = {
    //     wrap: , // здесь элемент с классом .product
    //     img: , // здесь картинка внутри .product
    //     productName: , // здесь .productName, который внутри .product
    //     button: , // здесь button, который внутри .product
    const card = {
    wrap: cardNode,
    img: cardNode.querySelector('img'),
    productName: cardNode.querySelector('.productName'),
    button: cardNode.querySelector('button')
    }

    // 4. получаем текст на кнопке, которая внутри .product
    let btnText = clickedButtonEvent.target.innerText;

    //     if () { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
//         // 4.2 если да, то передаем объект card в функцию showMoreText
//         showMoreText(card);
//     } else if () { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
//         // 4.4 если да, то передаем объект card в функцию hideMoreText
//         hideMoreText(card);
//     }
// }
    if(btnText === "Подробнее"){
        showMoreText(card);
    }
    else if (btnText === "Отмена"){
        hideMoreText(card);
    }
}

// /**
//  * Функция скрывает текст с описанием товара.
//  * @param {Object} card
//  * @param {HTMLDivElement} card.wrap
//  * @param {HTMLImageElement} card.img
//  * @param {HTMLDivElement} card.productName
//  * @param {HTMLButtonElement} card.button
//  */
function hideMoreText(card) {
    // 5. картинке внутри .product ставим стиль display: block
    card.img.style.display = 'block';

    // .insertAdjacentHTML(afterend, `<div>${newNext}</div>`)
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    card.productName.nextElementSibling.style.display = 'none'

    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.button.innerText = 'Подробнее';
}
//
// /**
//  * Функция показывает текст с описанием товара.
//  * @param {Object} card
//  * @param {HTMLDivElement} card.wrap
//  * @param {HTMLImageElement} card.img
//  * @param {HTMLDivElement} card.productName
//  * @param {HTMLButtonElement} card.button
//  */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    card.img.style.display = 'none';
    // 6.1 сохраняем произвольный текст в переменную
    let newNext = 'куку?';

    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    // card.productName.insertAdjacentHTML(`<div>${newNext}</div>`)
    card.productName.insertAdjacentHTML("afterend", `<div class="desc">${newNext}</div>`)

    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    card.button.innerText = 'Отмена';
}