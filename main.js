"use strict"
let myObject;

//getting data
let json = FooBar.getData();

//parsing the json file into an object and returning string
myObject = JSON.parse(json);



function showQueue() {
    //console.log(myObject.queue);
    document.querySelector("#queue").textContent = myObject.queue.length + "  waiting";
    //THE INTERVAL THAT THE DATA IS FETCHED GOES HERE
    // setInterval(showQueue, 10000);

    // console.log("hi mom");
};




//Showing which of the bartenders is working
function whoIsWorking() {
    if (myObject.bartenders.status = "READY") {

    } else {
        document.querySelector("#Jonas").classList.add("hide");
        document.querySelector("#Martin").classList.add("hide");
        document.querySelector("#Peter").classList.add("hide");

    }
}


let mylevel = document.querySelector("#mylevel");
let kegok = document.querySelector("#pouring");
let replace = document.querySelector("#replace");
let inuse = document.querySelector("#tube");


// THE BEER LEVEL IN THE KEG DECREASES FOLLOWING THE IF STATEMENTS.
//  WHEN THE BEER LEVEL IS X, THE GREEN LINE INDICATES ´KEG IS OK' AND THE RED LINE INDICATES 'REPLACE SOON'
function showLevels(){

    let tapObjs = document.querySelectorAll('#taps g[id*="tap"]')
    console.log(tapObjs);
    let thisTap = myObject.beertypes.level;
    console.log(thisTap)

    

if (myObject.taps.level == 2500) {
    mylevel.style.height = "107.9";
    mylevel.style.y = "866";
    kegok.style.fill = "green";
    replace.style.fill = "red";
    //  console.log("color");
};

if (myObject.taps.level > 2500 && myObject.taps[1].level <= 2000) {
    mylevel.style.height = "86.4";
    mylevel.style.y = "866";
};

if (myObject.taps.level > 2000 && myObject.taps[1].level <= 1250) {
    mylevel.style.height = "44.4";
    mylevel.style.y = "866";
};

if (myObject.taps.level > 1250 && myObject.taps[1].level <= 500) {
    mylevel.style.height = "24.4";
    mylevel.style.y = "866";
};

if (myObject.taps.level > 500 && myObject.taps[1].level <= 100) {
    mylevel.style.height = "14.4";
    mylevel.style.y = "866";
};

if (myObject.taps.level > 100 && myObject.taps[1].level <= 1) {
    mylevel.style.height = "3";
    mylevel.style.y = "866";
};

if (myObject.taps.level == 0) {
    mylevel.style.height = "0";
    mylevel.style.y = "866";
};

if (myObject.taps.inUse == false) {
    inuse.style.fill = "green";
    //TRYING TO MAKE THE BEER LEVEL GLOW WHEN THE TAP IS IN USE
    //TweenMax.to(mylevel,.3,{attr:{stdDeviation:4},repeat:-1,yoyo:true});
    //TweenLite.to(mylevel, 2.5, { ease: Elastic.easeOut.config(1, 0.3), y: -500 });
};
};

let names = ["#kegname1", "#kegname2", "#kegname3", "#kegname4", "#kegname5", "#kegname6", "#kegname7"];
//THE NAMES OF THE BEER SHOW UNDER THE KEGS AND THEY CHANGE WHEN THE JSON CHANGES

function showNames() {

    // console.log(myObject.beertypes);
    document.querySelector(".kegname1 text").textContent = myObject.taps[0].beer;
    document.querySelector(".kegname2 text").textContent = myObject.taps[1].beer;
    document.querySelector(".kegname3 text").textContent = myObject.taps[2].beer;
    document.querySelector(".kegname4 text").textContent = myObject.taps[3].beer;
    document.querySelector(".kegname5 text").textContent = myObject.taps[4].beer;
    document.querySelector(".kegname6 text").textContent = myObject.taps[5].beer;
    document.querySelector(".kegname7 text").textContent = myObject.taps[6].beer;

}



//ON CLICK, THE KEGS SHOW MODAL BOXES
let kegsButton = document.querySelector("#keg1");
// MODAL BOXES
function hideModal() {
    modal.classList.add("hide");
}


function showModalContent() {

    let modal = document.querySelector("#modal");
    let kegs = ["#keg1", "#keg2", "#keg3", "#keg4", "#keg5", "#keg6", "#keg7"];
    let kegObjs = document.querySelectorAll('#kegs g[id*="keg"]')
    console.log(kegObjs)


    kegObjs.forEach(function (theKeg, index) {
        theKeg.addEventListener('click', function () {
            console.log(myObject.taps[index]);
            //find beer in beertypes
            let thisBeer = myObject.beertypes.find(function (element) {
                return element.name === myObject.taps[index].beer;
            });
            console.log(thisBeer)


            //showModalContent(theKeg);
            modal.classList.remove("hide")

            modal.querySelector(".name").textContent = thisBeer.name;
            modal.querySelector(".category").textContent = thisBeer.category;
            modal.querySelector(".appearance").textContent = "Appearance:  " + thisBeer.description.appearance;
            modal.querySelector(".aroma").textContent = "Aroma: " + thisBeer.description.aroma;
            modal.querySelector(".flavor").textContent = "Flavor: " + thisBeer.description.flavor;
            modal.querySelector(".mouthfeel").textContent = "Mouthfeel: " + thisBeer.description.mouthfeel;
            modal.querySelector(".overall").textContent = "Short Description: " + thisBeer.description.overallImpression;
            modal.querySelector(".alcohol").textContent = "Alcohol %: " + thisBeer.alc;
            modal.querySelector(".popularity").textContent = "Where do our customers rank this beer?: " + thisBeer.popularity;
        
            modal.addEventListener('click', hideModal);
        });






    })
};





showLevels();
hideModal();
whoIsWorking();
showQueue();
showNames();
showModalContent();