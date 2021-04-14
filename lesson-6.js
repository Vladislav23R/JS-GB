'use-strict';
// 6 урок
// 1. Доработать модуль корзины.
// a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида


const catalogBlock = document.createElement('div');
catalogBlock.classList.add('catalog');
document.body.appendChild(catalogBlock);

const catalog = {
    catalogBlock: null,
    basket: null,
    productList: [{
            id: 1,
            product_name: "graphics card",
            price: 35500
        },
        {
            id: 2,
            product_name: "CPU",
            price: 29990
        },
        {
            id: 3,
            product_name: "RAM",
            price: 3500
        },
        {
            id: 4,
            product_name: "motherboard",
            price: 8900
        },
        {
            id: 5,
            product_name: "HDD",
            price: 1650
        }
    ],

    addEventListener() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    init(basket, catalogBlockClass) {
        this.basket = basket;
        this.catalogBlock = document.querySelector('.catalog');
        this.render();
        this.addEventListener();
    },

    addToBasket(event) {
        if (!event.target.classList.contains('add-basket')) return;
        const idProduct = +event.target.dataset.id_product;
        const productAdd = this.productList.find((product) => product.id === idProduct);
        this.basket.addToBasket(productAdd);
    },

    render() {
        if (this.productList.length > 0) {
            this.catalogBlock.innerHTML = '';
            this.productList.forEach(item => {
                this.catalogBlock.insertAdjacentHTML('beforeend', this.renderItem(item));
            });
        } else {
            this.emptyCatalog();
        }
    },

    emptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст';
    },

    renderItem(item) {
        return `<div class="product">
                <b>${item.product_name}</b>
                <p>${item.price} рублей</p>
                <button
                    class="add-basket"
                    data-id_product="${item.id}"
                >В корзину</button>
            </div>`;
    }

};


document.body.appendChild(document.createElement('hr'));
const h1 = document.createElement('h1');
h1.innerHTML = 'Корзина';
document.body.appendChild(h1);

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
    }],
    basketBlock: null,
    clearButton: null,
    // basketBlockItem,

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
            this.basketBlock.innerHTML = '';
            this.goods.forEach(item => {
                this.basketBlock.insertAdjacentHTML('beforeend', this.renderBascetItem(item));
            });

            this.basketBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goods.length} позиций стоимостью ${this.basketPrice()} рублей`);
        } else {
            this.basketBlock.innerHTML = '';
            this.basketBlock.textContent = 'корзина пуста';
        }
    },

    addToBasket(product) {
        if (product) {
            const findInBasket = this.goods.find(({ id }) => product.id === id);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({...product, quantity: 1 });
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    renderBascetItem(item) {
        return `<div>
                <h3>${item.product_name}</h3>
                <p>${item.price} руб.</p>
                <p>${item.quantity} шт.</p>
            </div>`;
    },
};

basketButton.style.padding = '10px 60px';
basketButton.innerHTML = 'Очистить';

basket.init();
catalog.init(basket, 'catalog');