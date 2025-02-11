// // function showMessage(){
// //     alert('Hello Everyone!!!');
// // }

// // // function name(va1,va2,va3){}

// // showMessage();
// // showMessage();
// // showMessage();

// let userName = 'Nur';

// function showMessage(){
//     let message = 'Hello, ' + userName;
//     alert(message);
// }

// showMessage();



/////////////////////////////////////////////////////////////////////



// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// alert( userName ); // John before the function call

// showMessage();

// alert( userName ); // Bob, the value was modified by the function




// let userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // declare a local variable

//   let message = 'Hello, ' + userName; // Bob
//   alert(message);
// }

// // the function will create and use its own userName
// showMessage();

// alert( userName ); // John, unchanged, the function did not access the outer variable



// function showMessage(from, text) { // parameters: from, text
//     alert(from + ': ' + text);
//   }
  
//   showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
//   showMessage('Ann', "What's up?"); // Ann: What's up? (**)


// showMessage("Ann", undefined); // Ann: no text given


// function sum(a, b) {
//     return a + b;
//   }
  
//   let result = sum(1, 2);
//   alert( result ); // 3



// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); // a prime
//     }
// }



// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       alert(i);  // a prime
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }


//variant 1
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
//   }
//and
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Did parents allow you?');
//   }

//ARE THE SAME

// No difference!

// In both cases, return confirm('Did parents allow you?') executes exactly when the if condition is falsy.


// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }


// function checkAge(age) {
//     return (age > 18) ? true : confirm('Did parents allow you?');
//   }

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you?');
//   }


function min(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}


function pow(x,n){
    let res = x;
    for(let i = 1; i < n; i++){
        res *= x;
    }

    return res;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if(n < 1) {
    alert(`Power ${n} is not supported, use a pos integer`);
} else{
    alert(pow(x,n));
}