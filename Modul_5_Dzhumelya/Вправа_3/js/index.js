function showMonth () {
    let months = prompt('Введіть місяць від 1 до 12', '');
    switch (months) {
        case '1':
            alert('Січень');
            break;
        case '2':
            alert('Лютий');
            break;
        case '3':
            alert('Березень');
            break;
        case '4':
            alert('Квітень');
            break;
        case '5':
            alert('Травень');
            break;
        case '6':
            alert('Червень');
            break;
        case '7':
            alert('Липень');
            break;
        case '8':
            alert('Серпень');
            break;
        case '9':
            alert('Вересень');
            break;
        case '10':
            alert('Жовтень');
            break;
        case '11':
            alert('Листопад');
            break;
        case '12':
            alert('Грудень');
            break;
        default:
            alert(!months?'No months':'Invalid month'); // варіант вчителя Віктора Бойко
            // (months === ''|| months === null)? alert('No month'):alert('Invalid month'); // Мій другий варіант
        //    let message = (months === null)? alert('No month'):alert('Invalid month'); // Мій варіант
            break;
    }
}
showMonth();
