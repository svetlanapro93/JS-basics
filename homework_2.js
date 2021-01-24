// //задание 3:
// alert("Задание №1")
// let a = 10;
// let b = 14;
// if (a >= 0 && b >= 0) {
//     alert(a - b);
// } else if (a < 0 && b < 0) {
//     alert(a * b);
// } else {
//     alert(a + b);
// }
// // задание 5:
// alert("Задание №5")
// function summ(x, y) {
//     return (x + y);
// }
// function difference(x, y) {
//     return (x - y);
// }
// function multiply(x, y) {
//     return (x * y);
// }
// function division(x, y) {
//     return (x / y);
// }
// Сумма = summ(10, 5);
// alert(Сумма);
// Разница = difference(10, 5);
// alert(Разница);
// Произведение = multiply(10, 5);
// alert(Произведение);
// Частное = division(10, 5)
// alert(Частное);

//задание 4:
// let x = 10;
// let y = 5;
// let oper = '+'
// function mathOperation(arg1, arg2, operation){
//     switch (operation){
//         case '+':
//             return summ(arg1, arg2);
//             break;
//         case '-':
//             return difference(arg1, arg2);
//             break;
//         case '*':
//             return multiply(arg1, arg2);
//             break;
//         case '/':
//             return division(arg1, arg2);
//             break;
//     }
// }
// result = mathOperation(x, y, oper)
// alert(result)


//Задание №2 от НОВОГО преподавателя
//1. Объясните почему код даёт именно такие результаты?
//пример 1
// let a = 1, b = 1, c, d;
// c = ++a;
// alert(c); // ответ: 2
// /* ++a  озачает, что к значению а прибавляется значение а (1+1).
// Т.к. "++" стоит перед а, то alert сразу выдает результат выражения = 2,
// если бы "++" стояло после а, тогда alert выдал бы 1
// По окончанию получаем a = 2, b = 1, c = 2, d;*/
// //пример 2
// d = b++;
// alert(d); //ответ: 1
// /*b = 1, поэтому и d тоже равно 1, т.к; значение ++ стоит после b. Расчет
// * прозведен, но в алерт сначала попадет значание до складывания
//  По окончанию получаем  a = 2, b = 2, c = 2, d = 1;*/
// //пример 3
// c = 2 + ++a;
// alert(c); //ответ: 5
// /* с = 2 + 3 = 5. А после первой задачи равна 2, ++2 = 2+1 = 3
//  По окончанию получаем  a = 3, b = 2, c = 5, d = 1;*/
// //пример 4
// d = 2 + b++;
// /* b++ = 2. d = 2 + 2 = 4
//  По окончанию получаем  a = 3, b = 3, c = 5, d = 4;*/
// alert(d); //ответ: 4
// alert(a); //3
// alert(b); //3

// 2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло (описать последовательность действий).
// let a = 2;
// let x = 1 + (a *= 2);
/*первое действие объявлена переменная а и ей присвоено значение 2.
* второе действие объявлена переменная х и ей присвоено значение формулы в которой
* первое действие в скобках: (а *= 2), т.е. а = а * 2 = 4
* второе действие в скобках: 1 + 4 = 5
* ИТОГО а = 4, х = 5.*/


// 3. Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
//     Затем написать скрипт, который работает по следующему принципу:
//     - если a и b положительные, вывести их разность (ноль можно считать положительным числом); - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
// let a = -3;
// let b = -1;
// if(a >= 0 && b >= 0){
//     console.log(a - b)
// }
// else if(a < 0 && b < 0){
//     console.log(a * b)
// }
// else{
//     console.log(a + b)
// }

// Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
//     Обязательно использовать оператор return.
// function summ (a, b){
//     let x = a + b;
//     return x
// }
// summResult = summ (5, 1);
// alert("Сумма равна: " + summResult);
//
// function subtraction (a, b){
//     let x = a - b;
//     return x
// }
// subtractionResult = subtraction (5, 1);
// alert("Разница равна: " + subtractionResult);
//
// function multiplication (a, b){
//     let x = a * b;
//     return x
// }
// multiplicationResult = multiplication (5, 2);
// alert("Произведение равно: " + multiplicationResult);
//
// function division (a, b){
//     let x = a / b;
//     return x
// }
// divisionResult = division (10, 2);
// alert("Деление равно: " + divisionResult);

// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.
// function mathOperation(arg1, arg2, operation){
//     switch (operation){
//         case "+":
//             x = arg1 + arg2;
//             break
//     }
//     switch (operation){
//         case "-":
//             x = arg1 - arg2;
//             break
//     }
//     switch (operation){
//         case "*":
//             x = arg1 * arg2;
//             break
//     }
//     switch (operation){
//         case "/":
//             x = arg1 / arg2;
//             break
//     }
//     return x
// }
//
// console.log(Result = mathOperation (10, 2, "/"));

// 6**. (Это задание не является частью курса, можете его не делать, оно для тех кому мало обычных заданий, требует времени и возможно гугления, делайте по желанию.)
// Программа должна спросить у пользователя число, это будет количество денег, которое он хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
//     "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
// То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.
//
//ВАРИАНТ 1 задания 6
// let a = +prompt("Сколько рублей вы хотите внести на счет?")
// let b = a % 10;
// let z = a % 100;
// let x = null;
// function mathOperation() {
//     switch (b) {
//         case 1:
//             return "рубль";
//             break
//     }
//     switch (b) {
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//         case 0:
//             return "рублей";
//             break
//     }
//     switch (z) {
//         case 2:
//         case 3:
//         case 4:
//             return "рубля";
//             break
//     }
//     switch (z) {
//         case 11:
//         case 12:
//         case 13:
//         case 14:
//             return "рублей";
//             break
//     }
// }
// alert("Ваша сумма в " + a + " " + mathOperation() + " успешно зачислена.");

// ВАРИАНТ 2 задания 6
// let num = prompt('Сколько рублей вы хотите внести на счет?');
// let numLength = num.length
// let numTen = +num.charAt(num.length - 2);
// let numUnits = +num.charAt(num.length - 1);
// function mathOperation() {
//     switch (true){
//         case numUnits >= 0 && numUnits <= 9 && numTen === 1:
//         case numUnits > 4 && numUnits <= 9:
//             return "рублей"
//     }
//     switch (numUnits) {
//         case 1:
//             return "рубль";
//     }
//     switch (numUnits) {
//         case 0:
//             return "рублей";
//     }
//     switch (true){
//         case numUnits > 1 && numUnits < 5:
//             return "рубля"
//     }
//     switch (true){
//         case numTen >= 2:
//             return "рублей"
//     }
//
// }
// alert("Ваша сумма в " + num + " " + mathOperation() + " успешно зачислена.");