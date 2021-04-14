// 5 урок
// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.


const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const size = '20px';
const colorBlack = '#000';
const align = 'center';

let chessBoard = document.createElement('table');
chessBoard.classList.add('chess_board');
document.body.appendChild(chessBoard);

function chessBoardGeneration() {
    for (let row = 0; row < (nums.length + 2); row++) {
        const trElem = document.createElement('tr');
        chessBoard.appendChild(trElem);

        for (let col = 0; col < (nums.length + 2); col++) {
            const cell = document.createElement('td');
            // проставляем буквы
            if ((row === 0 && col === 0) || (row === 9 && col === 9) || (row === 0 && col === 9) || (row === 9 && col === 0)) {
                cell.innerHTML = ' ';
            } else if ((row === 0 && col > 0) || (row === 9 && col > 0)) {
                cell.innerHTML = letters[col - 1];
            }
            // проставляем числа
            else if ((row > 0 && col === 0) || (row > 0 && col === 9)) {
                cell.innerHTML = nums[row - 1]
            }
            // задаем цвет
            else if (row % 2 !== 0) {
                if (col % 2 !== 0) {
                    cell.style.background = colorBlack;
                }
            } else if (row % 2 === 0) {
                if (col % 2 === 0) {
                    cell.style.background = colorBlack;
                }
            }
            // прописываем стили для ячеек
            cell.style.width = size;
            cell.style.height = size;
            cell.style.textAlign = align;

            trElem.appendChild(cell);
        }
    }

}

chessBoardGeneration()


// 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».


let basketList = document.createElement('div');
basketList.classList.add('basket-list');

let basketButton = document.createElement('button');
basketButton.classList.add('basket-btn');

document.body.appendChild(basketList);
document.body.appendChild(basketButton);

const basketBlockItem = {
    render(item) {
        return `<div class="item">
        <div><b>Наименование</b>: ${item.product_name}</div>
        <div><b>Цена за шт.</b>: ${item.price}</div>
        <div><b>Количество</b>: ${item.quantity}</div>
        <div><b>Стоимость</b>: ${item.quantity * item.price} рублей</div>
    </div>`;
    }
}

const basket = {
    goods: [{
            id: 1,
            product_name: "graphics card",
            quantity: 1,
            price: 35500
        },
        {
            id: 2,
            product_name: "CPU",
            quantity: 1,
            price: 29990
        },
        {
            id: 3,
            product_name: "RAM",
            quantity: 3,
            price: 3500
        },
        {
            id: 4,
            product_name: "motherboard",
            quantity: 1,
            price: 8900
        },
        {
            id: 5,
            product_name: "HDD",
            quantity: 2,
            price: 1650
        }
    ],
    basketBlock: null,
    clearButton: null,
    basketBlockItem,

    basketPrice() {
        return this.goods.reduce((totalPrice, basketItem) => totalPrice + basketItem.quantity * basketItem.price, 0);
    },

    clearBasket() {
        this.goods = [];
        this.render();
    },

    init() {
        this.basketBlock = document.querySelector('.basket-list');
        this.basketButton = document.querySelector('.basket-btn');
        this.basketButton.addEventListener('click', () => this.clearBasket());

        this.render();
    },

    render() {
        if (this.goods.length) {
            this.goods.forEach(item => {
                this.basketBlock.insertAdjacentHTML('beforeend', this.basketBlockItem.render(item));
            });

            this.basketBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций стоимостью ${this.basketPrice()} рублей`);
        } else {
            this.basketBlock.textContent = 'корзина пуста';
        }
    }

};

basketButton.style.padding = '10px 60px';
basketButton.innerHTML = 'Очистить';

basket.init();
// console.log(basket.basketPrice());