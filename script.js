// Q1: What will be logged in the console? Explain in comments.
console.log(0 == "0");
/* 
Ans: true
Explanation:
1. == is the loose‐equality operator: if the two operands are different types, JS will try to convert one to match the other.
2. Here, the string "0" is coerced to the number 0.
3. Then we compare 0 == 0, which is true. 
*/

console.log(0 === "0");
/*
Ans: false
Explanation:
 1. === is the strict‐equality operator: it checks both value AND type without coercion.
 2. Left side is a number (0), right side is a string ("0").
 3. Different types → immediately false.
*/

console.log([] == false);
/*
Ans: true
Explanation:
 1. On one side is an empty array [], on the other the boolean false.
 2. For ==, JS first tries to convert objects/arrays to primitives (via .toString() or .valueOf()).
    - [].toString() yields "" (the empty string).
 3. Then it compares "" == false. Again, false is coerced to 0, and "" coerces to 0 too.
 4. So we end up comparing 0 == 0 → true.
*/

console.log("5" + 2 - 1);
/*
Ans: 51
Explanation:
 1. The + operator with a string causes string concatenation: "5" + 2 → "52".
 2. Now we have "52" - 1. The - operator only works on numbers, so JS coerces "52" to the number 52.
 3. 52 - 1 → 51.
*/

// Q2: Fix this function so it doesn't return NaN
function add(a, b = 0) {
  // We give `b` a default value of 0 if it’s not passed in.
  // Without this, calling add(5) makes `b` undefined and 5 + undefined → NaN.
  return a + b;
}
console.log(add(5)); // → 5  (because b defaults to 0)

// Q3: Explain let, const, and var in comments here
/*
Ans:
var: Variables declared with var are scoped to the entire enclosing function (or global scope) rather than to blocks, and their declarations are hoisted and initialized as undefined before execution. We can redeclare and reassign them freely, which can lead to accidental overwrites and hard-to-track bugs.

let: let bindings are confined to the nearest enclosing block and exist in a temporal dead zone until their declaration is reached, preventing use-before-declaration errors. We can reassign a let variable but cannot declare the same name twice in the same scope, making it safer for mutable values.

const: Like let, const is block-scoped with a temporal dead zone, but it must be initialized when declared and cannot be reassigned thereafter. Although the binding is immutable, if it holds an object or array we can still modify the contents of that object or array.
*/

// Q4: Rewrite multiply as an arrow function
const multiply = (a, b) => a * b;
// Arrow functions are more concise. If we have a single expression,
// we can omit braces and the `return` keyword.

// Q5: Rewrite this loop to print 0, 1, 2 (not 3, 3, 3)
for (let i = 0; i < 3; i++) {
  // Using `let` here gives each iteration its own copy of `i`.
  // When the timeout callback runs after 1 second, it captures the correct `i` value.
  setTimeout(() => console.log(i), 1000);
}
// If we use `var`, there would be a single shared `i` that ends up as 3 by the time the callbacks fire.

// Q6: Add a click handler in JS to change the button's text
const myButton = document.getElementById("myButton");
// Grab the button element by its ID.
myButton.addEventListener("click", function () {
  // When the user clicks the button, this function runs.
  // `this` refers to the button itself.
  this.textContent = "Clicked!";
});

// Q7: Write code to toggle visibility of #content when #toggleButton is clicked
const toggleButton = document.getElementById("toggleButton");
const content = document.getElementById("content");

toggleButton.addEventListener("click", () => {
  // Check the current inline style for display. If it’s 'none', we show it; otherwise we hide it.
  // Note: initial show/hide comes from markup (block by default), so inline style is empty until toggled.
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});
