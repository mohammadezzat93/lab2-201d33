
// 'use strict';


let userName = prompt('what\'s Your Name ? ');
console.log('Welcome ' + userName);
alert('Welcome ' + userName);

let age = prompt('what\'s Your Age ? ');
console.log('Your Age is : ' + age);
alert('Hi ' + userName + ' Your Age is : ' + age);

let Country = prompt('Where Are You From ? ');
console.log('Your Country: ' + Country);
alert('Hi ' + userName + ' Your Country is : ' + Country);

let sport = prompt('what\'s Your Favorite Sport ? ');
console.log('Your Country: ' + sport);
alert('Hi ' + userName + ' Your Country is : ' + sport);

// document.write("<hr>" + "<br>" + "<h4>" + "Your Name : " + '<span>' + userName + '</span>' + "</h4>")
// document.write("<hr>" + "<br>" + "<h4>" + "Your Age : " + '<span>' + age + '</span>' + "</h4>")
// document.write("<hr>" + "<br>" + "<h4>" + "Your Country : " + '<span>' + Country + '</span>' + "</h4>")
// document.write("<hr>" + "<br>" + "<h4>" + "Your Favorite Sport : " + '<span>' + sport + '</span>' + "</h4>")



//           ***************   Q1  ****************

let count = 0;

let check_natural = prompt("Are you human ? (yes , y , no , n) ")
check_natural = check_natural.toLowerCase();

function question_1(){


while (!check_natural) {
  check_natural = prompt("Please write anything");
}

if (check_natural === 'yes' || check_natural === 'y') {
  alert('Welcome ' + userName + ' You can play with me');
  count++;
  console.log('Q1 : ', count);
}
else if (check_natural === 'no' || check_natural === 'n') {
  alert('Welcome ' + userName + ' Sorry we can not be continued');
  console.log('Q1 : ', count);
}
else {
  alert("Wrong Answer , not valid");
}
}
question_1();

//           ***************   Q2   ****************

let friend = prompt("Am I your friend ? (yes , y , no , n) ")
friend = friend.toLowerCase();

function question_2(){

while (!friend) {
  friend = prompt("Please write anything");

}

if (friend === 'yes' || friend === 'y') {
  alert('Welcome ' + userName + ' you are my friend.');
  count++;
  console.log('Q2 : ', count);
}
else if (friend === 'no' || friend === 'n') {
  alert('Welcome ' + userName + ' I am Sad');
  console.log('Q2 : ', count);
}
else {
  alert("Wrong Answer , not valid");
}
}
question_2();

//           ***************   Q3  ****************

let smoke = prompt("Do you smoke ? (yes , y , no , n) ")
smoke = smoke.toLowerCase();

function question_3(){

while (!smoke) {
  smoke = prompt("Please write anything");

}

if (smoke === 'yes' || smoke === 'y') {
  alert('Welcome ' + userName + ' it hurt your health.');
  console.log('Q3 : ', count);
}
else if (smoke === 'no' || smoke === 'n') {
  alert('Welcome ' + userName + ' you are a healthy person');
  count++;
  console.log('Q3 : ', count);
}
else {
  alert("Wrong Answer , not valid");
}
}
question_3();

//           ***************   Q4  ****************

let vegetarian = prompt("Are you a vegetarian ? (yes , y , no , n) ")
vegetarian = vegetarian.toLowerCase();

function question_4(){

while (!vegetarian) {
  vegetarian = prompt("Please write anything");

}

if (vegetarian === 'yes' || vegetarian === 'y') {
  alert('Welcome ' + userName + ' you are a healthy person');
  count++;
  console.log('Q4 : ', count);
}
else if (vegetarian === 'no' || vegetarian === 'n') {
  alert('Welcome ' + userName + ' Try not to eat too much meat');
  console.log('Q4 : ', count);
}
else {
  alert("Wrong Answer , not valid");
}
}
question_4();

//           ***************   Q5  ****************

let help = prompt("Do you like to help others ? (yes , y , no , n) ")
help = help.toLowerCase();

