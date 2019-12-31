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
var x , y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// more operators
// x *= 2;
// console.log(x);

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

var height;
 height = 0;

if (height || height === 0 ) {
  console.log('Variable is defined');
} else {
  console.log('Variable has not been defined');
}
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

// var johnAvg = (89 + 120 + 103) / 3;
// console.log('Johns Avg Score: ' + johnAvg);
//
// var mikeAvg = (89 + 120 + 103) / 3;
// console.log('Mike Avg Score: ' + mikeAvg);
//
// var maryAvg = (97 + 134 + 105) / 3;
// console.log('Mary Avg Score: ' + maryAvg);
//
// // if (mikeAvg > johnAvg) {
// //   console.log('Mike is the winner with an avg of: ' + mikeAvg);
// // } else if (mikeAvg < johnAvg) {
// //   console.log('John is the winner with an avg of: ' + johnAvg);
// // } else {
// //   console.log('Its a draw, everyone gets a trophy');
// // }
//
// //note: this doesnt cover every single situation here. Only where there is a clear winner.
// if (johnAvg > mikeAvg && johnAvg > maryAvg) {
//   console.log('John is the winner with an avg of: ' + johnAvg);
// } else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
//   console.log('Mike is the winner with an avg of: ' + mikeAvg);
// } else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
//   console.log('Mary is the winner with an avg of: ' + maryAvg);
// } else {
//   console.log('Its a draw, everyone gets a trophy');
// }





/*************************************************************
* Functions
*/

// function calculateAge (birthYear) {
//   return 2018 - birthYear;
// }
//
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
//
// console.log(ageJohn,ageMike,ageJane );
//
//

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//
//  if (retirement > 0 ) {
//      console.log(firstName + ' retires in ' + retirement + ' years.');
//  } else {
//         console.log(firstName + ' is already retired on the beach.');
//  }
// }
//
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');
//



/*************************************************************
* Function statements and Expressions
*/
//
// // function declaration
// function whatDoYouDo (job, firstName){}
//
//
// // function expression
// var whatDoYouDo = function(job, firstName) {
//   switch(job) {
//     case 'teacher':
//       return firstName + ' teaches kids how to code';
//     case 'driver':
//       return firstName + ' drives a cab in Lisbon';
//     case 'designer':
//       return firstName + ' designs beautiful websites';
//     default:
//       return firstName + ' does something else';
//   }
// }
//
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));
//

//statement vs expressions
// expressions are peices of code that always return a single result
// ex. 2+5 is an expression
// the function call whatDoYouDo returns an expression
// scoreJohn > scoreMike is an expressions

// statements preform an action
// do things but do not produce an immediate values
// if else statements



/*************************************************************
* Arrays
*/
//initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
// //arrays are zero based. John = 0, mark = 1 ....
// console.log(names[0]);
// console.log(names);
// console.log(names.length);
//
// // mutate array
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);
//
// //different data types
// var john = ['John', 'Smith', 1990, 'designer', false];
// push adds element to the end of the array
// we will learn more  about it in future lessons
// john.push('blue');
// //unshift adds the element to the first element in the array
// john.unshift('Mr.');
// // pop removes the last element in the array
// john.pop();
// john.pop();
// // shift removes the last element in the array
// john.shift();
// console.log(john);

// //index of returns the 3position of the element in the array
// // will return -1 if the element isnt present in the arrays
// // helpful to test if an element is in an array
// console.log(john.indexOf(23));
//
// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
// console.log(isDesigner);
//

/*************************************************************
* Codeing Challenge 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48, $268.
To tip the waiter a fair amoint , John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than 50, 15% when the bill is between 50 and 200,
and 10% if the bill is more than 200.

In the end, John would like to have 2 arrays:
1) containing all three tips (one for each bill)
2) containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multipy it with 20/100 = /2)
*/


// function tipCalc (billAmount){
//   var percent;
//
//   if (billAmount < 50){
//     percent = .2;
//   } else if (billAmount >= 50 && billAmount < 200) {
//     percent = .15;
//   } else {
//     percent = .1;
//   }
//
//   return billAmount * percent;
// }
//
// var bills = [124, 48, 268];
//
// var tips = [tipCalc(bills[0]),
//             tipCalc(bills[1]),
//             tipCalc(bills[2])];
//
// var total = [bills[0] + tips[0],
//              bills[1] + tips[1],
//              bills[2] + tips[2] ];
//
// console.log(bills);
// console.log(tips);
// console.log(total);



