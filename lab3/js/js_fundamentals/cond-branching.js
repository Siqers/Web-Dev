let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
}





let year1 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year1 == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

let year2 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year2 < 2015) {
  alert( 'Too early...' );
} else if (year2 > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

let accessAllowed;

if(accessAllowed > 18){
    accessAllowed = true;
} else {
    accessAllowed = false;
}




alert(accessAllowed);

let age = prompt('age?', 18);

let result = condition ? value1 : value2;

let accessAllowed1 = (age > 18) ? true : false;

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)

let accessAllowed2 = age > 18 ? true : false;

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

//its the same we can use this
if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }


let company1 = prompt('Which company created JavaScript?', '');

(company1 == 'Netscape') ?
   alert('Right!') : alert('Wrong.');



let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}

// tasks
if ("0") {
    alert( 'Hello' );
  }

//yes


//2
// {/* 
// 'use strict';

// let value = prompt('What is the "official" name of JavaScript?', '');

// if (value == 'ECMAScript') {
//   alert('Right!');
// } else {
//   alert("You don't know? ECMAScript!");
// }
// */}

//3

// let val = prompt('type a num', 0);

// if (val >0){
//     alert(1)
// } else if(val < 0) {
//     alert(-1)
// } else{
//     alert(0)
// }

//4

// let res = (a+b < 4) ? 'below' : 'over';

let mes = (login == 'employee') ? 'hello' :
(login == 'Director') ? 'Greeting' :
(login == '') ? 'No login' :
'';