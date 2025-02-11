// let apples = "2";
// let oranges = "3";

// // both values converted to numbers before the binary plus
// alert( +apples + +oranges ); // 5

// the longer variant
// // alert( Number(apples) + Number(oranges) ); // 5
// let counter = 1;
// let a = ++counter; // (*)

// alert(a); // 2
// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++

// alert(a); // 1

// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); // 2, the lines above did the same

// let counter = 0;
// alert( ++counter ); // 1

// let counter = 0;
// alert( counter++ ); // 0

// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1

// let a = 2;

// let x = 1 + (a *= 2); //5

// "" + 1 + 0 // "10 "cuz it converts to the string
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" //2
// "2" * "3" // 6
// 4 + 5 + "px" // "9px"
// "$" + 4 + 5 //"$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // "-9 5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

// let a = "1"; // prompt("First number?", 1);
// let b = "2"; // prompt("Second number?", 2);

// alert(a + b); // 12

// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);

// alert(a + b); // 3


// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(+a + +b); // 3