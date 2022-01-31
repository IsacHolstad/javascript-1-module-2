// These are often called callbacks. It is very common
// to pass functions as arguments to other ***
// functions and have the receiving function execute them.


//normal function
function showMeMessage() {
    console.log("this message is being showed in a normal function")

}
showMeMessage();

//IIFE Functions this method calls it self!!
(function doSomething() {
    console.log("hello this is a function with run by itself")
}) ();

//HOISTING >function callign the function before declaring it
doMessage();
function doMessage() {
    console.log("this is hoisting")
}

//anonymus function
const thisMessage = function() {
    console.log("this is a anonymus function")

}
thisMessage();

//call back function logs the (strign,number, bollean value and ect)
function logSomething (someArgumet){
    console.log(typeof someArgumet)
}
logSomething("isac");
logSomething(45)
logSomething(true)

//normal function (repiting for traning)
function someFunction() {
    console.log("trainign on normal functiin")
}
someFunction();

//function calling itself (traing)
(function trainFunction() {
    console.log("hello im being called without being called")
}) ();

//iife function
(function isacFunction() {
    console.log("this is not called")
}) ();

//iife function
(function heshamFunction() {
    console.log("im getting work done on this iif functions")
}) ();

//iif function 
(function iifFunction() {
    console.log("im geting thsi done")
}) ();

//anonymus fnction

const anoon = function() {
    console.log("hello i am a anonym function")
}

showThis();
function showThis() {
    console.log("helloooooooo")
}