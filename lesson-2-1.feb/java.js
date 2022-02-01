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