const test = require("node:test");
const assert = require("node:assert");

const { kingSayd } = require("./04.js");

test("what king was saying", () => {
    assert.deepStrictEqual(kingSayd('сегодня хорошая погода'), 'Король сказал: сегодня хорошая погода');   
    assert.deepStrictEqual(kingSayd('Казнить нельзя помиловать'), 'Король сказал: Казнить нельзя помиловать');   
    assert.deepStrictEqual(kingSayd(''), 'Король сказал: ');   
});
