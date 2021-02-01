// 1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
//     видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product,
//     который принимает параметры name и price, сохраните их как свойства объекта.
//     Также объекты типа Product должны иметь метод make25PercentDiscount, который
// будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
// не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
// объект-прототип (как объект transport в уроке).

// ДЗ5; задание 1, ES5:
// function Product (name, price){
//     this.name = name;
//     this.price = price;
// }
// Product.prototype.make25PercentDiscount = function (){
//     this.price = this.price - (this.price /100 * 25);
// }
// let product1 = new Product('курица', 100);
// product1.make25PercentDiscount();
// console.log(product1);

// ДЗ5; задание 1, ES6:

// class Product{
//     constructor(product, price) {
//         this.product = product;
//         this.price = price;
//     }
//     make25PercentDiscount(){
//     this.price = this.price - (this.price /100 * 25);
//     }
// }
// let product1 = new Product('курица', 100);
// product1.make25PercentDiscount();
// console.log(product1);


// 1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3
// примеры наследования -> механика наследования),
//     а) конструктор Post, который принимает параметры author, text, date и сохраняет их как
// свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст
// и записывать его в свойство text объекта.
//     б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте
// эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost
// должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost
// методы из Post.
//     Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
// highlighted значение true.

// ДЗ5; задание 1, ES5:

// function Post(author, text, date){
//     this.author = author;
//     this.text = text;
//     this.date = date;
// }
// Post.prototype.edit = function (text){
//     this.text = text;
// }
// function AttachedPost(author, text, date){
//     Post.call(this, author, text, date);
//     this.highlighted = false;
// }
// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;
//
// AttachedPost.prototype.makeTextHighlighted = function (){
//     this.highlighted = true;
// }
// let post1 = new AttachedPost("Sveta","приветики", '11');
// post1.edit('Света любит Сашу');
// post1.makeTextHighlighted();

// ДЗ5; задание 1, ES6:
// class Post{
//     constructor(author, text, date) {
//         this.author = author;
//         this.text = text;
//         this.date = date;
//     }
//     edit(text){
//         this.text = text;
//     }
// }
// class AttachedPost extends Post{
//     constructor(author, text, date) {
//         super(author, text, date);
//         this.highlighted = false;
//     }
//     makeTextHighlighted(){
//         this.highlighted = true;
//     }
// }
// let post1 = new AttachedPost("Sveta","приветики", '11');
// post1.edit('Света любит Сашу');
// post1.makeTextHighlighted();


// 1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
//     мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//     - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
//     units: 5, //это единицы tens: 4, //это десятки hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
//     Вам может пригодиться:
//      Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь https://mzl.la/2XCVSsx
//      Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .
//      Используйте также остаток от деления на 10, например 123 % 10 будет 3
//  Вам также может пригодится делить число на 100 и на 10.

// Решение задания 1 (не обязательное)
// let num = +prompt('Введите целое число от 0 до 999.');
// function getDigits(num) {
//     if (!Number.isInteger(num) || num < 0 || num > 999) {
//         console.log('Введите целое число в диапазон с 0 до 999');
//         return {};
//     }
//
//     num = num.toString();
//     let numArr = num.split('')
//
//     class NumUnits {
//         constructor(numb) {
//             this.numb = numb;
//             this.ten = 0;
//             this.hundredths = 0;
//
//         }
//     }
//     class NumTen extends NumUnits {
//         constructor(numb, ten) {
//             super(numb);
//             this.ten = ten;
//             this.hundredths = 0;
//
//         }
//     }
//     class NumHundredths extends NumTen {
//         constructor(numb, ten, hundredths) {
//             super(numb, ten);
//             this.hundredths = hundredths;
//
//         }
//     }
//
//     if(numArr.length === 3){
//         return new NumHundredths(numArr[2], numArr[1], numArr[0]);
//     }
//     if(numArr.length === 2){
//         return new NumTen(numArr[1], numArr[0]);
//     }
//     if(numArr.length === 1){
//         return new NumUnits(numArr[0]);
//     }
// }
// console.log(getDigits(num));





