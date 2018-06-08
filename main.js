"use strict"
let myObject;

//getting data
let json = FooBar.getData();

//parsing the json file into an object and returning string
myObject = JSON.parse(json);



function showQueue() {
    //console.log(myObject.queue);
    document.querySelector("#queue text").textContent = myObject.queue.length;
}

let postersButton = document.querySelector(".st8");

function showPosters() {
    console.log(myObject.beertypes);
    document.querySelector("#post1 text").textContent = myObject.beertypes[1].name;
    document.querySelector("#post2 text").textContent = myObject.beertypes[2].name;
    document.querySelector("#post3 text").textContent = myObject.beertypes[3].name;
    document.querySelector("#post4 text").textContent = myObject.beertypes[4].name;
    document.querySelector("#post5 text").textContent = myObject.beertypes[5].name;
    document.querySelector("#post6 text").textContent = myObject.beertypes[6].name;
    document.querySelector("#post7 text").textContent = myObject.beertypes[7].name;
}

function hideModal() {
    modal.classList.add('hide');
}


function showModalContent() {
    
    let modal = document.querySelector("#modal");
    let posters = ["#post1", "#post2", "#post3", "#post4", "#post5", "#post6", "#post7"];

    
    posters.forEach(function (theBeer) {

        let myBeer = myObject.beertypes[1];
            postersButton.addEventListener('click', function () {
			    showModalContent(theBeer);
		});

        modal.addEventListener('click', hideModal);

        modal.querySelector(".name").textContent = myBeer.name;
        modal.querySelector(".category").textContent = myBeer.category;
        modal.querySelector(".appearance").textContent = "Appearance:  " + myBeer.description.appearance;
        modal.querySelector(".aroma").textContent = "Aroma: " + myBeer.description.aroma;
        modal.querySelector(".flavor").textContent = "Flavor: " + myBeer.description.flavor;
        modal.querySelector(".mouthfeel").textContent ="Mouthfeel: " + myBeer.description.mouthfeel;
        modal.querySelector(".overall").textContent ="Short Description: " + myBeer.description.overallImpression;
        modal.querySelector(".alcohol").textContent = "Alcohol %: " + myBeer.alc;
        modal.querySelector(".popularity").textContent ="Where do our customers rank this beer?: " + myBeer.popularity;
        modal.querySelector(".pouringspeed").textContent ="How fast does it pour?: " + myBeer.pouringSpeed + " sec";
        modal.querySelector('.image').src;
        modal.classList.remove('hide')

    })
};



showQueue();
showPosters();
showModalContent();
