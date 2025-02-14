let value = 3;
let negValue = -value;
// console.log(negValue); // -3

//let str = "Bhaskar"
//let str2 = " Guha"
//let fullName = str + str2
//console.log(fullName); // Bhaskar Guha
 

//console.log("1" + 2 + 1)// "121" - "1" + 2 is "12", then "12" + 1 is "121"
//console.log(1 + "2")// "12" - 1 + "2" is "12"
//console.log(1 + 2+  "2")// "32" - 1 + 2 is 3, then 3 + "2" is "32"

// In JavaScript, the `+` operator is used for both addition and string concatenation.
// When the `+` operator is used with a string, it converts the other operand to a string and concatenates them.
// The evaluation is done from left to right.

let x = 3;
const y = x++; //first return the value of x and then increment x by 1.

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;// first increment a by 1 and then return the value of a.

console.log(`a:${a}, b:${b}`); 
// Expected output: "a:4, b:4"

//${}, // `${}` is used inside backticks (`` ` ` ``) to embed variables, expressions, or function results directly into a string.
//first evaluates the expression inside it, converts the result to a string if needed, and embeds it into the surrounding text.