/****************************************
* Object and Properties
*/

// objects define key value pairs
// can use objects to group objects that belong together with no particular order
// arrays - order matters
// objects - order doesnt matters

// // Object Literal
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'Teacher',
//   isMarried: false
// };
//
// console.log(john);
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);
//
//
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);
//
// // New object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/****************************************
* Object and Methods
*/

// // Object Literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'Teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//       }
//     };
//
//     john.calcAge();
//     console.log(john);
//
//
//

/****************************************
* Coding Challenge 4
*/
/*
Lets rememver the first coding challenge where Mark and John compared their BMI's. Lets now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height.
2. The, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with teh full name and the respective BMI. Dont forget, they might have the same BMI.

remember: BMI = mass / height ^2 = mass / (height * height). mass in kg and height in meters).

*/

//
// var john = {
//   fullName: 'John Smith',
//   mass: 10, //kg
//   height: 2, //m
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
//
//
// var mark = {
//   fullName: 'Mark Thomson',
//   mass: 105, //kg
//   height: 5, //m
//   calcBMI: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };
//
//  console.log(john.bmi);
//  console.log(mark.bmi);
//
//
// if (john.calcBMI() > mark.calcBMI() ) {
//   console.log('John has a higher BMI of: ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//  console.log('Mark has a higher BMI of: ' + mark.bmi);
// } else {
//   console.log('Its a draw, everyone gets a trophy');
// }


/****************************************
* Loops and Iterations
*/
// //for loop
// for (var i = 0; i <= 20 ; i += 2 ){
//   console.log(i);
// }
//
// // i = 0, 0 < 10 true, log I to console, i ++
// // i = 1, 1 < 10 true, log i to console, i ++
// //...
// // i = 9, 9 < 10 true, log i to console, i ++
// // i = 10, 10 < 10 false, exit the loop
//
// // log all items of an array
// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i ++) {
//   console.log(john[i]);
// }
//
// // while loop
// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// continue and break statements
// continue the loop but dont print the array variables that arent strings
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i ++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }
// //once you hit an array variable that isnt a string, exit the loop entirely
// for (var i = 0; i < john.length; i ++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }


// // looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }


/****************************************
* Coding Challenge 5
*/

/*
Remember the tip calculator challenge? Lets create a more advanced version
using everything we've learned!

This time, john and his family went to 5 differnet restaurants. The bills were
$124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than %50, 15% when the
bill is between %50 and $200 and 10% if the bill is more than $200/

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create
  1) a new array containing all tips, and
  2) an array containing final paid amounts (bill + tip).
Hint: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants.
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill
is between $100 and #300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules.
6. Create a function (not a method) to calculate the average of
a given array of tips. HINT: Loop over the array and in each iteration
store the current sum in a variable (starting from 0). After you
have the sum of the array, divide it by the number of elements in it ( thats how you calculate the average.)
7. Calculate the average tip for each family
8. Log the console which family paid the highest tips on average

*/


// Object Literal
var john = {
  fullName: 'John Smith',
  billAmount: [124,48, 268, 180, 42],
  calcTip: function() {
//calculate tip amount based on bill amount
      this.tipAmount = [];
      this.totalAmount = [];

      for(var i = 0; i < this.billAmount.length; i++) {
        //this.billAmount[i] * x; x is variable dependent on what the bill amount is. Create an if else statement for the percentage
        var percentage;
        var billAmount = this.billAmount[i]

        if(billAmount < 50 ) {
          percentage = .2;
        } else if (billAmount >= 50 && billAmount < 200) {
          percentage = .15;
        } else {
          percentage = .1;
        }

        this.tipAmount[i] = billAmount * percentage;
        this.totalAmount[i] = billAmount + (billAmount * percentage);
      }
    }
}

john.calcTip();
console.log(john)










    // function tipCalc (billAmount){
