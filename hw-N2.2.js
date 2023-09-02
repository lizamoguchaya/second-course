 // задание 1//
 let a = 20;
 alert(a);

 //задание 2//
 let year = 2007;
 alert(year);

 //задание 3//
 let name = 'Brendan Eich';
 alert(name);

 //задание 4//
 let x = 10;
 let y = 2;
 let sum = x + y;
 alert(sum);
 let difference = x - y;
 alert(difference);
 let count = x * y;
 alert(count);
 let division = x / y; 
 alert(division);
 
 //задание 5//
 let f = 2;
 let g = 5;
 let result = 2 ** 5;
 alert(result);

 //задание 6//
 let ab = 9; 
 let b = 2;
 let mod = 9 % 2;
 alert(mod);

 // задание 7//
 let num = 1;
 num += 5;
 num -= 3;
 num *= 7;
 num /= 3;
 num += 1;
 num -= 1;
 alert(num);

 //задание 8//
 let age = prompt('Сколько вам лет?');
 alert(age)


 //задание 9//
 const user = { 
    name: "Bob",
    age: 25,
    isAdmin: true

 };
 user['city of residence'] = 'Moscow';
 user.age = 35;
 delete user['city of residence']

 let info = prompt('Какую информацию хотите узнать о пользователе?','Укажите name, age, isAdmin');
 alert(user[info]);
 console.log(user[info]);

 //задание 10// 
let Name = prompt('Как вас зовут?');
alert(`Привет,${Name}!`);
console.log(`Привет,${Name}!`)

