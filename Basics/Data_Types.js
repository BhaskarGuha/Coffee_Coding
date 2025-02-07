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
