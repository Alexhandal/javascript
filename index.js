let variable; /* variable decleration */
variable = "variable"; /* variable definition */
let number = 7; /* numer data type */
let string = "hello"; /* string type data */
let truthy = true; /* booleans */
let falsey = false; /* booleans */
let bigstring = "hello i am a bigger string";

var variable2 = "var"; /* we dont do this */
let variable3; /* we can define later or redefine */
variable = "nope";
//console.log(variable);
const constant = "constant"; /* cannot redefine, use this 95% of the time */
// constant = "kgljasrgklj";

/* const nullTest = null;
const undefinedTest = "test";

console.log(nullTest, undefined); */
const number1 = 19824;
const number2 = 72;
//let add = number1 + number2;
let sub = number1 - number2;
let mult = number1 * number2;
let div = number1 / number2;
console.log(mult, div);

//strings
const str = "Hello my name is";
const name = " Mike";
const greet = "How are you today?";
const newStr = str + name + greet;

//template literals
const literal = `This is a new string, is it not cool? ${str} ${name} ${greet}`;
console.log(literal);
//functions
function test() {
  console.log("This is a test");
} //declare the function
test(); //call the function

function argument(student) {
  //accepts the argument
  console.log(`this is my student ${student}`);
}

argument("Claire"); //not type specific
argument(8);

function add(x, y) {
  return x + y; //return sends the product/output outside of the funtion scope
}
//console.log(add(7, 9));
const answer = add(7, 9);
console.log(answer);
