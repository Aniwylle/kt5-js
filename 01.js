const maskPhoneNum = (phone) => {
  const lastDotIndex = phone.lastIndexOf('.');
  return phone.substring(0, lastDotIndex + 1) + '*'.repeat(4);
};

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

const maskedPhones = phones.map(maskPhoneNum);

console.log(maskedPhones);
module.exports = { maskPhoneNum };