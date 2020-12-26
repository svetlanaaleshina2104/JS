function appleMaster(num) {
    console.log('я подошел к корзине ' + num + ' с яблоками');
    console.log('я посчитал каждое яблорко в корзине ' + num);
    console.log('я записала сколько было в корзине ' + num + ' яблок');
}

for ( let i = 1; i < 4; i++ ) {
    appleMaster(i);
}

appleMaster(5);
