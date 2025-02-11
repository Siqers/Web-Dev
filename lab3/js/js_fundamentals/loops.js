// let i = 3;

// while (i) {
//   alert( i-- );
// }

// let i = 3;

// alert(i--); // shows 3, decreases i to 2

// alert(i--) // shows 2, decreases i to 1

// alert(i--) // shows 1, decreases i to 0

// // done, while(i) check stops the loop

// let i = 0;
// while (++i < 5) alert( i );

// let i = 0;
// while (i++ < 5) alert( i );

// SAME outputs
// for (let i = 0; i < 5; ++i) alert( i );

// for (let i = 0; i < 5; i++) alert( i );

// for(let i=0;i<10;i++){
//     if(i%2==0){
//         alert(i);
//     }
// }

// let i = 0;

// while(i < 3){
    
//     alert(`number ${i}!`);
//     i++;
// }

// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );



// let num;

// do{
//     num = prompt("Enter the number that is more than 100", 0);
// }while(num <= 100 && num);

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert( i ); // a prime
// }