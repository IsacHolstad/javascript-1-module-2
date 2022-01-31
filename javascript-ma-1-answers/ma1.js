const button = document.querySelector(".btn");
button.style.color = "red";
button.style.backgroundcolor = "blue"

function logArguments(someArguments) {

console.log("the arguments is a " + typeof someArguments);
someArguments();
};




function theFunction() {
    console.log("i am a function")
};
theFunction();


const object = {};

//logArguments(object)

const myFunction = function() {
    console.log("i am a function inside a function");
};
myFunction()