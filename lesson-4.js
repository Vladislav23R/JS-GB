'use strict';


// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

var a = prompt('Введите число от 0 до 999: ');

if (a.length > 3) {
    console.log('Число больше 999', numberIntoObject(a));
} else
    console.log(numberIntoObject(a));


function numberIntoObject(number) {
    let obj = {};

    if (number.length > 3) return obj;
    else {
        obj.units = number % 10;
        obj.dozens = parseInt((number / 10) % 10);
        obj.hundreds = parseInt(number / 100);
    }

    return obj;
}


// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.


const basket = {
    goods: [{
            id: 1,
            product_name: "graphics card",
            quantity: 1,
            price: 35500
        },
        {
            id: 1,
            product_name: "CPU",
            quantity: 1,
            price: 29990
        },
        {
            id: 1,
            product_name: "RAM",
            quantity: 3,
            price: 3500
        },
        {
            id: 1,
            product_name: "motherboard",
            quantity: 1,
            price: 8900
        },
        {
            id: 1,
            product_name: "HDD",
            quantity: 2,
            price: 1650
        }
    ],
    basketPrice() {
        return this.goods.reduce((totalPrice, basketItem) => totalPrice + basketItem.quantity * basketItem.price, 0);
    }
};

console.log(basket.basketPrice());