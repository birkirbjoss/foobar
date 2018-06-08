"use strict"
let myObject;

//getting data
let json = FooBar.getData(); 

//parsing the json file into an object and returning string
myObject = JSON.parse(json);


function showQueue(){
    console.log(myObject.queue);
    document.querySelector("#queue text").textContent = myObject.queue.length;
}

showQueue();

