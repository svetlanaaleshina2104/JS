const arr = [ 1, 2, 3, 4, 5 ];

const obj = {
    one: 1,
    two: 2
};

/* for ( let number of arr ) {
    console.log(number);
} */

for ( let number in obj ) {
    console.log(number);
}

for ( let number of Object.values(obj) ) {
    console.log(number);
}

for (let entry of Object.entries(obj)) {        // Object.keys() ||  Object.values()
    console.log(entry);
}