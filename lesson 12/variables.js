let primitiveValue =  'я обычная примитивная строка';
let objectValue = {
    field: 'gvdfhk'
};

const changePrimitive = primitive => {
    primitive = 'что-то другое';
    primitiveValue = 'поменяем что-то в ней';
};

const changeFieldInObject = obj => {
    obj.field = 'новое значение'
};

changePrimitive(primitiveValue);
changeFieldInObject(objectValue);

console.log(primitiveValue);
console.log(objectValue);