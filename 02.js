const maskcardNum = (phones) => {
    const f4_Num = phones.substring(0, 4);
    const l4_Num = phones.substring(phones.length - 4);
    const stars = '*'.repeat(4);
    return f4_Num + stars + l4_Num;
  };

let phones = [
    '4000 0012 0056 9499',
    '4000 0013 5456 7379',
    '4000 0014 1456 9869',
    '4000 0015 3466 7859',
    '4000 0016 3556 6899',
    '4000 0017 4456 4699',
];
const maskedPhones = phones.map(maskcardNum);
console.log(maskedPhones);

module.exports = { maskcardNum };