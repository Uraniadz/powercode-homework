// через string
let pairNum = '';
let noRemnantThird = '';

for (let i = 0; i <= 100; i++) {
    if ( i%2 === 0) {
       pairNum = pairNum + ' ' + i;
    }
    if ( i%3 === 0) {
       noRemnantThird = noRemnantThird + ' ' + i;
    }
}
console.log('Парні числа: ' + pairNum);
console.log('Числа, які не дають остачу від ділення на 3: ' + noRemnantThird);

// через massiv
const pairNum2 = [];
const noRemnantThird2 = [];

for (let i = 0; i <= 100; i++) {
    if ( i%2 === 0) {
       pairNum2.push(i);
    }
    if ( i%3 === 0) {
        noRemnantThird2.push(i);
    }
}
console.log('Парні числа: ' + pairNum2.join(', '));
console.log('Числа, які не дають остачу від ділення на 3: ' + noRemnantThird2.join(', '));