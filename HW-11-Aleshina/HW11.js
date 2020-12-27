
const maxlength = 10;

function checkLength(word) {
	
	if (word.length < maxlength) {
		console.log('Слово подходит!');
	} else if (word.length >= maxlength) {
		console.log('Слово слишком длинное!');
	}
	
} 

checkLength('Бронетранспортер');
checkLength('Слово');
