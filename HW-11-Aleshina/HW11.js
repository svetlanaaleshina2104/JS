/* 
function checkLength(word) {
	// переданный аргумент word - переменная,
	// которую и нужно проверять

	// чтобы узнать длину строчки - используйте свойство .length
}

let word = 'илшдпдши';
let empty = '';

console.log('Слово илшдпдши занимает ' + word.length + ' кодовых значений');


console.log('Пустая строка имеет длину, равную ' + empty.length);


/* if (myNum > 3) {
    myFunction('Больше трех!');
} else if  (myNum < 3) {
    myFunction('Меньше трех!');
} else {
    myFunction('Равен трем')
} */ 

let word = 'fgrtyrthybgtrhjkm';
/* let myLenght = word.length */
const maxlength = 10;

function checkLength(word) {
	console.log(word);
}

if (word < maxlength) {
	checkLength ('Слово подходит!');
} else if (word > maxlength) {
	checkLength('Слово слишком длинное!');
}