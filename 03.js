function getInfo(prices) {
    let startPrice = 0;
    let finalDollar = 0;
    for (let price of prices) {
        if (price.startsWith('Цена')) {
            startPrice++;
        }
        if (price.endsWith('$')) {
            finalDollar++;
        }
    }
    return [startPrice, finalDollar];
}

let prices = [
    'Цена товара - 1200$',
    'Стоимость - 500$',
    'Цена не определена',
    '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$',
];

console.log(getInfo(prices));

module.exports = { getInfo };
