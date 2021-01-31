const user = {
    name: 'Sveta',
    id: 123,
    hobby: 'coding'
};

const arr = [ 'Sveta', 'Aleshina' ];

const {name, id, hobby} = user; // Деструктурированное присваивание  const name = user.name  и т.д.
const [uName, uSecondName ] = arr;  // Деструктурировали const uName = arr[0]  и  const uSecondName = arr[1]  

console.log(name, id, uName, uSecondName );


console.log( ['Frontender', ...arr] ); // ... спред оператор - скопировать массив
console.log( { surname: 'Aleshina', ...user} );