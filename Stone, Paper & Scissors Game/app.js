let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
// drawgame function
const drawgame=()=> {
  
    console.log("game draw");
}

// create function for generate com choice
const genComchoice= () =>{

    const option = ["rock","paper","sessior"]
    const rndchoice = Math.floor(Math.random()*3);
    return option[rndchoice];
}
const playGame = (userChoice) =>{
    console.log("user choice is ", userChoice);
    const comChoice = genComchoice();
    console.log("comp choice is ", comChoice);
    if(userChoi)
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
