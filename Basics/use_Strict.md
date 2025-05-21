📌 use strict in JavaScript
📖 What is use strict?
use strict is a special directive in JavaScript that enables Strict Mode.
It helps you write cleaner, safer code by catching common mistakes and preventing unsafe actions.

📦 Why Use It?
Prevents accidental creation of global variables.

Throws errors for bad syntax.

Disallows usage of unsafe or deprecated features.

Makes your code future-ready and more secure.

📙 How to Use
Add "use strict"; at the top of your JS file or inside a function:

"use strict";
let x = 5;
console.log(x);  // ✅ Works fine
If you forget to declare a variable:


"use strict";
x = 5;
console.log(x);  // ❌ Error: x is not defined
📌 Where to Apply
At the beginning of your script

Inside a specific function block

function test() {
  "use strict";
  // Strict Mode active here
}
✅ Best Practice:
Always use "use strict"; in new JavaScript projects for safer and more reliable code.
