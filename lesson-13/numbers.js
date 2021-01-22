/* const num = 1.5;

console.log(Math.floor(num)); // 1
console.log(Math.ceil(num)); // 2
console.log(Math.round(num)); // 2
 */

const randNum = Math.floor(Math.random() * 101);

if (Number.isNaN(randNum - 1)) {
    console.log('введите число');
} else {
    console.log('спасибо, ты молодец');
}
