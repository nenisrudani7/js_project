let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uscore= document.querySelector("#user-score");
const cscore= document.querySelector("#comp-score");

// drawgame function
const drawgame=()=> {
  
    console.log("game  was draw");
    msg.innerText = "Game was Draw , try again";
}

const showwinner = (userWin) =>{
    if(userWin){
        console.log("you win!");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        userScore++;
        uscore.innerText =  userScore;
    }
    else{
        console.log("you lose");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
        compScore++;
        cscore.innerText =  compScore;
    }
}

// create function for generate com choice
const genComchoice= () =>{

    const option = ["rock","paper","scissors"]
    const rndchoice = Math.floor(Math.random()*3);
    return option[rndchoice];
}
const playGame = (userChoice) =>{
    console.log("user choice is ", userChoice);
    const comChoice = genComchoice();
    console.log("comp choice is ", comChoice);
    if(userChoice == comChoice){
        drawgame();
       
    }
    else{
        let userWin = true;
        if(userChoice = "rock"){
            userWin = comChoice === "paper" ? false : true;
    }   else if (comChoice = "paper"){
        userWin = comChoice === "scissors"? false : true;
}
     else{
        userWin =comChoice === "rock"? false : true;
     }
     showwinner(userWin);
    }
}



// take foreach loop and add evenetlistner to get choice from user
choices.forEach((choice) => {
    console.log("choice");
    choice.addEventListener("click", () => {
        const  userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userchoiceId);
        playGame(userChoice);
    })
})
