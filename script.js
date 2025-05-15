let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;  // PlayerX & Player0

const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBox();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box) => {

    box.addEventListener("click", () => {
        if (turn0) { //Player0
            box.innerText = "0";
            turn0 = false;
        } else {   //PlayerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        CheckWinner();
    });
});

const disabledBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
   msg.innerText = `Congratulations, Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disabledBox();
};

const CheckWinner = () => {
    for (let pattern of WinPatterns) {
        let Pos1Val = boxes[pattern[0]].innerText;
        let Pos2Val = boxes[pattern[1]].innerText;
        let Pos3Val = boxes[pattern[2]].innerText;
        
        if(Pos1Val != "" && Pos2Val != "" && Pos3Val != ""){
            if(Pos1Val == Pos2Val && Pos2Val == Pos3Val){     
                showWinner(Pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

