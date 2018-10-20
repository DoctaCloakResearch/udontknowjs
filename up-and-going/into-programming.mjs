import { default as readlineSync } from 'readline-sync';
const input = (context) => readlineSync.question(context);

// Statements

/*
  In JavaScript, a statement may look as follows
*/

var a = 3 * 2;

// Or even

var b = a * 2;

/*
  The characters a and b are called variables.

  Think of a variable as a box with a label that
  may or may not contain some type of data, or a
  type of data.

  An example would be the number 42, or like
  the code on line 5, the result of (3 multiplied by 2)
  aka 6.

  Without variables, data would be refered to in JavaScript
  as literal values.

  In 3 * 2, = and * are considered operators and var b = a * 2
  instructs the computer to get the current value of a and
  to multiply it by two, then to store the result into a box,
  or variable called b.

  Easy, right?
*/

// Expressions

/*
  Statements are made up of one or more expressions.  Think of
  an expression as a reference to a variable or a literal value,
  or a set of variables and values combined with operators.
*/

// This statement has four expressiosn in it.
a = b * 3;

/*
  3 is a literal value expression.
  b is a variable expressions, which means get the data stored in b.
  b * 3 is an arithmetic expression, which means do multiplication.
  a = b * 3 is an assignment expression, meaning store the result of
  b * 3 inside of a variable named a.  More literally a reassignment.
*/

// For Input, we will use node.js
console.log(a);

var test = input("What is your name? ");
console.log(test);

/* Operators 

  Assignment => =
  Whenever an assignment is made in JavaScript or basically
  any programming language it is made by evaluating from right
  to left, whereas in common mathematical practice, we tend
  to evaluate from left to right.  Something to get used to.

  Math =>  [ + , - , *, / , % ]
  In JavaScript, there are five different matehmatical
  operators: addition ,substraction, multiplication, division,
  and modulus.  Modulus is for remainder division.

  Increment/Decrement => [ ++, -- ]
  You can either increment and decrement using ++ and -- and
  this quite literally adds or reduces one from the value that
  is stored inside of a variable.  Ex: a++ would make a 3 if 
  the value stored in a was 2.

  Object property access => [ console.log, person.name ]
  In JavaScript objects are values that hold other values,
  which are stored in variables referred to as properties.
  A property can alternatively be accessed by using square brackets.
  An example: person["name"]  console["log"]("Hi")
  I should note, please do not ever write code like
  console["log"]("Hi."), ever.

  Equality => [ == , ===, !=, !== ]
  In JavaScript == represents loose equals and === represents strict equals. 
  There is also loose not equals and loose strict equals.
  
  Comparison => [ < , >, <=, >= ]
  Comparison operators are used to evalute if something is
  greater than, less than, or greater than and equal to or less than
  and equal to a particular value.

  Logical => [ &&, || ]
  There are also the logical and, as well as or operators.
*/

console.log( 5 + 3 * 2 - 1 / 9 % 8);

console.log(a++ * b--);

// A person
const person = {
  name: "Christopher",
  age: 23,
  location: "Minnesota",
}

// This accesses the value stored in the property name
// of person and concatenates or adds aka DoctaCloak to it.
console.log(person.name + " aka DoctaCloak");

// This will return true or false
console.log(a > b);

/*
  Types are useful when you need to express values in a program,
  with different representations based on what you plan to do with
  them.  JavaScript has built in types and they are referred
  to as primitive types.  We have seen a couple so far.

  If you need to do math, you use a number.

  When you need to print a value on the screen, you need a string.

  When you need to make a decision in your program you need a boolean
  which is basically a value which is true or false.

  If it's a value included directly in the source code, then it is
  a literal.  They're surrounded by double quotes ("...") or
  by single quotes ('...') there is no difference between the two
  it's really just a matter of stylistic preference. number and boolean
  literals are as is, so (42, true, false, etc)
*/

// Consider this code

console.log(typeof("I am a string")); // => string
console.log(typeof('I am also a string')); // => string

console.log(typeof(42)); // => number

console.log(typeof(true)); // => boolean
console.log(typeof(false)); // => boolean

