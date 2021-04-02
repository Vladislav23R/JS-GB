'use strict';


// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var a = 0


while (a <= 100) {
    if (a < 2) {
        a++;
        continue;
    };
    if (a === 2 || a === 3) {
        console.log(a);
        a++;
        continue;
    }

    var count = 0;

    for (let i = 2; i < (a + 1); i++) {
        if (a % i == 0) {
            count++;
        }

        if (count > 2) {
            break;
        }
    }

    if (count === 1) console.log(a);
    a++;
}


// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var arrayBasket = [
    ['graphics card', 1, 35500],
    ['CPU', 1, 29990],
    ['RAM', 3, 3500],
    ['motherboard', 1, 8900],
    ['HDD', 2, 1650],
];

function basketPrice(arrayBasket) {
    let totalPrice = 0;
    arrayBasket.forEach((bascetItem) => {
        totalPrice += bascetItem[1] * bascetItem[2];
    });
    return totalPrice;
}

console.log(basketPrice(arrayBasket));