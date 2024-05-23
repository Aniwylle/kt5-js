const test = require("node:test");
const assert = require("node:assert");

const { getInfo } = require("./03.js");

test("test elements", () => {
    let prices = [ 
        'Цена товара - 1200$', 
        'Стоимость - 500$', 
        'Цена не определена', '9999',
        'Ценовая категория - больше 300$',
        'Цена за услугу 500 EUR',
        '150$',
    ]
    let prices2 = [ 
        'Цена товара - 0 рублей ', 
        '$ - Это доллар, ₽ - А это рубль', 
        'Стоимость не определена, цена тоже',
        'Ценовая категория - больше 1$',
        'Стоимость за услугу 0 рублей',
            ]
    assert.deepStrictEqual(getInfo(prices), [ 3, 4 ]);   
    assert.deepStrictEqual(getInfo(prices2), [ 1, 1 ]);   


});
