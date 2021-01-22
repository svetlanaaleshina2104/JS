const arr1 = [1, 2 ,2, 3];
const arr2 = [2, 15, 15, 1, 1, 1, 23, 7, 8, 7, 1, 1];

// вернуть новый массив, в котором только уникальные значения

function onlyUniqValues(arr) {
    const result = [];
    
    arr.forEach( (num, index, array) => {
        if (num === array[index + 1]){
     return;
 }        else {
     result.push(num);
 }
    });
    return result;
}

console.log(onlyUniqValues(arr2));