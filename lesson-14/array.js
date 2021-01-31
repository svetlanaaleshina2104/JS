const arr = [1, 2, 3, 4, 5, 6 ];
const arr2 = [7, 8];

const arr3 = Array.prototype.concat( arr2, arr);

/* console.log( arr3 );

console.log( arr3.splice(0, 2, 9, 9 ) );
console.log( arr3 );

console.log( arr3.slice(0, 2) );
console.log( arr3 );

console.log( arr3.indexOf(1) );
console.log( arr3.indexOf(9) );

console.log( arr3.lastIndexOf(9) );

const indexOfLastNine = arr3.lastIndexOf(9);

console.log( arr3.splice(indexOfLastNine, 1) );
console.log( arr3 ); */

const cars = [
    {
        model: 'bmw',
        year: '1992',
        used: true
    },
    {
        model: 'mercedes',
        year: '1998',
        used: true
    },
];

console.log( cars.find( car => car.model === 'bmw') );
console.log( cars.find( car => car.used) );
console.log( cars.findIndex( car => car.model === 'mercedes') );