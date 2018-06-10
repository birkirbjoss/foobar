"use strict"
let myObject;

//getting data
let json = FooBar.getData();

//parsing the json file into an object and returning string
myObject = JSON.parse(json);



function showQueue() {
    //console.log(myObject.queue);
    document.querySelector("#queue").textContent = myObject.queue.length + "  waiting";
};


 

let mylevel = document.querySelector("#mylevel");
let kegok = document.querySelector("#pouring");
let replace = document.querySelector("#replace");
let inuse = document.querySelector("#tube");


// THE BEER LEVEL IN THE KEG DECREASES FOLLOWING THE IF STATEMENTS.
//  WHEN THE BEER LEVEL IS X, THE GREEN LINE INDICATES ´KEG IS OK' AND THE RED LINE INDICATES 'REPLACE SOON'
 if (myObject.taps[1].level == 2500 ){
mylevel.style.height= "107.9";
mylevel.style.y = "866";
kegok.style.fill = "green";
replace.style.fill = "red";
 console.log("color");
};

if (myObject.taps[1].level > 2500 && myObject.taps[1].level <= 2000){
    mylevel.style.height= "86.4";
    mylevel.style.y= "866";
};

if (myObject.taps[1].level > 2000 && myObject.taps[1].level <= 1250){
    mylevel.style.height= "44.4";
    mylevel.style.y= "866";
};

if (myObject.taps[1].level > 1250 && myObject.taps[1].level <= 500){
    mylevel.style.height= "24.4";
    mylevel.style.y= "866";
} ;

if (myObject.taps[1].level > 500 && myObject.taps[1].level <= 100){
    mylevel.style.height= "14.4";
    mylevel.style.y= "866";
} ;

if (myObject.taps[1].level > 100 && myObject.taps[1].level <= 1){
    mylevel.style.height= "3";
    mylevel.style.y = "866";
} ;

if (myObject.taps[1].level == 0){
    mylevel.style.height= "0";
    mylevel.style.y= "866";
} ;

if (myObject.taps[1].inUse == false){
    inuse.style.fill = "green";
    //TRYING TO MAKE THE BEER LEVEL GLOW WHEN THE TAP IS IN USE
    //TweenMax.to(mylevel,.3,{attr:{stdDeviation:4},repeat:-1,yoyo:true});
    //TweenLite.to(mylevel, 2.5, { ease: Elastic.easeOut.config(1, 0.3), y: -500 });
};


//THE NAMES OF THE BEER SHOW UNDER THE KEGS AND THEY CHANGE WHEN THE JSON CHANGES
let kegsButton = document.querySelector("#kegname1");
function showNames() {
    let names = ["#kegname1", "#kegname2", "#kegname3", "#kegname4", "#kegname5", "#kegname6", "#kegname7"];
    console.log(myObject.beertypes);
    document.querySelector("#kegname1 text").textContent = myObject.beertypes[1].name;
    document.querySelector("#kegname2 text").textContent = myObject.beertypes[2].name;
    document.querySelector("#kegname3 text").textContent = myObject.beertypes[3].name;
    document.querySelector("#kegname4 text").textContent = myObject.beertypes[4].name;
    document.querySelector("#kegname5 text").textContent = myObject.beertypes[5].name;
    document.querySelector("#kegname6 text").textContent = myObject.beertypes[6].name;
    document.querySelector("#kegname7 text").textContent = myObject.beertypes[7].name;
}


//ON CLICK, THE KEGS SHOW MODAL BOXES

// MODAL BOXES
function hideModal() {
    modal.classList.add('hide');
}


function showModalContent() {
    
    let modal = document.querySelector("#modal");
    let posters = ["#kegname1", "#kegname2", "#kegname3", "#kegname4", "#kegname5", "#kegname6", "#kegname7"];

    
    posters.forEach(function (theBeer) {

        let myBeer = myObject.beertypes[1];
            kegsButton.addEventListener('click', function () {
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



//THE INTERVAL THAT THE DATA IS FETCHED GOES HERE
// setInterval(() => showQueue(), 1000);
// console.log("hi mom");

showQueue()

showNames();
 showModalContent();