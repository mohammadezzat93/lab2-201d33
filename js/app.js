
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

document.write("<hr>" + "<br>" + "<h4>" + "Your Name : " + '<span>' + userName + '</span>' + "</h4>")
document.write("<hr>" + "<br>" + "<h4>" + "Your Age : " + '<span>' + age + '</span>' + "</h4>")
document.write("<hr>" + "<br>" + "<h4>" + "Your Country : " + '<span>' + Country + '</span>' + "</h4>")
document.write("<hr>" + "<br>" + "<h4>" + "Your Favorite Sport : " + '<span>' + sport + '</span>' + "</h4>")



//           ***************   Q1  ****************

let count = 0;

let check_natural = prompt("Are you human ? (yes , y , no , n) ")
check_natural = check_natural.toLowerCase();

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

//           ***************   Q2   ****************

let friend = prompt("Am I your friend ? (yes , y , no , n) ")
friend = friend.toLowerCase();

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

//           ***************   Q3  ****************

let smoke = prompt("Do you smoke ? (yes , y , no , n) ")
smoke = smoke.toLowerCase();

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

//           ***************   Q4  ****************

let vegetarian = prompt("Are you a vegetarian ? (yes , y , no , n) ")
vegetarian = vegetarian.toLowerCase();

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

//           ***************   Q5  ****************

let help = prompt("Do you like to help others ? (yes , y , no , n) ")
help = help.toLowerCase();

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

// document.write("<hr>" + "<br>" + "<h3>" + "question mark 5 : " + count1 + "</h3>")

// ***************   Q6  ****************


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
alert('The correct number is 60');

if (number === 60) {
  alert('That is correct! The number is 60');
  console.log('Q6 : ', count);
  count++;
  ;
}

//           ***************   Q7   ****************

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

alert('My Programming language : java, javascript, c++, c#, python');

alert(`you have a count of ${count} / 7`);
