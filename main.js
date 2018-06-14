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
    showLevels(myObject);
    baristas();
    whoIsWorking(myObject.bartenders);
    counting(myObject);

}, 1000);

















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

    // console.log(bartenders);

    // loop through all the bartenders (forEach)
    // create a variable that is #bartenderName
    // if this.bartenders.status = ready 
    // document.qs.variable.classList.add (hide)
    // else remove(hide)
    //let barTenders = ["#Martin", "#Jonas", "#Peter"];

    bartenders.forEach((bartender) => {
        // console.log(barTenders)
        // console.log(bartender);
        if (bartender.status == "READY") {
            console.log(bartender.status)
            document.querySelector(`#${bartender.name}`).classList.add("hideBartender")
            // console.log("ready");
        } else {
            // console.log(bartender.status);
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
            modal.querySelector(".name").textContent ="Name: " + thisBeer.name;
            modal.querySelector(".category").textContent ="Category: " + thisBeer.category;
            modal.querySelector(".label").src = thisBeer.label;
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

    document.querySelector(".textbox").textContent = "Peter is: " + myObject.bartenders[0].status;
    document.querySelector(".textbox1").textContent = "Jonas is: " + myObject.bartenders[1].status;
    document.querySelector(".textbox2").textContent = "Martin is: " + myObject.bartenders[2].status;


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
    const top = 25;
    const bot = 285;

    let x = 1;
    queueArray.forEach(queueLength => {
        const y = (1-(queueLength/25)) * (bot-top) + top;
        pointsArr.push([x, y]);
        
        x += 6;
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
    
};

// THE BEER LEVEL IN THE KEG DECREASES FOLLOWING THE IF STATEMENTS.
//  WHEN THE BEER LEVEL IS X, THE GREEN LINE INDICATES ´KEG IS OK' AND THE RED LINE INDICATES 'REPLACE SOON'
let mylevel = document.querySelectorAll(".mylevel rect");
let kegok2 = document.querySelectorAll(".kegok .st19");
let kegok = document.querySelectorAll(".kegok .st20");
let replace = document.querySelectorAll(".kegreplace .st200");
let replace2 = document.querySelectorAll(".kegreplace .st2001");
let inuse = document.querySelectorAll(".st62");

//kegok.concat(kegok2);
//console.log(kegok);

console.log(kegok);

function showLevels(tapObj){
    // console.log(tapObj);
    let alltaps = tapObj.taps; 
    for (let i=0;i<alltaps.length;i++)  {

        let tap=alltaps[i];
    // alltaps.forEach((tap, i) =>{
    //console.log(tap);
//let alltaps = document.querySelector("[data-tabid]" + i);
let level=mylevel[i];
let kegokPath=kegok[i];
let kegokPath2=kegok2[i];
let replacePath=replace[i];
let replacePath2=replace2[i];

if (tap.level == 2500 ){
//    console.log(tap.level);
    // console.log(mylevel);
    
        level.style.height= "0";
        level.style.y = "866";

        kegokPath.style.fill = "green";
        kegokPath2.style.fill = "green";     

};

if (tap.level <= 2450 && tap.level >1000 ){

            level.style.height= "40";
            level.style.y = "866";

            kegokPath.style.fill = "#D1D1D3";
            kegokPath2.style.fill = "#D1D1D3";

            replacePath.style.fill = "orange";
            replacePath2.style.fill = "orange";

}

if (tap.level <= 1000 && tap.level >500){

            level.style.height= "70";
            level.style.y = "866";

            kegokPath.style.fill = "#D1D1D3";
            kegokPath2.style.fill = "#D1D1D3";

            replacePath.style.fill = "red";
            replacePath2.style.fill = "red";
    }


    if (tap.level <= 500){

        level.style.height= "90";
        level.style.y = "866";

        kegokPath.style.fill = "#D1D1D3";
        kegokPath2.style.fill = "#D1D1D3";

        replacePath.style.fill = "red";
        replacePath2.style.fill = "red";
}

    let onetap = inuse[i];
    var tl = new TimelineMax({repeat: -1});
if (tap.inUse == true ){
    console.log(tap.inUse);

            onetap.style.fill= "#daa520";
tl
        .fromTo(onetap, 3, {autoAlpha: 1}, {autoAlpha: 0})

    }
    else{
        onetap.style.fill= "#dbdbdb";
        onetap.style.stoke= "2";

        tl 
        .fromTo(onetap, 2.3, {autoAlpha: 1}, {autoAlpha: 1, immediateRender:false})
    };



};
};



let totalBeers = 0;
    let lastCustomer = 0;
    function counting(myObj){
        // console.log(myObj)
        document.querySelector("#countbeer").textContent = "Total beers served: " + totalBeers;
        myObj.serving.forEach(servedCustomer=>{
            if(servedCustomer.id>lastCustomer){
            
            // servedCustomer.id
            totalBeers += servedCustomer.order.length;
             // remember this id was$ the last one counted
            lastCustomer = servedCustomer.id;

           
        }
        })
        // console.log(totalBeers);
    }



//whoIsWorking(myObject.bartenders);
showStorage();
baristas();
hideModal();
showQueue();
showNames();
showModalContent();