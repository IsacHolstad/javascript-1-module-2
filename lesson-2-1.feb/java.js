//Question 1 what are function expresion
//this is how you can detect if something is clicked
//1. select the button with the class .btn
const button = document.querySelector(".btn")
//2. the way use function expresion
const handelClick = function handelClick(){
    console.log("i clicked the button")

}
//3. how to use the  addEventListener
button.addEventListener("click", handelClick);


//way 2 of doing the same thing THIS IS THE EASYEST WAY
button.onClick = function (){
    console.log("the button has been click second option")
}

const myInput = document.querySelector("#firstname");
    const handelKeyPress = function (event) {
    console.log("a key is clicked")
    console.log(event)
    console.log(event.target);
}
//myInput.addEventListener("keydown", handelKeyPress);
const thePetButton = document.querySelector(".pet-btn");
    const handelMouseOver = function(){
    thePetButton,classList,add("hover")
    };

    //thePetButton.addEventListener("mouseover", handelMouseOver)

const handelMouseOut = function (){
    thePetButton.classList.remove("hover");

    }
    //thePetButton.addEventListener("mouseout", handelMouseOut);

    //Question 6 select all the li 
    //on mouse over show the dataset of animal they have
//1. select all li elements

// 2. loop on the liś

//3. create a function expresion wich console.log for me the event.
const listItems = document.querySelector("li");
console.log(listItems)

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("mouseover", hoverListItem)

}
function hoverListItem(event) {
    console.log(event.target.data.animal)
}

isacFunction();
function isacFunction() {
    console.log("this is a basic function where the function is celled before the function")
}
//AUTOMATIV FUNCTION TESTS
(function autoFunction() {
    console.log("auto")
})();

(function autmativ() {
    console.log("hey there")
})();

//LOG FUNCTION BEFORE FUNCTION
birdMan()
function birdMan() {
    console.log("this is being logged before function")
};

//selecting the btn class and changin style
