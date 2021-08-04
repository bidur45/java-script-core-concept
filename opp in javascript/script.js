
'use strict'


// constructer function
// const Person = function (firstName, lastName) {

//     this.firstName = firstName;
//     this.lastName = lastName;
  
//     if(firstName == 'Gorakh'){
//       console.log('hi');
//     }
//     console.log('This is regular funciton call');
//     this.calcage = function () {
//       console.log('Age calculated');
//     }
  
  
//   }
  
  
//   const achiever = new Person('Achiever', 'Groups');
//   const achieverNew = new Person('Santosh', 'Nepal');
  
  
//   console.log(achieverNew);
//   console.log(achiever);
  





  
  // prototype
  // const Person = function (firstName, lastName) {

  //   this.firstName = firstName;
  //   this.lastName = lastName;
  
    // if(firstName == 'Gorakh'){
    //   console.log('hi');
    // }
    // console.log('This is regular funciton call');
    // this.calcage = function () {
    //   console.log('Age calculated');
    // }
  
  
  // }
  
  
  // const achiever = new Person('Achiever', 'Groups');
  // const achieverNew = new Person('Santosh', 'Nepal');
  
  
  // console.log(achieverNew);
  // console.log(achiever);
  

  // console.log(Person.prototype)
// console.log(achiever)

// Person.prototype.calcage = function () {
//   console.log(2021 - 1991);
// }
// calcage();   


// console.log(achiever.__proto__ === Person.prototype)




// prototype inheretance
// const Person = function (firstName, lastName) {

//     this.firstName = firstName;
//     this.lastName = lastName;
  
    // if(firstName == 'Gorakh'){
    //   console.log('hi');
    // }
    // console.log('This is regular funciton call');
    // this.calcage = function () {
    //   console.log('Age calculated');
    // }
    // prototype
  
  // }
  
  
//   // const achiever = new Person('Achiever', 'Groups');
//   // const achieverNew = new Person('Santosh', 'Nepal');
  
//   // console.log(Person.prototype)
//   // console.log(achiever)
  
//   // Person.prototype.calcage = function () {
//   //   console.log(2021 - 1991);
//   // }
  
//   // console.log(typeof Person.prototype);
//   // achiever.calcage();
  
//   // console.log(achiever.hasOwnProperty('calcage'));
  
//   // console.log(achiever.__proto__.__proto__.__proto__)
  
//   // const arr = [3, 4, 4, 3, 6, 6];
//   // const arr = new Array(3, 4);
//   // console.log(arr);
  
//   // Array.prototype.unique = function() {
//   //   return [...new Set(this)]
//   // }
  
//   // console.log(arr.unique());
  
//   //es6 class

//   // Class expression
// // const PersonCl = class {}

// // Class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

// //   // Instance methods
// //   // Methods will be added to .prototype property
//   calcAge(){
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

// }

// const achiever = new PersonCl('Achiever Groups', 1996);
// // console.log(achiever);
// achiever.calcAge();
// achiever.age();
// achiever.greet();
// console.log(age);

// console.log(achiever.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// // achiever.greet();

// // const anyPerson = new PersonCl('Unknown Person', 1980);
// // PersonCl.hey();

//

// let heading = document.querySelector('#headding');
// console.log(heading);

   
// 'use strict';
// // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// const usdPayments = [60, 55, -70, 40, -149, 59]
// const usdToNpr = 117.54;

// const nprPayments = usdPayments.map(function(usd) {
//   return math.trunc(usd * usdToNpr);
//   });

// console.log(usdPayments);
// console.log('---Using Map---');
// console.log(nprPayments);

  // same situation using for of loop
//   console.log('---Using For of Loop---');
// const nprpaymentsfor = [];
// for(const usd of usdPayments) nprpaymentsfor.push(Math.trunc(usd * usdToNpr));

// console.log(nprpaymentsfor);

// // map is modern way of doing using functional programming
  // console.log('---Using Arrow---');
// const nprPaymentsArrow = usdPayments.map((usd) => Math.trunc(usd * usdToNpr));
// note there is no semicolon at the end of usdToNpr)
// https://stackoverflow.com/questions/50501047/one-line-arrow-functions-without-braces-cant-have-a-semicolon
// console.log(nprPaymentsArrow);
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// const paymentNote = usdPayments.map((usd, i, arr) =>
  // if ( usd < 55) {
  //   return `Payment number: ${i+1}, You should receive now the payment of ${usd}`;
  // } else {
  //   return `Payment number ${i+1}: You should receive payment after 1 month the payment of ${usd}`;
  // }

//   `Payment Number: ${i+1}, You ${usd >0 ? 'Deposit': 'Withdraw'} the payment of ${usd}`

// );
// console.log(paymentNote);

// side effect is created in for each method


// // Filter Methods
// const nprPaymentsFilter = usdPayments.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(nprPaymentsFilter);

// //Reduce Method
// // const balance = usdPayments.reduce(function (acc, cur, i, arr) {
// //   console.log(`Iteration ${i}: ${acc}`);
// //   return acc + cur;
// // }, 0);
// const balance = usdPayments.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);



// console.log('Task 1');
// const Car = function(currentSpeed,batteryCharge){
// this.currentSpeed = currentSpeed;
// this.batteryCharge = batteryCharge;
// };

//   Car.prototype.chargeBattery= function(chargeTo){
//    const batteryCharge = this.chargeTo;
//   }

   
//   Car.prototype.accelerate = function(){
//   const newAccelerate = this.currentSpeed +20;
//   const newCharge = this.batteryCharge -1;
//   console.log(`Tesla goinig at ${newAccelerate}Km/hr with a charge of ${newCharge}%. `);
//  }


// const EV = function(currentSpeed,batteryCharge){
//    Car.call(this, currentSpeed,batteryCharge);

// };


// Car.prototype = Object.create(EV.prototype);



// const electricCar = new Car(120,23,90);
// electricCar.accelerate();
// electricCar.chargeBattery();





console.log('Task2');
class  CarCl {
  constructor(currentSpeed,batteryCharge){
this.currentSpeed = currentSpeed;
this.batteryCharge = batteryCharge;

     getcharge= function(chargeTo){
    return this.batterycharge; 

 };

  accelerate = function(){
  const newAccelerate = this.currentSpeed +20;
  const newCharge = this.charge -1;
  console.log(`Tesla goinig at ${newAccelerate}Km/hr with a charge of ${newCharge}%. `);
  };

  brake = function(){
  
  };

};
};

  class EVCI extends CarCl{
  constructor(currentSpeed,batteryCharge){
     super(currentSpeed,batteryCharge);
  }
 }

// EVCI.prototype = Object.create(Carcl.prototype);

const electricCar = new CarCl(120,23,90);

electricCar.accelerate();
// electricCar.chargeBattery();
// electricCar.brake();


