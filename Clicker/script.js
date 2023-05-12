let clickButton = document.getElementById("clickButton")
let up1 = document.getElementById("upgrade1")
let up2 = document.getElementById("upgrade2")
let up3 = document.getElementById("upgrade3")
let up4 = document.getElementById("upgrade4")
let up5 = document.getElementById("upgrade5")
let up6 = document.getElementById("upgrade6")
let cheat = document.getElementById("cheat")
let cheat2 = document.getElementById("cheat2")


/////////////////////////////////////////////////////////

let allClick = 0;
let clicks = 0;
let value = 1;

/////////////////////////////////////////////////////////

clickButton.addEventListener("mousedown", e => {
    clickButton.style.backgroundColor="rgb(185, 98, 98)"
})
clickButton.addEventListener("mouseup", e => {
    clickButton.style.backgroundColor="lightcoral"
    clicks += value;
    document.getElementById("score").innerHTML = clicks;

    allClick += 1;
    document.getElementById("allClicks").innerHTML = "Clicks: "+allClick;

    if(clicks >= 50) {
        document.getElementById("score").innerHTML = clicks;
        up1.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up1.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 1000) {
        document.getElementById("score").innerHTML = clicks;
        up2.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up2.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 5000) {
        document.getElementById("score").innerHTML = clicks;
        up3.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up3.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 10000) {
        document.getElementById("score").innerHTML = clicks;
        up4.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up4.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }
    

    if(clicks >= 20000) {
        document.getElementById("score").innerHTML = clicks;
        up5.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up5.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }
    

    if(clicks >= 50000) {
        document.getElementById("score").innerHTML = clicks;
        up6.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up6.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }
    
    
})


// Upgrades
up1.addEventListener("click", e => {
    if(clicks >= 50) {
        clicks -= 50
        document.getElementById("score").innerHTML = clicks;
        value += 1
    }
    else {
        alert("You don't have enough clicks!")
    }
})

up2.addEventListener("click", e => {
    if(clicks >= 1000) {
        clicks -= 1000
        document.getElementById("score").innerHTML = clicks;
        value += 5
    }
    else {
        alert("You don't have enough clicks!")
    }
})

up3.addEventListener("click", e => {
    if(clicks >= 5000) {
        clicks -= 5000
        document.getElementById("score").innerHTML = clicks;
        value += 10
    }
    else {
        alert("You don't have enough clicks!")
    }
})

up4.addEventListener("click", e => {
    if(clicks >= 10000) {
        clicks -= 10000
        document.getElementById("score").innerHTML = clicks;
        value += 20
    }
    else {
        alert("You don't have enough clicks!")
    }
})

up5.addEventListener("click", e => {
    if(clicks >= 20000) {
        clicks -= 20000
        document.getElementById("score").innerHTML = clicks;
        value += 30
    }
    else {
        alert("You don't have enough clicks!")
    }
})

up6.addEventListener("click", e => {
    if(clicks >= 50000) {
        clicks -= 50000
        document.getElementById("score").innerHTML = clicks;
        value += 50
    }
    else {
        alert("You don't have enough clicks!")
    }
})

cheat.addEventListener("click", e => {
    clicks += 1000;
    document.getElementById("score").innerHTML = clicks;
})
cheat2.addEventListener("click", e => {
    clicks += 10000;
    document.getElementById("score").innerHTML = clicks;
})




