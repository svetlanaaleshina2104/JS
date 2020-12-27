
let word = 'bnfghyjrtshdytjkidyu';
/* let myLenght = word.length */
const maxlength = 10;

function checkLength(word) {
	console.log(word);
}

if (word.length < maxlength) {
	checkLength ('Слово подходит!');
} else if (word.length >= maxlength) {
	checkLength('Слово слишком длинное!');
}