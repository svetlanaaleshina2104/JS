/* - Напишите функцию конкатенации (сложения) двух строк 
(для знакомых с программированием - используйте интерполяционную строку), которая возвращает результат.

Дополнительное условие со звездочкой - если результат больше чем 20 символов, 
обрезать его, и добавлять троеточие в конце (используйте для получения подстроки метод [substring] */


let string1 = 'Нам необходимо gerthuartjtghbrth';
let string2 = 'сложить две строки';
const maxLength = 20;


function concatTwoStrings(string1, string2) {
    let result = `${string1} ${string2}`;
    if (result.length > maxLength) 
        return `${result.substr(0, maxLength)}...`;
    
 else 
    return result;

}

console.log(concatTwoStrings(string1, string2))

