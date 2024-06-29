let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#new_btn");
let resuLt = document.querySelector(".result");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    resuLt.classList.add("hide");

};

boxes.forEach((box)=>{box.addEventListener("click", () =>{
 
    if(turn0){
     box.innerText ="O";
     turn0=false; 
    }
    else{
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;
    checkWinner(); //function

}); 
});

const disableboxs = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations! Winner is ${winner}`;
    resuLt.classList.remove("hide");
    disableboxs();
};

const checkWinner = () => {
    for( let pattern of winpattern){
        let pos1Val =boxes[pattern[0]].innerText; 
        let pos2Val =boxes[pattern[1]].innerText; 
        let pos3Val =boxes[pattern[2]].innerText; 

        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val=== pos3Val){              
                showWinner(pos1Val);  
            }
        }
    }
};

newGame.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);