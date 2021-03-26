// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = a++; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ a++); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
// Почему код даёт именно такие результаты?

// Ответ: 
//     1. унарный префикс сначала выполняет операцию, а потом присваивает значение.
//     2. унарный постфикс сначала присваивает значение, а потом выполняет операцию.


// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// Ответ: x = 5 ("a" умножается на 2, затем значение присваивается в "a". Потом идет сложение 1 + a(4))


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; 
// ноль можно считать положительным числом.

var a = parseInt(prompt("Задание 3! Введите первое целое число: "));
var b = parseInt(prompt("Задание 3! Введите второе целое число: "));

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}


// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

var a = parseInt(prompt("Задание 4! Введите целое число от 0 до 15: "))

switch (a) {
    case 0:
        console.log(a++);
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
        break
}


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function sum(numOne, numTwo) {
    return numOne + numTwo;
}

function difference(numOne, numTwo) {
    return numOne - numTwo;
}

function multiplication(numOne, numTwo) {
    return numOne * numTwo;
}

function division(numOne, numTwo) {
    if (numTwo == 0) {
        return 'На ноль делить нельзя!'
    }
    return numOne / numTwo;
}


var a = prompt("Задание 5! Введите число: ");
var b = prompt("Задание 5! Введите число: ");

console.log("Результат сложения: " + sum(a, b));
console.log("Результат разности: " + difference(a, b));
console.log("Результат умножения: " + multiplication(a, b));
console.log("Результат деления: " + division(a, b));


// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return sum(arg1, arg2);
            break;
        case "-":
            return difference(arg1, arg2);
            break;
        case "*":
            return multiplication(arg1, arg2);
            break;
        case "/":
            return division(arg1, arg2);
            break;
    }
}

operation = prompt("Задание 6! Введите знак арифметической операции  '+ - * /' : ");

console.log(mathOperation(a, b, operation));


// 7. *Сравнить null и 0. Попробуйте объяснить результат.



// 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}

let val = parseInt(prompt("Задание 8! Введите число: "));
let pow = parseInt(prompt("Задание 8! Введите степень числа: "));

console.log(power(val, pow));