/*
  Converting Between Types

  Say you have a number and you want to print it on the screen, well
  you have to convert that value to a string.  In JavaScript, this
  process of conversion is called coercion.  Similarly, if someone were
  to enter in some numbers on a web page and you were to access those numbers
  from the DOM, you would need to convert them to the data type number, in
  order to actually perform mathematical operations on the value received.
  This conversion from string to number is still called coercion.  You have
  to coerce the string into a number.

  Here are some examples.
*/

var meaningOfLife = "42";
var meaningAsNum = Number(meaningOfLife); 

console.log(typeof(meaningOfLife));

/* Above we basically did an explicit coercion.
  
  However, you can also do implicit coercion.
  Say you wanted to compare a string "99.99" to a number
  99.99, well, while most may agree that they are equivalent,
  they are not exactly the same.  The reason I say that is because
  they aren't the same representation; the types are different.
  They are loosely equal, but not strictly equal.  To prove that,
  check out the following code below.
*/

var isEqual = "99.99" == 99.99; // => true
console.log(isEqual)

// Notice I am using a strictly equal comparison operator.
isEqual = "99.99" === 99.99; // => false
console.log(isEqual);

/*
  In code, often times you're grouping a series of statements
  together, in something that is often called a block.  In JS for example,
  a block is defined by wrapping one or more statements inside a curly pair.

*/
var amount = 99.99;

// a general block
{
  amount = amount * 2;
  console.log(amount); // 199.98
}

/*
  This standalone general block is still valid, but it isn't commonly seen
  in most JavaScript programs.  Most of the time blocks are attached to
  some kind of control statement, like an if statement or a while loop for ex.
*/
var amount = 99.99;
var isAmountLargeEnough = amount > 10;
// is amount big enough?  if so, run some code. 
if (isAmountLargeEnough) {  // <-- block attached to an `if`
  amount = amount * 2;
  console.log(amount); // again, 199.98
}

/*
  Conditionals are used to do as it sounds, execute something
  after a certain condition has been met.
*/
const ACCESSORY_PRICE = 99.99;

var bank_balance = 302.13;
var amount = 99.99;

if(amount < bank_balance) {
  console.log("I want to buy this phone!");
}

// You can even write code to run if the if is incorrect
if ((amount * 3 + ACCESSORY_PRICE) < bank_balance) {
  console.log("I'll take the accessory!");
} else {
  console.log("No, thanks.");
}

/*
  Say you're writing a program where a specific action has to
  take place, while a condition has not been met.  In JavaScript, as with
  basically any other programming language, a loop is going to be your friend,
  when you want to do achieve specific behavior like this.

  Every time we have an action perform or a set of actions scoped to this event,
  we have one is called an iteration.

  Below there is an example of a while loop and a do while loop.

  The only difference is whether the conditional is tested before the
  first iteration (while) or after the first iteration (do..while)

  But in any form, if the conditional tests as false, the next iteration will
  not run at all.
*/

var numOfCustomers = 10;
while (numOfCustomers > 0) {
  console.log("How may I help you?");

  // help the customer

  numOfCustomers--;
}

// versus;
numOfCustomers = 10;
do {
  console.log("How may I help you?")

  // help the customer

  numOfCustomers--;
} while (numOfCustomers > 0);

/* 
  a while..true loop would run forever with no condition to stop it,
  but this break statement fixes that for us.
  We should se 0 through 9 printed out with this code.
*/
var i = 0;

while (true) {
  if (i <= 9) {
    console.log(i)
    i++;
  }
  // time to stop the loop
  else {
    break;
  }
}

/*
  With for loops, we're dealing with three clauses.
  The initialization clause, the conditional test clause, and the update clause.
  Or what I like to refer to as the iterative step.
*/

// Example of a for loop doing the same thing.
for (var i = 0; i <= 9; i++) {
  console.log(i);
}

/*
  Functions
*/

function printAmount(amount) {
  console.log(amount.toFixed(2));
}

function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount); // => "99.99"

amount = amount * 2;

printAmount(amount); // => "199.98"

var amountFormatted = formatAmount(amount);
console.log(amountFormatted);