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
*/