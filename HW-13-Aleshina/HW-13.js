'use strict'
/* 1 задача. Напишите функцию, переворачивающую переданную строчку ( word —> drow ) */

function reverseWord (word) {
    return word.split("").reverse().join("");
}


console.log(reverseWord("Привет"));
 



/* 2 задача. Напишите реализацию алгоритма ROT-13 только для английского алфавита. */
function rot13(strng) {
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lettersRot13 = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return strng.replace(/[a-z]/gi, i => lettersRot13[letters.indexOf(i)])
  }
  console.log(rot13('mama govorit chto ya klassniy')); // выведет znzn tbibevg pugb ln xynffavl





/* 3 задача. Напишите функцию, генерирующую двумерный массив. Количество вложенных масивов от 1 до arraysCount, и с числами внутри этих массивов от 1 до numbersCount. */


function generate(numbersCount, arraysCount) {
    const mainArr = [];
    for (let i = 0; i < arraysCount; i++) {
        
        const innerArr = [];

        for (let j = 1; j <= numbersCount; j++) {
            innerArr.push(j);
        }
        mainArr.push(innerArr);
    } 

    return mainArr;
}

console.log( generate(5, 3) );
// выведет:
// [
//     [ 1, 2, 3, 4, 5 ]
//     [ 1, 2, 3, 4, 5 ]
//     [ 1, 2, 3, 4, 5 ]
// ]
