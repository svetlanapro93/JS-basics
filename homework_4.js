// Задание 1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:
//     0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// ...
// 10 – четное число

/*Решение задания 1
for(let i = 0; i < 11; i++){
    if (i == 0){
        console.log(i + " - это ноль")
    }
    if (i != 0 && i % 2 == 0){
        console.log(i + " - четное число")
    }
    if (i != 0 && i % 2 !== 0){
        console.log(i + " - нечетное число")
    }

}*/

// Задание 2. Выведите в консоль значения, указанные рядом с комментариями:
  /*  const post = {
        author: "John", //вывести этот текст
        postId: 23,
        comments: [
            {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2 //вывести это число
                }
            },
            {
                userId: 5, //вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    };
console.log(post.comments[0].rating.dislikes)
console.log(post.comments[1].userId)
console.log(post.comments[1].text)*/

// 3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
   /* const products = [
        {
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];
        products.forEach((element, index) => {
            element.price = element.price * 0.85
        })
console.log(products)
*/