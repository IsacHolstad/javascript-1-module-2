// The setTimeout method is used to execute a
// function after a specified period of time.
setTimeout(function () {
    console.log("heeeeeelllloooooo")
}, 5000);


//1. select class .loader
const loading = document.querySelector(".loader")
//use timeout
setTimeout(function (){
    loading.innerHTML = "FINISHED-DOWNLOAD"

}, 5000)
//