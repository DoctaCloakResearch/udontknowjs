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