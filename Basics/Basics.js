const rollNumber = 150
let email = "abc@gmail.com"
var password = "1234"
let city;
/*
    The above example shows the use of const, let and var keywords.
    const: It is used to declare a constant variable. The value of a constant variable cannot be changed.
    let: It is used to declare a block-scoped variable. The value of a let variable can be changed.
    var: It is used to declare a variable. The value of a var variable can be changed.
*/

console.log(rollNumber);

//rollNumber = 125

console.table([rollNumber, email, password, city]) // Assignment to constant variable. Not possible to change the value.

/* console.table([]) this statetment use to print the all values in table format with indexes ex 

┌─────────┬─────────────────┐
│ (index) │ Values          │
├─────────┼─────────────────┤
│ 0       │ 150             │
│ 1       │ 'abc@gmail.com' │
│ 2       │ '1234'          │
│ 3       │ undefined       │
└─────────┴─────────────────┘

*/