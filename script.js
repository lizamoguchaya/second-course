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

let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
 let result = array.sort(() => Math.random() - 0.5);


function rememberWords(){

    alert(`Посмотрите на список фруктов, запомните порядок и нажмите "Ok" чтобы продолжить: ${result}`);

    let firstQuest = prompt("Введите название первого фрукта из списка?");
    let secondQuest = prompt("Введите название последнего фрукта из списка?");
    
    if (!firstQuest || !secondQuest) {
        alert("Вы ничего не ввели");
      } else if (firstQuest.toLowerCase() === result[0].toLowerCase() && secondQuest.toLowerCase() === result[result.length - 1].toLowerCase()) {
        alert("Поздравляю, Вы угадали!");
      } else if (firstQuest.toLowerCase() === result[0].toLowerCase() || secondQuest.toLowerCase() === result[result.length - 1].toLowerCase()) {
        alert("Вы были близки к победе!");
      } else {
        alert("Вы ответили не верно");
      }
    }


