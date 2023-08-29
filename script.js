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

function gameWords() {
    let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    array = array.sort(() => Math.random() - 0.5);
    alert(array);
    let word1 = prompt ('Каким было первое слово?');
    let word2 = prompt ('Каким было второе слово?');
    
    if (word1 === array[0] && word2 === array[6]) {
        alert('Вы угадали');
    } else if (word1 === array[0] || word2 === array[6]) {
        alert('Вы были близки к победе');
    } else{
        alert('Ответ не верный');
    }
    
}

