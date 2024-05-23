const test = require("node:test");
const assert = require("node:assert");

const { maskcardNum } = require("./02.js");

test("replace in the middle", () => {
    const phones = [
        '4000 0012 0056 9499',
        '4000 0013 5456 7379',
        '4000 0014 1456 9869',
        '4000 0015 3466 7859',
        '4000 0016 3556 6899',
        '4000 0017 4456 4699',
    ];
    const phones2 = [
        '1111 2222 3333 4444',
        '5555 6666 7777 8888',
        '4444 3333 2222 1111',
        '1010 0101 0110 1001',
    ];



    assert.deepStrictEqual(phones.map(maskcardNum), [
        '4000****9499',
        '4000****7379',
        '4000****9869',
        '4000****7859',
        '4000****6899',
        '4000****4699',
      ]);
      assert.deepStrictEqual(phones2.map(maskcardNum), [
        '1111****4444',
        '5555****8888',
        '4444****1111',
        '1010****1001',
      ]);
});
