const test = require("node:test");
const assert = require("node:assert");

const { isItFridayToday } = require("./05.js");

test("When is friday", () => {
    assert.deepStrictEqual(isItFridayToday(0), 'Пятница будет через 4 дня');   
    assert.deepStrictEqual(isItFridayToday(1), 'Пятница будет через 3 дня');   
    assert.deepStrictEqual(isItFridayToday(2), 'Пятница будет через 2 дня');   
    assert.deepStrictEqual(isItFridayToday(3), 'Пятница будет через 1 день');  
    assert.deepStrictEqual(isItFridayToday(4), 'Завтра пятница!');   
    assert.deepStrictEqual(isItFridayToday(5), 'Сегодня пятница!');  
    assert.deepStrictEqual(isItFridayToday(6), 'Пятница была вчера');  
});
