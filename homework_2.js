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
// задание 5:
alert("Задание №5")
function summ(x, y) {
    return (x + y);
}
function difference(x, y) {
    return (x - y);
}
function multiply(x, y) {
    return (x * y);
}
function division(x, y) {
    return (x / y);
}
// Сумма = summ(10, 5);
// alert(Сумма);
// Разница = difference(10, 5);
// alert(Разница);
// Произведение = multiply(10, 5);
// alert(Произведение);
// Частное = division(10, 5)
// alert(Частное);

//задание 4:
let x = 10;
let y = 5;
let oper = '+'
function mathOperation(arg1, arg2, operation){
    switch (operation){
        case '+':
            return summ(arg1, arg2);
            break;
        case '-':
            return difference(arg1, arg2);
            break;
        case '*':
            return multiply(arg1, arg2);
            break;
        case '/':
            return division(arg1, arg2);
            break;
    }
}
result = mathOperation(x, y, oper)
alert(result)