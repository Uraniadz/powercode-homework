// Вправа №1 Копія масива через метод concat()

const arr = ['one', 10, 'name', 5, 'Nastya', 9];

function arrayCopy () {
    return arr.concat();
}
const newCopyArr = arrayCopy();
console.log(newCopyArr);

// Вправа №2 

const arrTwo = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

function arrayJoin (arr) {
    return arr.join(' ');
}
const arrNewJoin = arrayJoin(arrTwo); 
console.log('"' + arrNewJoin + '"');

//  Вправа №3 

const arrThree = [NaN, 0, 33, false, -51, '', undefined, 75, null];
function removeFalsy (arr) {
    return arr.filter((e) => e);
}
const arrNoFalsy = removeFalsy(arrThree);
console.log(arrNoFalsy);

//  Вправа №4 Два варіанта

// Через цикл for
function getWord () {
    const arr1 = ['e', null, 'r'];
    const arr2 = ['g', 'y'];
    const arrUnite = [];
    for (let i = 0; i< arr1.length; i++) {
       arrUnite.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        arrUnite.push(arr2[j]);
    }
    arrUnite.unshift('p', 'o');
    arrUnite.push('m', 'o', 'd', 'e' );
    arrUnite.splice(2, 0, 'w');
    arrUnite.splice(6,2);
    arrUnite[6] = 'c';
    return arrayJoin(removeFalsy(arrUnite));
}
const arrNewUnite = getWord();
console.log(arrNewUnite);

// Через метод concat()
function getWord2 () {
    const arr1 = ['e', null, 'r'];
    const arr2 = ['g', 'y'];
    const arrUnite = [];
    const newArr = arrUnite.concat(arr1);
    const newArr2 = newArr.concat(arr2);

    newArr2.unshift('p', 'o');
    newArr2.push('m', 'o', 'd', 'e' );
    newArr2.splice(2, 0, 'w');
    newArr2.splice(6,2);
    newArr2[6] = 'c';
    return arrayJoin(removeFalsy(newArr2));
}
const arrNewUnite2 = getWord2();
console.log(arrNewUnite2);

// Вправа №5 Ще думаю як зробити...

// Вправа №6 

function chunk(array, size) {
    const newArr = [];
    if (size === 3) {
        const part1 = array.splice(0,3);
        const part2 = array.splice(0,3);
        const part3 = array.splice(0,2); 
        newArr[0] = part1;
        newArr[1] = part2;
        newArr[2] = part3;
    }
    return newArr;  
}
chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3);
console.log(JSON.stringify(chunk(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3)));

// Вправа №7 Ще думаю як зробити...