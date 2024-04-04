// Logic to make the computer return a random rock paper or scissors
const playercounter = document.getElementById("player-counter");
const cpucounter = document.getElementById("cpu-counter");
const message = document.getElementById("message");
const playerpick = document.getElementById("player-pick");
const cpupick = document.getElementById("cpu-pick");

var playerwin = 0;
var cpuwin = 0;

function getComputerChoice() {
  var cpurock = "Rock";
  var cpupaper = "Paper";
  var cpuscissors = "Scissors";

  var randomnumber = Math.floor(Math.random() * 3);

  switch (randomnumber) {
    case 0:
      return cpurock;
    case 1:
      return cpupaper;
    case 2:
      return cpuscissors;
  }
}

function playerWon() {
  if (confirm("You Win! \nHit OK to play again.")) {
    window.location.reload();
  }
}

function cpuWon() {
    if (confirm("You Lose! \nHit OK to play again.")) {
      window.location.reload();
    }
  }
  
// Player selects rock
function playerRock() {
  var cpuchoice = getComputerChoice();
  playerpick.innerHTML = "Rock";

  console.log("player = rock", "cpu =", cpuchoice);

 
    if (cpuchoice == "Rock") {
      // Tie
      console.log("Tie");
      message.innerHTML = "Tie";
      cpupick.innerHTML = cpuchoice;
    } else if (cpuchoice == "Scissors") {
      // Player Wins
      console.log("Player Wins");
      message.innerHTML = "Player Wins";
      cpupick.innerHTML = cpuchoice;
      playerwin++;
      playercounter.innerHTML = playerwin;
      if (playerwin == 5) {
        setTimeout(playerWon, 100);
      }
    } else {
      //cpu wins
      console.log("Player Loses");
      message.innerHTML = "Player Loses";
      cpupick.innerHTML = cpuchoice;
      cpuwin++;
      cpucounter.innerHTML = cpuwin;
      if (cpuwin == 5) {
        setTimeout(cpuWon, 100);
      }
    }
  } 


//Player selects paper
function playerPaper() {
    var cpuchoice = getComputerChoice();
    playerpick.innerHTML = "Paper";
  
    console.log("player = Paper", "cpu =", cpuchoice);
  
   
      if (cpuchoice == "Rock") {
        // Tie
        console.log("Player Wins");
        message.innerHTML = "Player Wins";
        cpupick.innerHTML = cpuchoice;
        playerwin++;
        playercounter.innerHTML = playerwin;
        if (playerwin == 5) {
          setTimeout(playerWon, 100);
        }
      } else if (cpuchoice == "Scissors") {
        // Player Wins
        console.log("Player Loses");
        message.innerHTML = "Player Loses";
        cpupick.innerHTML = cpuchoice;
        cpuwin++;
        cpucounter.innerHTML = cpuwin;
        if (cpuwin == 5) {
          setTimeout(cpuWon, 100);
        }
      } else {
        //cpu wins
        console.log("Tie");
        message.innerHTML = "Tie";
        cpupick.innerHTML = cpuchoice;
        
      }
}

//Player Selects Scissors
function playerScissors() {
    var cpuchoice = getComputerChoice();
    playerpick.innerHTML = "Scissors";
  
    console.log("player = Scissors", "cpu =", cpuchoice);
  
   
      if (cpuchoice == "Rock") {
        // Tie
        console.log("Player Loses");
        message.innerHTML = "Player Loses";
        cpupick.innerHTML = cpuchoice;
        cpuwin++;
        cpucounter.innerHTML = cpuwin;
        if (cpuwin == 5) {
          setTimeout(cpuWon, 100);
        }
      } else if (cpuchoice == "Scissors") {
        // Player Wins
        console.log("Tie");
        message.innerHTML = "Tie";
        cpupick.innerHTML = cpuchoice;
       
      } else {
        //cpu wins
        console.log("Player Wins");
        message.innerHTML = "Player Wins";
        cpupick.innerHTML = cpuchoice;
        playerwin++;
        playercounter.innerHTML = playerwin;
        if (playerwin == 5) {
          setTimeout(playerWon, 100);
        }
        
      }
}
