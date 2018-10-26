import { default as readlineSync } from 'readline-sync';
const input = context => readlineSync.question(context);

// let username = input("Hello, what is your name? ");
// console.log(`Hello, ${username}.`);

/*  Values & Types
    JavaScript has typed values, not variables like in a lot of
    other languages.

    1. string
    2. number
    3. boolean
    4. null and undefined
    5. object
    6. symbol ( new to ES6 )

    You examine the value of a type by using an operator called typeof
*/

var a;
console.log(typeof a);  // => undefined

a = "hello world";
console.log(typeof(a)); // => string

a = true;
console.log(typeof (a)); // => boolean

a = null;
console.log(typeof (a)); // => 'object' -- this is a weird bug

a = undefined;
console.log(typeof (a)); // => => undefined

a = { b: "c"};
console.log(typeof (a)); // => object

/*  Object
    In JavaScript, the object type refers to a compound value.
    You can set the properties that each hold their own values
    of any type.  This is probably the most useful value type in JS.

    While object properties and methods can be accessed with a dot operator,
    you can use square bracket notation as well.  Like... person["name"]
    instead of person.name this can be helpful, but the latter is more common.
*/

var obj = {
    a: "Hello, Friend",
    b: 42,
    c: true,
    person: {
        name: "John",
        age: 42,
        location: "The Matrix"
    }
}

// Here I destruct person from object, so it's more concise 
// when writing my statement.

const { person } = obj;
console.log(`${person.name} is currently located in the ${person.location}.`);

var obj = {
    a: "hello world",
    b: 42
};

var b = "a";
console.log(obj[b])  // "hello world"
console.log(obj["b"]);  // 42

// Arrays
var arr = [
    "hello world",
    42,
    true
];

/* 
    This is an ES6 for loop.
    If you use of you're getting the actual element.
    if you use in, you're getting the index only.
*/
for(let ele of arr) {
    console.log(ele);
}

// You can also call an array explicitly, with square brackets.
console.log(arr[0]); // => "hello world"

// you can even get the length..
console.log(arr.length);

// One important characteristic though is that all arrays are objects.
console.log(typeof(arr));

/*
    Functions
    In JavaScript, the other object subtype often used is a function.
*/

function foo() {
    return "bar";
}

foo.bar = "Hello, World.";

console.log(typeof(foo));
console.log(typeof(foo.bar));
console.log(foo.bar);


console.log(foo.bar.length);
console.log(foo.bar.toUpperCase);
console.log((3.14269).toFixed(2));

/*
    Built-In Type Methods.

    The method toUppercase, as well as toFixed, and even the property length,
    are not the difficult aspects of the code above.

    The "how" behind how they work is what is complicated.

    There is basically an object wrapper, called a 'native', which pairs
    with the primitive data type, defining a set of methods and properties
    on its prototype.

    So when you use a primitive value like a string or a number, then 
    JavaScript automatically 'boxes' the value to its object wrapper.

    You can even wrap a string around a string object,
    thus giving you access to ALL of the string properties and methods.

    Ex:  String('hello').toUpperCase()

    The same works for 'hello' though, so just imagine
    String is invisible.  It's always there, lurking.
*/


// This will still work.  Trust me.
console.log(String('hello'));

/*
    Truth & Falsy
    The following values in JS turn to false when converted to a boolean
    1. ""
    2. 0, -0, NaN
    3. null, undefined
    4. false
*/

/* Equality
    In JavaScript, when you're dealing with equality, typically
    you're dealing with strict equality and loose equality.  Loose equality
    can be dangerous if not understood, the same way it can be very helpful
    when one has a strong understanding of it.  In some cases, it can honestly
    even improve the quality of code being written.

    There are four equality operators:
    1. ==
    2. ===
    3. !=
    4. !==
*/

var a;
var b;
var c;

console.log(2 == "2"); // => true
console.log(2 === "2"); // => false
console.log(2 != "2"); // => false
console.log(2 !== "2"); // true

/* ==, ===, !=, !== should not be confused with ! 
    ! or not, is the counterpart, it isn't the same as inequality.

    == : checks for value equality with coercion allowed, thus loose
    === : checks for value equality without allowing coercion, thus strict.

    When you aren't sure what to use, a good rule of thumb is:
    if either value could be the true or false value, avoid using
    == and instead use ===

    If it can be 0 "" or [] then use a strict comparison operator.

    When checking non primitive values, like objects (functions and arrays) 
    count too, the references, or memory addresses are what are compared.

    Take arrays.  They're coerced to strings by adding the , in-between as 
    a delimiter...so [1, 2, 3] becomes "1,2,3", but [1, 2, 3] is not [1, 2, 3].
*/

var a = [1, 2, 3];
var b = [1, 2, 3];
var c = "1,2,3";

console.log(a == b) // => False
console.log(a == c) // => True

// This is false because we are not allowing the coercion to take place.
console.log(a === c) // => False

/*
    One interesting thing about naming conventions with JavaScript is that
    property names can be names of reserved keywords.

    However, pure variables cannot.  So we can use for, in, if, etc as property
    names in human down below if we want and we won't receive a syntax error.

    We can even use false, true and null.

    Even numbers, but if you use a number you need square brackets.
*/
var human = {
    for: "John",
    false: 0,
    true: 1,
    null: "This is crazy isn't it?  Never name your properties like this.",
    3: 12
}

console.log(human.for);
console.log(human.false)
console.log(human.null)
console.log(human[3])

// This function will execute on run time.  :) 
var hello = (function() {
    console.log("Yeet");
}());

/*
    Hoisting is pretty important in JavaScript.
    Whenever you use var inside a scope, that specific declaration is then 
    taken to belong to the entire scope and is accessible everywhere 
    throughout.

    Consider the following code below.
*/  

var a = 2;

fooz();  // This will work because foo declaration is hoisted.

function fooz() {
    a = 3;

    console.log(a); // 3
    // Think of this hoisting as reseting a in a way.
    var a;  // declaration is hoisted to the top of foo() won't affect earlier a.
}

console.log(a); // 2

/* 
    Although hoisting is a thing in JS, it's not common nor good practice to 
    do this with variables.  It's more common to use hoisted function 
    declarations though.
*/

/*
    One cool thing that you can do in JavaScript when testing a conditional is
    use a ternary.

    The blow code is the equivalent of:

    if (a > 42) {
        d = "yeet"
    } else {
        d = "cool"
    }

    see how long and cumbersome that is?  The ternary operator is far more 
    concise. 
*/
var d = (a > 42) ? "yeet" : "cool";
console.log(d);

/*
    Closures are arguably one of the most important, and more often than not,
    least understood, concepts in JavaScript.  Basically, a closure is a way to
    remember and continue to have access to a function's scope (its variables) 
    even once the function has finished running.
*/

// Consider this
function makeAdder(y) {
    // parameter 'y' is an inner variable

    function add(z) {
        return y + z;
    };

    return add;
}

var adder = makeAdder(3)(2);
console.log(adder)

// plusOne gets a reference to the inner add(..) function with closure over the
// x parameter of the outer makerAdder
var plusOne = makeAdder(1);

// plusTen gets a reference to the inner add(..) function with closuer over the
// x parameter of the outer makeAdder
var plusTen = makeAdder(10);

console.log(plusOne(3)); // => 4 <-- 1 + 3
console.log(plusOne(41)); // => 42 <-- 1 + 41
console.log(plusTen(13)); // => 23 <-- 10 + 13
