"use strict"
let myObject;

//getting data
let json = FooBar.getData(); 

//parsing the json file into an object and returning string
myObject = JSON.parse(json);


function showQueue(){
    //console.log(myObject.queue);
    document.querySelector("#queue text").textContent = myObject.queue.length;
}

function showPosters(){
    console.log(myObject.beertypes);
    document.querySelector("#post1 text").textContent = myObject.beertypes[1].name;
    document.querySelector("#post2 text").textContent = myObject.beertypes[2].name;
    document.querySelector("#post3 text").textContent = myObject.beertypes[3].name;
    document.querySelector("#post4 text").textContent = myObject.beertypes[4].name;
    document.querySelector("#post5 text").textContent = myObject.beertypes[5].name;
    document.querySelector("#post6 text").textContent = myObject.beertypes[6].name;
    document.querySelector("#post7 text").textContent = myObject.beertypes[7].name;
}


function showModalContent() {
    let list = document.querySelector("#list");
    let template = document.querySelector("#beerTemplate").content;
    let modal = document.querySelector("#modal");
    
    data.forEach(function (theProduct){
    let name =  

    //console.log(data);
    modal.addEventListener('click', hideModal);
	modal.querySelector(".name").textContent = myObject.beertypes.name;
	modal.querySelector(".description").textContent = myObject.beertypes.description;
	modal.querySelector(".alcohol").textContent = myObject.beertypes.alc;
	modal.querySelector(".popularity").textContent = myObject.beertypes.popularity;
	modal.querySelector(".pouringspeed").textContent = myObject.beertypes.pouringspeed;
	//modal.querySelector('.image').src = data._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    modal.classList.remove('hide')
    })
};

function hideModal() {
	modal.classList.add('hide');
}

showQueue();
showPosters();
showModalContent();

