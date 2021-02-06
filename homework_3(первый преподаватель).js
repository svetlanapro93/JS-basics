// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 0;
while (i <= 100){
    console.log(i++);
}
// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
let basket = [
    {name: 'banana', price: 5, quantity: 3},
    {name: 'orange', price: 4, quantity: 2},
    {name: 'melon', price: 2, quantity: 1}
    ];
function countBasketPrice () {
    let basketPrice = 0;
    for (let i = 0; i < basket.length; i++){
        basketPrice += basket[i].price * basket[i].quantity;
    }
    return basketPrice;
}
console.log(countBasketPrice())

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//     for(…){// здесь пусто}
for (i = 0; i < 10; console.log(i++)){
}
    // 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
    // x
    // xx
    // xxx
    // xxxx
    // xxxxx
let pr = '';
for (i = 0; i < 20; i++){
 console.log(pr += 'x')
}

