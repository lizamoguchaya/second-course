// 1. Напишите функцию, которая возвращает меньшее из 2 чисел. Например, из двух чисел — 8 и 4 — функция должна вернуть 4. Если передадим 6 и 6, то функция должна вернуть 6. // 
min(8, 4) == 4;
function min(a, b) { 
    if (a < b) {
    return a;
    } else {
        return b;
    }
}
console.log(min(8,4));

// 2. Напишите функцию, которая принимает число, а возвращает строку 'Число четное', если число четное, 'Число нечетное' — если нечетное.

function even_odd(result) {
    if (result % 2 === 0 ) {
    return "Число четное";
    } else { 
        return "Число нечетное";
    }
}
console.log(even_odd(5));

// 3. //
function calc(num) {
    let mult = num * 2;
    console.log(mult);
}
calc(5);

function square(number) {
    return number * number;
}
let result = square(3);
console.log(result);

// 4. //

function age() {
    let userAge = prompt('Сколько вам лет?');
    if (userAge < 0) {
       alert('Вы ввели что-то не то');
    } else if (userAge <= 12) {
        alert('Привет,друг!');
    } else if (userAge >= 13) 
        alert('Добро пожаловать!');
    
}
age('Сколько вам лет?')

// 5. //

let mult = (a, b) => {

    if(isNaN(a) || isNaN(b)){
        return "Одно или оба значения не являются числом";
    }else{
        return a * b;
    }
}

console.log(mult(2, 5));

// 6. // 

let Cube = (a) => {
    if (isNaN(a)){
        return "Переданный пример не является числом";
    } else {
        let result = a ** 3;
        return `${a} в кубе равняется ${result}`;
    }
}

console.log(Cube(3));


// 7. // 
function getCircleArea() {
    return this.radius ** 2 * this.letPi;
}
function getCirclePerimetr(paras) {
    return this.letPi * 2 * this.radius;
}
const circle1 = {
    radius: 3,
    letPi: 3.14,
    getArea: getCircleArea,
    getPerimetr: getCirclePerimetr
}
const circle2 = {
    radius: 7,
    letPi: 3.14,
    getArea: getCircleArea,
    getPerimetr: getCirclePerimetr
}
console.log(`Площадь первой окружности равна${circle1.getArea()}`);
console.log(`Площадь второй окружности равна${circle2.getArea()}`);
console.log(`Периметр первой окружности равен ${circle1.getPerimetr()}`);
console.log(`Периметр второй окружности равен ${circle2.getPerimetr()}`);