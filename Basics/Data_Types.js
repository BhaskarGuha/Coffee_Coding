"use strict";
/* use strict is a directive that is introduced on ECMAScript 5.
It is used to enforce stricter parsing and error handling in your code.
It is a good practice to use it. */

try{
    console.log(x);
}
catch(error){
    console.log("Error Message: " + error.message);
}
console.log("Continuing the code...");

/*
    This above example helps to understad the conceot of using try-catch block, with use strict directive.
*/

let name = "Bhaskar";
let age = "21";
let isLoggedIn = true;
let value = null;
/*
    There are seven types in JavaScript:
    1. Number: It is used to represent numeric values.
    2. String: It is used to represent textual data.
    3. Boolean: It is used to represent true or false values.
    4. Undefined: It is used to represent an undefined value.Its 
    5. Null: It is used to represent a null value.
    6. Object: It is used to represent a collection of key-value pairs.Its non-primitive data type.It is used to store various keyed collections and more complex entities.
*/

console.log(value)