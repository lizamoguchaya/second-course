//задание 1//

let password = 'Пароль';
let user = prompt('Введите пароль');

if (user === password) {
    alert('Пароль введен верно'); 
} else { 
    alert('Пароль введен неправильно');
}

//задание 2//

const c = 2;
if (c>0 && c<10) {
    console.log('Верно');
    
} else {
    console.log('Не верно');
    
}

//задание 3// 

let d = 130;
let e = 70; 

if (d > 100 || e > 100) {
    console.log('Верно');
    
} else {
    console.log('Не верно');
    
}

//задание 4// 
 let a = '2';
 let b = '3';

 alert((Number(a))+(Number(b)));

//задание 5// 

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '1':
        console.log('зима');
        break;
    case '2':
        console.log('зима');
         break;
    case '3':
         console.log('весна');
         break;     
    case '4':
        console.log('весна');
         break; 
    case '5':
        console.log('весна');
         break;   
    case '6':
        console.log('лето');
         break; 
    case '7':
        console.log('лето');
        break; 
    case '8':
        console.log('лето');
         break; 
    case '9':
        console.log('осень');
         break; 
    case '10':
        console.log('осень');
         break;    
    case '11':
        console.log('осень');
         break;  
    case '12':
        console.log('зима');
        break;  
    default :
       console.log('Вы ввели что-то не то');
        break;
}

