let number = undefined
//console.log(typeof number);

//let numberString = String(number);
//console.table([typeof numberString, numberString]);
/*
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 'string' │ => for number => 'null' for number => 'undefined' the value of numberString is 'undefined';
│ 1       │ 'null'   │
└─────────┴──────────┘
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 'string' │ => for number => 10, 
│ 1       │ '10'     │
└─────────┴──────────┘
*/

let numberBoolean = Boolean(number);
//console.table([typeof numberBoolean, numberBoolean]); for 10 => boolean true, for null => boolean false, for undefined => boolean false


let String = undefined;
let StringNumber = Number(String);
console.table([typeof StringNumber, StringNumber]);//for "Bhaskar" => NaN, for "10" => 10, for "null" => 0, for "undefined" => NaN

// Number(undefined) => NaN because undefined cannot be converted to a number
// Number(null) => 0 because null is treated as 0 in numeric conversions
// Number("10") => 10 because the string "10" can be converted to the number 10
// Number("Bhaskar") => NaN because the string "Bhaskar" cannot be converted to a number