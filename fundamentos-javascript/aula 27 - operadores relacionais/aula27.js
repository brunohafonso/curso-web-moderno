console.log('1 -', '1' == 1); // 1 - true
console.log('2 - ', '1' === 1); // 2 -  false
console.log('3 -', '3' != 3); // 3 - false
console.log('4 -', '3' !== 3); // 4 - true

console.log('5 -', 3 < 2); // 5 - false
console.log('6 -', 3 > 2); // 6 - true
console.log('7 -', 3 <= 2); // 7 - false
console.log('8 -', 3 >= 2); // 8 - true

const d1 = new Date();
const d2 = new Date();
console.log('9 -', d1 === d2); // 9 - false
console.log('10 -', d1 == d2); // 10 - false
console.log('11 -', d1.getTime() === d2.getTime()); // 11 - true
console.log('12 -', undefined == null); // 12 - true
console.log('13 -', undefined === null); // 12 - false