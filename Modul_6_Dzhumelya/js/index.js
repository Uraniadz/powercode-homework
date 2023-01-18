// Вправа №1 Копія масива 
// через метод slice()

const arr = ['one', 10, 'name', 5, 'Nastya', 9];
function arrayCopy (array) {
    return array.slice();
}
const newCopyArr = arrayCopy(arr);
console.log(newCopyArr);

// Вправа №2 
const arrTwo = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function arrayJoin (arr, delimite) {
    return arr.join(delimite);
}
const arrNewJoin = arrayJoin(arrTwo, ' '); 
console.log('"' + arrNewJoin + '"');

//  Вправа №3 
const arrThree = [NaN, 0, 33, false, -51, '', undefined, 75, null];
function removeFalsy (arr) {
    return arr.filter((e) => e);
}
const arrNoFalsy = removeFalsy(arrThree);
console.log(arrNoFalsy);

//  Вправа №4 залишив метод concat()
function getWord2 () {
    const arr1 = ['e', null, 'r'];
    const arr2 = ['g', 'y'];
    const arrUnite = arr1.concat(arr2);

    arrUnite.unshift('p', 'o');
    arrUnite.push('m', 'o', 'd', 'e' );
    arrUnite.splice(2, 0, 'w');
    arrUnite.splice(6,2);
    arrUnite[6] = 'c';
    return arrayJoin(removeFalsy(arrUnite), ' ');
}
console.log(getWord2());

// Вправа №5
const mas = [['foo', 1], ['baz', 2], ['bar', 3]];
const ob = {};

function fromPairs (array) {
    const objectFromArr = {};

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
           objectFromArr[array[i]] = array[i][j];
        }
    }
    return objectFromArr;
}
console.log(fromPairs(mas));

// Вправа №6 Через цикл не виходить чомусь поділити масив

// function chunk(array, size) {
//     const newArr = [];
//     const newArr2 = [];
//     for (let i = 0; i < array.length; i++) {
//         if ((i % size) === 0) {
//             newArr.push(i);
//         }
//     }
//     newArr2.push(array.slice(newArr[0], newArr[1]));
//     newArr2.push(array.slice(newArr[1], newArr[2]));
//     newArr2.push(array.slice(newArr[2]));
//     return newArr2;
// }
// const arrSlice = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3);
// console.log(arrSlice);
// console.log(JSON.stringify(arrSlice));


// Вправа №7 Ще думаю як зробити...