
// Logic to make the computer return a random rock paper or scissors
function getComputerChoice() {
    var cpurock = "rock"
    var cpupaper = "paper"
    var cpuscissors = "scissors"

    var randomnumber = Math.floor(Math.random() * 3)

    switch (randomnumber) {
        case 0:
            return cpurock
        case 1: 
            return cpupaper
        case 2: 
            return cpuscissors
    }
}

// Player selects rock
function playerRock() {
    var cpuchoice = getComputerChoice();
    console.log("player = rock", "cpu =", cpuchoice);
    if(cpuchoice == "rock") {
        console.log("Tie")
    } else if(cpuchoice == "scissors") {
        console.log("Player Wins")
    } else {
        console.log("Player Loses")
    }
}

//Player selects paper
function playerPaper() {
    var cpuchoice = getComputerChoice();
    console.log("player = paper", "cpu =", cpuchoice);
    if(cpuchoice == "rock") {
        console.log("Player Wins")
    } else if(cpuchoice == "scissors") {
        console.log("Player Loses")
    } else {
        console.log("Tie")
    }
}

//Player selects scissors
function playerScissors() {
    var cpuchoice = getComputerChoice();
    console.log("player = scissors", "cpu =", cpuchoice);
    if(cpuchoice == "rock") {
        console.log("Player Loses")
    } else if(cpuchoice == "scissors") {
        console.log("Tie")
    } else {
        console.log("Player Wins")
    }
}