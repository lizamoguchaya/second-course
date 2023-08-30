// 1. Преобразуйте строку js в верхний регистр JS. // 

const string = 'строка'; 

console.log(string.toUpperCase());

// 2. Создайте функцию, которая в качестве параметров принимает массив строк и строку. Возвращать данная функция должна новый массив, содержащий только те элементы переданного массива, которые начинаются с переданной строки. Регистр символов не должен влиять. //

const animals = ['кошка', 'кит', 'комар', 'носорог'];
const search = 'ко';

animals.forEach((animals) => {
    if (animals.toLowerCase().includes(search.toLowerCase())){
        console.log(animals);
    }

});

// 3. Округлите число 32.58884 // 
// меньшее целое :// 
const number = 32.58884;
function getMinInt(){
    return Math.floor(number)
}
console.log(getMinInt());
//большее целое ://
function getMaxInt(){
    return Math.ceil(number)
}
console.log(getMaxInt());

//ближайшее целое://
function getRandomInt(){
    return Math.round(number)
}
console.log(getRandomInt());

// 4. Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел наименьшее и наибольшее числа и вывести их в консоль.//


function minmax(...numbers) {
    return [Math.max(...numbers), Math.min(...numbers)];
}
console.log(minmax(52, 53, 49, 77, 21, 32));

// 5. Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10. // 

function RandomInt(minValue, maxValue){
    return Math.round(Math.random() * (maxValue - minValue));
}

console.log(RandomInt(1, 10));

// 6. Напишите функцию, которая будет принимать на вход целое число, а возвращать массив случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза меньше переданного числа. //

const getRandomArrNumbers = (number) => {
    let resultArray = [];
    for (i = 1; i <= (number / 2); i++) {
        resultArray.push(Math.round(Math.random() * number));
    }
    return resultArray;
}
console.log(getRandomArrNumbers(12));


// 7. Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата возвращает случайное целое число в этом диапазоне.//

function RandomNumbers(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

console.log(RandomNumbers(2, 7));

// 8. Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех рассмотренных в уроке способов.

let myDate = new Date();
console.log(myDate);

// 9. Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая наступит через 73 дня после текущей.

let currentDate = new Date (); 
currentDate.setDate(73);
console.log(currentDate);

// 10. Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде: 
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let thisDate = new Date ();
let minute = myDate.getMinutes(); 
let second = myDate.getSeconds();
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
" " + myDate.getFullYear() + ", " + days[myDate.getDay()] + " " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
 if (minute < 10) {
    minute = "0" + minute;
 }
 if (second < 10) {
    second = "0" + second;
}

console.log(fullDate);

