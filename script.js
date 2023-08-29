function gameSeasons() {
    let monthNumber = Number(prompt('Введите номер месяца'));
    function seasons(number) {
    if (number <= 0 || number >= 13) {
        return "Вы ввели что-то не то"
    }  else if (number === 1 || number === 2 || number === 12) {
        alert ('Зима');
    } else if (number === 3 || number === 4 || number === 5) {
        alert ('Весна');
    } else if (number === 6 || number === 7 || number === 8) {
        alert ('Лето');
    } else if (number === 9 || number === 10 || number === 11) {
        alert ('Зима');
    }
   }
   seasons(monthNumber);
} 

