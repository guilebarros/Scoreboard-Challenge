let homeScore = 0
let guestScore = 0

let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")

let homeScoreColor = document.getElementById("home-points")
let guestScoreColor = document.getElementById("guest-points")

function changeHomeFontColor() {
    homeScoreColor.style.color = "#10B981"   
}

function changeGuestFontColor() {
    guestScoreColor.style.color = "#10B981"
}

function defaultHomeFontColor() {
    homeScoreColor.style.color = "#F94F6D"
}

function defaultGuestFontColor() {
    guestScoreColor.style.color = "#F94F6D"
}

function isHomeWinner() {
    if (homeScore > guestScore) {
        changeHomeFontColor()
    } else {
        defaultHomeFontColor()
    }
}

function isGuestWinner() {
    if (homeScore < guestScore) {
        changeGuestFontColor()
    } else {
        defaultGuestFontColor()
    }
}


function addOneHome() {
    homeScore += 1
    homePoints.textContent = homeScore
    isHomeWinner()
    isGuestWinner()
}

function addTwoHome() {
    homeScore += 2
    homePoints.textContent = homeScore
    isHomeWinner()
    isGuestWinner()
}

function addThreeHome() {
    homeScore += 3
    homePoints.textContent = homeScore
    isHomeWinner()
    isGuestWinner()
}

function addOneGuest() {
    guestScore += 1
    guestPoints.textContent = guestScore
    isGuestWinner()
    isHomeWinner()
}

function addTwoGuest() {
    guestScore += 2
    guestPoints.textContent = guestScore
    isGuestWinner()
    isHomeWinner()
}

function addThreeGuest() {
    guestScore += 3
    guestPoints.textContent = guestScore
    isGuestWinner()
    isHomeWinner()
}



