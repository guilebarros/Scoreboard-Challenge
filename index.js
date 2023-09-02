let homeScore = 0
let guestScore = 0

let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")

function addOneHome() {
    homeScore += 1
    homePoints.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homePoints.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homePoints.textContent = homeScore
}

function addOneGuest() {
    guestScore += 1
    guestPoints.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestPoints.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestPoints.textContent = guestScore
}