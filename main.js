"use strict"
let myObject;

//getting data
let json = FooBar.getData();

//parsing the json file into an object and returning string
myObject = JSON.parse(json);
let pplInQueue = 0;



function showQueue() {
    //console.log(myObject.queue);
    document.querySelector("#queue").textContent = myObject.queue.length + "  waiting";

};
//THE INTERVAL THAT THE DATA IS FETCHED GOES HERE
setInterval(() => {
    json = FooBar.getData();
    myObject = JSON.parse(json);
    showQueue();
    drawGraph();
    baristas();
    whoIsWorking(myObject.bartenders);

}, 3000);















let mylevel = document.querySelector("#mylevel");
let kegok = document.querySelector("#pouring");
let replace = document.querySelector("#replace");
let inuse = document.querySelector("#tube");


// THE BEER LEVEL IN THE KEG DECREASES FOLLOWING THE IF STATEMENTS.

let alltaps = ["#tap1", "#tap2", "#tap3", "#tap4", "#tap5", "#tap6", "#tap7"];
let tapObjs = document.querySelectorAll('#taps g[id*="tap"]')
// console.log(tapObjs);
let thisTap = myObject.beertypes.level;
// console.log(thisTap)//  WHEN THE BEER LEVEL IS X, THE GREEN LINE INDICATES ´KEG IS OK' AND THE RED LINE INDICATES 'REPLACE SOON'
function showLevels() {

    tapObjs.forEach(function (item, index, array) {
        // console.log(index,array);
        let thisStore = myObject.beertypes.find(function (element) {
            return element.level === myObject.taps[index].level;

        });

    })


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

//Showing which of the bartenders is working
function whoIsWorking(bartenders) {

    console.log(bartenders);

    // loop through all the bartenders (forEach)
    // create a variable that is #bartenderName
    // if this.bartenders.status = ready 
    // document.qs.variable.classList.add (hide)
    // else remove(hide)
    //let barTenders = ["#Martin", "#Jonas", "#Peter"];

    bartenders.forEach((bartender) => {
        // console.log(barTenders)
        console.log(bartender);
        if (bartender.status == "READY") {
            console.log(bartender.status)
            document.querySelector(`#${bartender.name}`).classList.add("hideBartender")
            // console.log("ready");
        } else {
            console.log(bartender.status);
            document.querySelector(`#${bartender.name}`).classList.remove("hideBartender")
        }
    })

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
    // console.log(kegObjs)


    kegObjs.forEach(function (theKeg, index) {
        theKeg.addEventListener('click', function () {
            // console.log(myObject.taps[index]);
            //find beer in beertypes
            let thisBeer = myObject.beertypes.find(function (element) {
                return element.name === myObject.taps[index].beer;
            });


            // console.log(thisBeer)


            //showModalContent(theKeg);
            modal.classList.remove("hide")

            modal.querySelector(".name").textContent = thisBeer.name;
            modal.querySelector(".category").textContent = thisBeer.category;
            modal.querySelector(".img").src = thisBeer.label;
            modal.querySelector(".appearance").textContent = "Appearance:  " + thisBeer.description.appearance;
            modal.querySelector(".aroma").textContent = "Aroma: " + thisBeer.description.aroma;
            modal.querySelector(".flavor").textContent = "Flavor: " + thisBeer.description.flavor;
            modal.querySelector(".mouthfeel").textContent = "Mouthfeel: " + thisBeer.description.mouthfeel;
            modal.querySelector(".overall").textContent = "Short Description: " + thisBeer.description.overallImpression;
            modal.querySelector(".alcohol").textContent = "Alcohol %: " + thisBeer.alc;
            modal.querySelector(".popularity").textContent = "Where do our customers rank this beer?: " + thisBeer.popularity;
            // modal.querySelector(".more").textContent = "We have " + myObject.storage + " in storage";
            modal.addEventListener('click', hideModal);
        });






    })
};




function baristas() {

    document.querySelector(".status").textContent = "Peter is: " + myObject.bartenders[0].status;
    document.querySelector(".detail").textContent = " He is serving " + myObject.serving[0]
    document.querySelector(".status1").textContent = "Jonas is: " + myObject.bartenders[1].status;
    document.querySelector(".status2").textContent = "Martin is: " + myObject.bartenders[2].status;


}

const queueArray = [];

function drawGraph() {

    //another way
    // console.log(`ppl in queue:${myObject.queue.length}`);

    queueArray.push(myObject.queue.length);
    if (queueArray.length > 94) { // Length of graph - probably more than 10!
        queueArray.shift();
    }

    // build pointsArr from queueArray!
    const pointsArr = [];

    let x = 1;
    queueArray.forEach(queueLength => {
        const myArr = [x, 250 - (queueLength * 6)];
        x += 6;
        pointsArr.push(myArr);
    });

    document.querySelector('#graph polyline').setAttribute('points', pointsArr.join(" "));

    let myDraw = document.querySelector('#graph polyline');
}

let storage = myObject.storage;

function showStorage() {

    storage.forEach(function (item, index, array) {
        console.log(index,item);
        let thisStore = myObject.storage.find(function (element) {
            return element.amount === myObject.storage[index].amount;
            

        });
        document.querySelector(".storage").textContent ="We have " + myObject.storage[0].amount + " kegs left " + "of " +  storage[0].name;
        document.querySelector(".storage1").textContent ="We have " + myObject.storage[1].amount + " kegs left " + "of " +  storage[1].name;
        document.querySelector(".storage2").textContent ="We have " + myObject.storage[2].amount + " kegs left " + "of " +  storage[2].name;
        document.querySelector(".storage3").textContent ="We have " + myObject.storage[3].amount + " kegs left " + "of " +  storage[3].name;
        document.querySelector(".storage4").textContent ="We have " + myObject.storage[4].amount + " kegs left " + "of " +  storage[4].name;
        document.querySelector(".storage5").textContent ="We have " + myObject.storage[5].amount + " kegs left " + "of " +  storage[5].name;
        document.querySelector(".storage6").textContent ="We have " + myObject.storage[6].amount + " kegs left " + "of " +  storage[6].name;
        document.querySelector(".storage7").textContent ="We have " + myObject.storage[7].amount + " kegs left " + "of " +  storage[7].name;
        document.querySelector(".storage8").textContent ="We have " + myObject.storage[8].amount + " kegs left " + "of " +  storage[8].name;
        document.querySelector(".storage9").textContent ="We have " + myObject.storage[9].amount + " kegs left " + "of " +  storage[9].name;
        

        
    })




}


//whoIsWorking(myObject.bartenders);
showStorage();
baristas();
showLevels();
hideModal();
showQueue();
showNames();
showModalContent();