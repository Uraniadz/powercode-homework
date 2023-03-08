// Вправа1

function sortDates(dates) {
    const arrDates = [];
    for (let i = 0; i < dates.length; i++) {
        arrDates.push(new Date(dates[i]));
    }
    const newArr = arrDates.sort((a,b) => a - b);
    
    return newArr;
    }
    
    const arrLocalStorage = sortDates(["2022-01-16T19:08:26.142Z", 1674068932372, '1/19/2021, 9:09:55 PM']);
    console.log(arrLocalStorage);

//  Вправа2

localStorage.setItem('Dates', JSON.stringify(arrLocalStorage));

// чере цикл for

for (let i = 0; i <localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}: ${JSON.parse(localStorage.getItem(key))}`);
}
//  через цикл for of

let keys = Object.keys(localStorage);
let value = Object.values(localStorage);

for (let key of keys) {
    console.log(`${key}: ${JSON.parse(value)}`);
}
localStorage.removeItem(keys);

// Вправа 3

const user = { name: 'Viktor' } 

function sayHi(greeting = `Hi`) { 
  console.log(`${greeting}, ${this.name}!`); 
}
sayHi.call(user);

function sayHello () {
    sayHi.call(user, 'Hello');
}
sayHello();
