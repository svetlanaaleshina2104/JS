/* Используя циклы и логические операторы, напишите функцию реализующую логику игры FizzBuzz. Ваша задача правильно посчитать до 30. */
/* Начинающий произносит число «1», и каждый следующий игрок прибавляет к предыдущему значению единицу. Когда число делится на три оно заменяется на fizz, если число делится на пять, то произносится buzz. Числа, делящиеся на три и пять одновременно заменяются на fizz buzz. */

function fizzBuzz() {
    for (let i = 0; i <= 30; ++i){
    
     (i % 3 === 0 && i % 5 === 0) ?  console.log('fizzbuzz'):
     (i % 3 === 0) ?   console.log('fizz'):
     (i % 5 === 0) ?   console.log('buzz'):
     console.log(i);
}
}

fizzBuzz()



/*Напишите функцию выводящую в консоль простые числа в промежутке до n (n - аргумент). Подсказка: возможно потребуется использовать цикл вложенный в цикл. */


function findAllPrimes(n) {
	nextNumber: for (let i = 2; i <= n; i++) {
        for (let x = 2; x < i; x++ ) {
            if (i % x === 0) {continue nextNumber;}
        }
    
    console.log(i);}
} 

findAllPrimes(10)
