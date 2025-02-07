# Using `"use strict";` in JavaScript (ES5)

**Strict mode** is a way to opt in to a restricted variant of JavaScript. It helps catch common coding mistakes and "unsafe" actions by throwing errors where JavaScript would normally fail silently.

## Why Use Strict Mode?

- **Catches Common Errors:** For example, using undeclared variables throws an error.
- **Prevents Unsafe Actions:** It disallows some features that are considered to be error-prone.
- **Improves Code Quality:** Enforces better coding practices and can help optimize your code.

## How to Enable Strict Mode

To enable strict mode, add the following directive at the top of your script or function:

```javascript
"use strict";
