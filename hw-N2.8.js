// 1. С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.//

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
  people.sort(function(a,b){
  if(a.age > b.age) {
    return 1;
  }
  if(a.age < b.age){
    return -1;
  }
 });
 
 console.log(people);


// 2. //
function isPositive(number) {
   return number > 0; 
   }
   function isMale(genderOfPeople) {
   return genderOfPeople.gender === 'male'; 
   }
   function filter(array, ruleFunction) {
      return array.map((item) =>{
         if(ruleFunction(item)){
            return item;
         }
      }).filter((item) => {
         return item !== undefined;
      });
   }
   
   console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
   
   const genderOfPeople = [
      {name: 'Глеб', gender: 'male'},
      {name: 'Анна', gender: 'female'},
      {name: 'Олег', gender: 'male'},
      {name: 'Оксана', gender: 'female'}
   ];
   
   console.log(filter(genderOfPeople, isMale));
 
    

//3. Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд прошло».//

let timerId = setInterval(() => console.log(new Date()), 3000);
setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, 30000);

console.log(timerId);

//4. // 
function delayForSecond(callback) {
   setTimeout(callback, 1000);
}
delayForSecond(function () {
  console.log('Привет, Глеб!');
})


//5. //

function delayForSecond(cb) {
   setTimeout(() => {
       console.log('Прошла одна секунда');
           if(cb) { 	cb(); }

   }, 1000)
}
function sayHi (name) {
   console.log(`Привет, ${name}!`);
}
delayForSecond(function(){(sayHi('Глеб'))});



