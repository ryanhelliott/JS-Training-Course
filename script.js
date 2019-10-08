/***********************************************
this lecture was about variables and data types
************************************************/
// var firstName = 'John';
// console.log(firstName);
//
// var lastName = 'Smith';
// var age = 28;
//
// var fullAge = true;
// console.log(fullAge);
//
// var job;
// console.log(job);
//
// job = 'Teacher';
// console.log(job);

/***************************************
variable mutation and type coercion
****************************************/
// var firstName = 'John';
// var age = '28';
// //type coercion
// //javascript auto converts data types as needed
// console.log(firstName + ' ' + age);
//
// var job, isMarried;
// job = 'teacher';
// isMarried = false;
//
// console.log(firstName + ' is a ' + age + ' year old ' + job
//   + '. Is he married? ' + isMarried);
//
// //Variable mutation
// age = 'twenty eight';
// job = 'driver';
//
// alert(firstName + ' is a ' + age + ' year old ' + job
//   + '. Is he married? ' + isMarried);
//
// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/*********************************
* basic operators
*/
// var now, yearJohn, yearMark;
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// //math operators
// yearJohn = now - 28;
// yearMark = now - 33;
// console.log(yearJohn);
// console.log(yearMark);
//
// console.log(now + 2);
// console.log(now * 2);
// console.log(now /  10);
//
// //logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);
//
// // typeOf operators
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than john');
// var x;
// console.log(typeof x);


/************************************************
* operator precedence
*/
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;
//
// //multiple operators
// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);
//
// //grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2
// console.log(average);
//
// // multiple assignments
// var x , y;
// x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);
//
// // more operators
// x *= 2;
// console.log(x);
//
// x += 10 ;
// console.log(x);
//
// x = x + 1;
// x += 1;
// x++;
// console.log(x);
//

/************************************************
* Coding Challenge 1
*/

/*
Mark and john are trying to compare their BMI (Body Mass Index), which is:
BMI = mass / height^2 = mass / (height * height).
(mass in KG and height in Meter).

1.Store mark and johns mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether mark has a higher BMI than john.
4. Pring a string to the console containing the variable from step 3.
  (something like "is marks BMI( higher than johns? true )")
*/


// var markMass = 34; //kg
// var markHeight = 3; //meters
// var markBMI = markMass / (markHeight * markHeight);
// console.log('mark:' + markBMI);
//
// var johnMass = 26; //kg
// var johnHeight = 5; //meters
// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log('john:' + johnBMI);
//

//var isJohnHigher = johnBMI > markBMI;s
//console.log('Is john\'s bmi higher than mark\'s? ' + isJohnHigher);

/************************************************
* if/ else statements
*/

// var firstName = 'John';
// var civilStatus = 'single';
//
// if(civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon.');
// }
//
// var isMarried = true;
// if(isMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon.');
// }
//
//
// var markMass = 34; //kg
// var markHeight = 3; //meters
// var markBMI = markMass / (markHeight * markHeight);
// // console.log('mark:' + markBMI);
//
// var johnMass = 26; //kg
// var johnHeight = 5; //meters
// var johnBMI = johnMass / (johnHeight * johnHeight);
// // console.log('john:' + johnBMI);
//
// if (markBMI > johnBMI) {
//   console.log('mark\'s BMI is higher than John\'s')
// }  else {
//     console.log('John\'s BMI is higher than Mark\'s')
// }


/************************************************
* boolean logic
*/

// var firstName = 'John';
// var age = 20;
//
// if (age < 13){
//   console.log(firstName + ' is a boy');
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man');
// } else {
//   console.log(firstName + ' is a man');
// }


/************************************************
* Ternrary Operator and Switch Statements
*/
//
// var firstName = 'John';
// var age = 16;

// Ternrary opererator
// age >= 18 ? console.log(firstName + ' drinks beer.')
//   : console.log(firstName + ' drinks juice.')
//
// var  drink = age > 18 ? 'beer' : 'juice'
// console.log(firstName + ' drinks ' + drink);
// ternary operator replaces this if else statement
// if (age > = 18) {
//   var drink = 'beer';
// } else {
//   var drink = 'juice';
// }

//Swich Statement
// var job = 'instructor';
// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + ' teaches kids how to code.');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives an uber in Lisbon.');
//     break;
//   case 'designer':
//     console.log(firstName + ' designs beautiful websites.');
//     break;
//   default:
//     console.log(firstName + ' does something else.');
// }
//
//
// var age = 40;
// switch(true){
//   case age < 13:
//     console.log(firstName + ' is a boy');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenager');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young man');
//     break;
//   default:
//     console.log(firstName + ' is a man');
// }


//the above switch replaces the if else below!
// if (age < 13){
//   console.log(firstName + ' is a boy');
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young man');
// } else {
//   console.log(firstName + ' is a man');
// }

/************************************************
* Truthy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0 , '', NaN (not a number)
// truthy values: all values that are not falsy

// var height;
// height = 23;
//
// if (height || height === 0 ) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has not been defined');
// }
//
// // equality operators
//
// if (height === '23') {
//   console.log ('the == operator does type coercion!');
// }

/*************************************************************
* Coding Challenge 2
*/

/*
John and Mike both play basketball in diferent teams.
In the latest 3 games, John's team scored 89, 120,103 points.
While Mikes team scored 116, 94, and 123 points.

1.calculate the average score for each team.
2. decide which teams wins in the average (highest average score)
  , and print the winner to the console.
  Also include the average score in the output.
3. Then change the scores to show different winners.
  Don't forget to take into account there might be a draw(the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
  Like before, log the average winner to the console.
  HINT: You will need the && operator to take the decision.
  If you cant solve this one watch the solution.
5. Like before, change the scores to generate different winners,
  Keeping in mind there might be draws.
*/

var johnAvg = (89 + 120 + 103) / 3;
console.log('Johns Avg Score: ' + johnAvg);

var mikeAvg = (89 + 120 + 103) / 3;
console.log('Mike Avg Score: ' + mikeAvg);

var maryAvg = (97 + 134 + 105) / 3;
console.log('Mary Avg Score: ' + maryAvg);

// if (mikeAvg > johnAvg) {
//   console.log('Mike is the winner with an avg of: ' + mikeAvg);
// } else if (mikeAvg < johnAvg) {
//   console.log('John is the winner with an avg of: ' + johnAvg);
// } else {
//   console.log('Its a draw, everyone gets a trophy');
// }

//note: this doesnt cover every single situation here. Only where there is a clear winner.
if (johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log('John is the winner with an avg of: ' + johnAvg);
} else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
  console.log('Mike is the winner with an avg of: ' + mikeAvg);
} else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
  console.log('Mary is the winner with an avg of: ' + maryAvg);
} else {
  console.log('Its a draw, everyone gets a trophy');
}