function question_5(){

while (!help) {
  help = prompt("Please write anything");

}

if (help === 'yes' || help === 'y') {
  alert('Welcome ' + userName + ' you are a good person');
  count++;
  console.log('Q5 : ', count);
}
else if (help === 'no' || help === 'n') {
  alert('Welcome ' + userName + ' you are wrong');
  console.log('Q5 : ', count);
}
else {
  alert("Wrong Answer , not valid");
}
}
question_5();

// document.write("<hr>" + "<br>" + "<h3>" + "question mark 5 : " + count1 + "</h3>")

// ***************   Q6  ****************

function question_6(){

let counter = 0;

if (counter === 4) {
  alert('Sorry you run out of guesses');
}
while (counter < 4 && number !== 60) {
  var number = parseInt(prompt('Guess number'));
  if (number > 60) {
    alert('You are too high! Guess again');
    counter++;
  } else if (number < 60) {
    alert('You are too low! Guess again');
    counter++;
  }

}


if (number === 60) {
  alert('That is correct! The number is 60');
  console.log('Q6 : ', count);
  count++;
  ;
}
}
question_6();

alert('The correct number is 60');

//           ***************   Q7   ****************


function question_7(){

let myProgramminglanguage = ['java', 'javascript', 'c++', 'c#', 'python'];
let i = 0
let j = 0
for (i = 0; i < 6; i++) {
  let myprog = prompt('guess my Programming language ?');
  myprog = myprog.toLowerCase();

  for (j = 0; j < myProgramminglanguage.length; j++) {
    if (myprog === myProgramminglanguage[j]) {
      alert('very good , is Right ');
      console.log(myProgramminglanguage[j]);
      count++;
      i = 6;
      break;
    }

  }
  if (i !== 6) {
    alert('wrong answer, try again');
  }
}
}
question_7();

alert('My Programming language : java, javascript, c++, c#, python');

alert(`you have a score of ${count} / 7`);



// ********************************************************************************************************************

//   lab03:

// let favouriteFood=prompt('is mlokheyeh my favourite?');

// console.log('before',favouriteFood);

// favouriteFood=favouriteFood.toUpperCase();
// 'YES'
// 'yes'==='YES';
// switch(favouriteFood){
//     case 'YES':
//     case 'Y':
//         alert('no you are wrong');
//         console.log('favourite food',favouriteFood);
//         break;
//     case 'NO':
//     case 'N':
//         alert('good job');
//         break;
//     default:
//         alert('please answer with yes/y or no/n');
//         break;
// }

// console.log(favouriteFood);

//===================================================================================


// break: it stop the loop from looping

// continue: it skips this iteration

// for (let i = 0; i < 5; i++) {
//     // 0
//     console.log(i);
//     // if (i===4) {
//     //     break;
//     // }

//     if (i===2) {
//        continue;
//     }
    
//     console.log('hello');
// }

//===================================================================================

// do while loop
// code will run once even if condition is false

// if condition is true it will keep running

// let i=5;

// do{
//   console.log('hello from do while');
// }while(i>10);

//===================================================================================

// let grade1=50;
// let grade2=100;
// let grade3=200;

// let grades=[50,89,60,24,50,100];

// let names=['reem','ahmad','noor'];
// 0   1   2

// console.log('the whole array',grades);

// console.log('the first element',grades[0]);

// console.log('the fourth element',grades[3]);

// print the index of a value
// console.log('get index of the value 60',grades.indexOf(60));

// console.log(names.indexOf('noor'));


// print length
// console.log(grades.length);

// add elements at the end of the array:


// console.log('before',grades);

// grades.push(33);



// remove the element from the end:

// grades.pop();

// console.log('after',grades);


//============================================================================

// global scoped variable
// let userInput=prompt('whats your name');

// function getName(userName) {
//     // locally scoped 
//     let output='hello '+ userName;
//     let output2='goodbye';
    
//     return [output ,output2];
    
//     console.log('hello');


// }

// // alert(output);
// console.log('all of the values',getName(userInput)); 
// console.log('first',getName(userInput)[0]); 
// console.log('second',getName(userInput)[1]); 

//============================================================================




// ********************************************************************************************************************
