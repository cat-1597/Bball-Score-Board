
//document.getElementById("guest-points").innerText = 0
//document.getElementById("home-points").innerText = 0

let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")


let homeCount = 0
let guestCount = 0

function homePlusOne() {
    homeScoreOne = homeCount += 1
    homePoints.innerText = homeScoreOne
}

function homePlusTwo() {
    homeScoreTwo = homeCount += 2
    homePoints.innerText = homeScoreTwo
}

function homePlusThree() {
    homeScoreThree = homeCount += 3
    homePoints.innerText = homeScoreThree
}


function guestPlusOne() {
    guestScoreOne = guestCount += 1
    guestPoints.innerText = guestScoreOne 
    console.log(guestScoreOne)    
}

function guestPlusTwo() {
    guestScoreTwo = guestCount += 2
    guestPoints.innerText = guestScoreTwo
}

function guestPlusThree() {
    guestScoreThree = guestCount += 3
    guestPoints.innerText = guestScoreThree
}
