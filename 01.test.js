const test = require("node:test");
const assert = require("node:assert");

const { maskPhoneNum } = require("./01.js");

test("replace after last point", () => {
  const phones = [
    '590.423.4568',
    '650.124.7234',
    '650.507.9879',
    '011.44.1343.529268',
    '011.44.1344.478968',
    '011.44.1644.429267',
    '11.44.1343.52',
    '11.44.1643.52',
  ];
  const phones2 = [
    '123.123.12333',
    '123321.123.123',
    '321123.3333.3456',
    '123.45.6789.000000',

  ];

  assert.deepStrictEqual(phones.map(maskPhoneNum), [
    '590.423.****',
    '650.124.****',
    '650.507.****',
    '011.44.1343.****',
    '011.44.1344.****',
    '011.44.1644.****',
    '11.44.1343.****',
    '11.44.1643.****'
  ]);
  assert.deepStrictEqual(phones2.map(maskPhoneNum), [
    '123.123.****',
    '123321.123.****',
    '321123.3333.****',
    '123.45.6789.****',

  ]);
});
