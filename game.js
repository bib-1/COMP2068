//INSTALL PACKAGE
var prompt = require('prompt');

// Start the prompt
prompt.start();

//INPUT

//Message
console.log("Choose SCISSOR or PAPER or ROCK:");

//variable to store user's choice

var userChoice;
// Get a choice from user from the user: username
prompt.get(['choice'], function (err, result) {
  
    userChoice = result.choice;
    //changing user input into uppercase for comparing
    userChoice = String(userChoice).toUpperCase();
    console.log("--------------------------");
    console.log(`Your choice: ${userChoice}`);

    //getting random value
    let randomValue = Math.random();

    //PROCESS

    //getting the computer's input
    var computerChoice;

    if(randomValue <= 0.35){
        computerChoice = 'PAPER';
    }
    else if(randomValue > 0.34 && randomValue < .68){
        computerChoice = 'SCISSOR';
    }
    else{
        computerChoice = 'ROCK';
    }

    //deciding the winner

    //stores the result
    var result;
    //conditions
   if((computerChoice === "SCISSOR" && userChoice ==="PAPER") 
            || (computerChoice === "ROCK" && userChoice ==="SCISSOR") 
            || (computerChoice === "PAPER" && userChoice ==="ROCK")){
        result = `Computer Wins`;
    }
    else if((userChoice === "SCISSOR" && computerChoice ==="PAPER") 
            || (userChoice === "ROCK" && computerChoice ==="SCISSOR") 
            || (userChoice === "PAPER" && computerChoice ==="ROCK")){
        result = `User Wins`;
    }
    else{
        result = `It's a tie`;
    }

    //OUTPUT
    console.log(`Computer's choice: ${computerChoice}`);
    console.log("--------------------------");
    console.log(result);
});




