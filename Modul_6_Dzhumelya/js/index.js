// Вправа №1 Копія масива 
// через метод slice()

// const arr = ['one', 10, 'name', 5, 'Nastya', 9];
// function arrayCopy (array) {
//     return array.slice();
// }
// const newCopyArr = arrayCopy(arr);
// console.log(newCopyArr);

// Вправа №2 
// const arrTwo = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// function arrayJoin (arr, delimite) {
//     return arr.join(delimite);
// }
// const arrNewJoin = arrayJoin(arrTwo, ' '); 
// console.log('"' + arrNewJoin + '"');

//  Вправа №3 
// const arrThree = [NaN, 0, 33, false, -51, '', undefined, 75, null];
// function removeFalsy (arr) {
//     return arr.filter((e) => e);
// }
// const arrNoFalsy = removeFalsy(arrThree);
// console.log(arrNoFalsy);

//  Вправа №4 залишив метод concat()
// function getWord2 () {
//     const arr1 = ['e', null, 'r'];
//     const arr2 = ['g', 'y'];
//     const arrUnite = arr1.concat(arr2);

//     arrUnite.unshift('p', 'o');
//     arrUnite.push('m', 'o', 'd', 'e' );
//     arrUnite.splice(2, 0, 'w');
//     arrUnite.splice(6,2);
//     arrUnite[6] = 'c';
//     return arrayJoin(removeFalsy(arrUnite), ' ');
// }
// console.log(getWord2());

// Вправа №5
// Вчитель через reduce()
// const mas2 = [['foo', 1], ['baz', 2], ['bar', 3]];

// function fromPairs (array) {
   
//     return array.reduce((acc, currValue) => {
//         return {
//             ...acc,
//             [currValue[0]]: currValue[1]
//         }
//     }, {});
// }
// console.log(fromPairs(mas2));

// const mas2 = [['foo', 1], ['baz', 2], ['bar', 3], ['car', 5]];

// function fromPairs (array) {
//     const objectFromArr = {};

//     for (let i = 0; i < array.length; i++) {
//         objectFromArr[array[i][0]] = array[i][1];
//     }
//     return objectFromArr;
// }
// console.log(fromPairs(mas2));

// мій варіант недолік 2 цикла
// const mas = [['foo', 1], ['baz', 2], ['bar', 3], ['car', 5]];
// function fromPairs (array) {
//     const objectFromArr = {};

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array[i].length; j++) {
//            objectFromArr[array[i][0]] = array[i][1];
//         }
//     }
//     return objectFromArr;
// }
// const ob = fromPairs(mas);
// console.log(ob);

// Вправа №6 
// через цикл
// function chunk(array, size) {
//     const result = [];
//     let part = [];    
//     for (let i = 0; i < array.length; i++) {
//         part.push(array[i]);
//         console.log(part);
//         if ((i + 1) % size === 0 || i === array.length-1) {
//             result.push(part);
//             part = [];
//         }
//     }
//     return result;
// }
// const arrSlice = chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3);
// console.log(arrSlice);

// Вправа №7 

function getIntersections (...arr) {
    const arrWithoutFirstIndex = arr.slice(1).flat(); 
    const arrNew = [];
    const arrFirst = arr[0].filter((e) => {
        if (e === arrWithoutFirstIndex[0]) {
            if (arrNew[0] !== e) {
                arrNew.push(e);
            }
            return e;
        }
        if (e === arrWithoutFirstIndex[1]) {
            if (arrNew[1] !== e) {
                arrNew.push(e);
            }
            return e;
        }
        if (e === arrWithoutFirstIndex[2]) {
            if (arrNew[2] !== e) {
                arrNew.push(e);
            }
            return e;
        }
        if (e === arrWithoutFirstIndex[3]) {
            if (arrNew[3] !== e) {
                arrNew.push(e);
            }
            return e;
        }
        if (e === arrWithoutFirstIndex[4]) {
            if (arrNew[4] !== e) {
                arrNew.push(e);
            }
            return e;
        }
        if (e === arrWithoutFirstIndex[5]) {
            if (arrNew[5] !== e) {
                arrNew.push(e);
            }
            return e;
        }
    });

    return arrNew;
}

const arr1 = [1, 2];
const arr2 = [2, 3];

const arr3 = ['a', 'b', 5];
const arr4 = ['b', 'c', '5'];
const arr5 = ['b', 'e', 'c', '5'];

const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];

console.log(getIntersections(arr1, arr2));
console.log(getIntersections(arr3, arr4, arr5));
console.log(getIntersections(arr6, arr7, arr8));

console.log(getIntersections([1,2,3,4,5],[4,5,6,7,8]));