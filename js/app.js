
'use strict';

let userName = prompt('what\'s Your Name ? ');
console.log('Welcome '+ userName);
alert('Welcome ' + userName);


let count1 = 1;
let count2 = 0;


let check_natural = prompt("Are you human ? (yes , No) ")
check_natural = check_natural.toLowerCase();

if (check_natural == "yes"){
  document.write("<hr>"+"<br>"+"<h3>"+ "question mark 1 : "+count1+"</h3>")
  alert('Welcome ' + userName + ' You can play with me');

}else {
    document.write("<hr>"+"<br>"+"<h3>"+ "question mark 1 : "+count2+"</h3>")
    alert('Sorry we can not be continued');
}

let friend = prompt("Am I your friend ? (yes , No) ")
friend = friend.toLowerCase();

if (friend == "yes"){
    document.write("<hr>"+"<br>"+"<h3>"+ "question mark 2 : "+count1+"</h3>")
  alert(' you are my friend. ');

}else {
    document.write("<hr>"+"<br>"+"<h3>"+ "question mark 2 : "+count2+"</h3>")
    alert('I am Sad ');
}

let smoke = prompt("Do you smoke ? (yes , No) ")
smoke = smoke.toLowerCase();

if (smoke == "yes"){
    document.write("<hr>"+"<br>"+"<h3>"+ "question mark 3 : "+count1+"</h3>")
  alert(' Let ' + userName +' it hurt your health ');

}else {
    document.write("<hr>"+"<br>"+"<h3>"+ "question mark 3 : "+count2+"</h3>")
    alert('Great '+ userName +' you are a healthy person ');
}
	
let vegetarian = prompt("Are you a vegetarian ? (yes , No) ")
vegetarian = vegetarian.toLowerCase();

if (vegetarian == "yes"){
    document.write("<hr>"+"<br>"+"<h3>"+ "question mark 4 : "+count1+"</h3>")
  alert(' bravo ' + userName +' you are a healthy person ');

}else {
    document.write("<hr>"+"<br>"+"<h3>"+ "question mark 4 : "+count2+"</h3>")
    alert('Great '+ userName +' Try not to eat too much meat');
}

let  help = prompt("Do you like to help others ? (yes , No) ")
help = help.toLowerCase();

if (help == "yes"){
    document.write("<hr>"+"<br>"+"<h3>"+ "question mark 5 : "+count1+"</h3>")
  alert(' great ' + userName +' you are a good person ');

}else {
    document.write("<hr>"+"<br>"+"<h3>"+ "question mark 5 : "+count2+"</h3>")
    alert('No '+ userName +' you are wrong');
}
