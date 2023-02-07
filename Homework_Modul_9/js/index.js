// 1. Повертати список коментарів
function getComments() {
    fetch('https://jsonplaceholder.typicode.com/comments/')
    .then((response) => response.json())
    .then((json) => console.log(json))
}
getComments()

// 2. Робота з пошуком коментарів

function getComments2(pageNumber, commentsCount) {
    let index = commentsCount * pageNumber - commentsCount;
    let diapazone = pageNumber * commentsCount;
    // console.log(index)
    // console.log(diapazone)
    try {
    fetch('https://jsonplaceholder.typicode.com/comments/')
    .then((response) => response.json())
    .then((json) => {
        if (pageNumber < 1 || commentsCount < 0) {
            throw new Error('No validate number');
        }else {
        console.log(json.filter((e, i) =>  i >= (index) && i < (diapazone)))
        }
        }
    )
    }catch {
    }  
}
getComments2(1, 10);
getComments2(2, 10);
getComments2(3, 20);
getComments2(100, 10);