// ## Exercise 1.1 Create function following below :</br>

// add(a, b)</br>
// subtract(a, b)</br>
// multiply(a, b)</br>
// divide(a, b)</br>

// ## Exercise 1.2 Create Function Inform---</br>

// console.log("Hi, my name is " + firstName + "I live in " + location + "and enjoy "+hobby);

// ## Exercise 1.1
function add (a,b){
    return a+b;
}
function subtract (a,b){
    return a-b;
}
function multiply (a,b){
    return a*b;
}
function divide (a,b){
    return a/b;
}
console.log(add(5,2))

// ## Exercise 1.2
function firstName(){
    return "Natnatee";
}
function location(){
    return "Ubon";
}
function hobby(){
    return "watch soccer";
}
console.log("Hi, my name is " + firstName() + " I live in " + location() + " and enjoy "+ hobby());