// через massiv
let pairNum = [];
let noRemnantThird = [];

let i = 0;
while (i <= 100) {
    if ( i%2 === 0) {
        pairNum.push(i);
     }
     if ( i%3 === 0) {
         noRemnantThird.push(i);
     }
    i++;
}
console.log('Парні числа: ' + String(pairNum));
console.log('Числа, які не дають остачу від ділення на 3: ' + String(noRemnantThird));