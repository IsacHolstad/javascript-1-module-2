isacFunction();

function isacFunction() {
    console.log("this is a bruh moment")
    
}

//infinit for loop that can break memory on pc
//this intervalid works only if you use it as a variabel
const intervalId = setInterval(function () {
    console.log("hello ball sack");
  count = count + 1;
  console.log(count)
  if(count === 1) {
      console.log("interval is now done, well done champ!")
      clearInterval(intervalId);
  }
}, 2000);
let count = 0;
//

// Example Question

// I want to add li to the ul with class
// .container li with values from 1 to 10 every 2 seconds

// 1. Select the .container ul
const container = document.querySelector(".container")
// 2. declare a count variable
let counter = 0;
// 3. setInterval Method
const setIntervalId = setInterval(function (){
    counter = counter + 1;
    container.innerHTML += `<li>${counter}</li>`
    const listItem = document.createElement("li")
    container.append(listItem)
    listItem.innerHTML = "";
    if (counter === 10) {
        clearInterval(setIntervalId);
    }
    
    
}, 2000);
// 4. you need to put the time you want this interval to keep running
// 5. do the increment
// 6. Create the li
// 7. add to the innerHTML of this li the count.
// 8. use append  use apend to add the li to the ul

// OR >> container.innerHTML += <li>${countSecond}</li>;

// 9.  YOU NEED TO assign the setInterval to a variable
// 10.  you need to check if the count is > than 10 then you clear
// the interval


