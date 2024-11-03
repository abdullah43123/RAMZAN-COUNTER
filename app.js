var getDays = document.querySelector(".days").innerHTML = (`<span> ${DaysCounter()} </span>`)
var getHours = document.querySelector(".hours")
var getMinutes = document.querySelector(".minutes")

// console.log(getDays);
// console.log(getHours);
// console.log(getMinutes);

// var result = getDays.innerHTML(`<span> ${DaysCounter()} </span>`)
// console.log(result);


var todayDate = new Date();
// console.log(todayDate);

var ramzanDate = new Date("March 01, 2025")
// console.log(ramzanDate);
 
var diff = (Math.floor(ramzanDate.getTime())) - (Math.floor(todayDate.getTime())) 

function DaysCounter() {
    var classic = Math.floor(diff / (1000 * 60 * 60 * 24))
    console.log(classic);
    
}

DaysCounter()

function HoursCounter() {
    var hrresult = Math.floor(diff / (1000 * 60 * 60))
    console.log(hrresult);
    
}

HoursCounter()
function minCounters() {
    var minresult = Math.floor(diff / (1000 * 60))
    console.log(minresult);
    
}


// function name(params) {
//     var secresult = Math.floor(diff / (1000))
//     console.log(secresult);
    
// }





// var todayDateMS = todayDate.getTime()
// console.log(todayDateMS)

// var ramzanDateMS = ramzanDate.getTime()
// console.log(ramzanDateMS)

// var diff = ramzanDateMS - todayDateMS;
// console.log(diff);

// var dayRemain = diff / (1000 * 60 * 60 * 24);
// // console.log(dayRemain);

// var finalValue = Math.floor(dayRemain)
// console.log(finalValue);

// var hoursRemain = diff / (1000 * 60 * 60);
// // console.log(hoursRemain);

// var finalValue = Math.floor(hoursRemain)
// console.log(finalValue);

// var minuteRemain = diff / (1000 * 60);
// // console.log(minuteRemain);

// var finalValue = Math.floor(minuteRemain)
// console.log(finalValue);



