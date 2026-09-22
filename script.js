let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");

let msgcontainer = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turnO =true; //playerX,playerO


const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const enableBoxes=()=>{ 
    for(let box of boxes){
        box.disabled=false; //when i do reset game or new game then again new boox came means game refres
        box.innerText=""; //box become empty
    }
};

const resetGame=() =>{ //let new game start again
    trunO=true;
    enableBoxes();
    msgcontainer.classList.add("hide"); //when game win msg container box remove but in this line when we do reset or new game then msgcontaner box again hide.
};

//add EventListener
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //console.log("box was clicked");
       // box.innerText="abc";

        if(turnO===true){ //playerO
            box.innerText="O";
            box.classList.add("o"); //it do 'O' red color see style
            turnO=false; //after put O one time it turn false
        }else{
            //playerX
            box.innerText="X";
            box.classList.add("x"); //it do 'O' blue color see style
            turnO=true;
        }
        box.disabled=true; //if i click the button once next time can't click the button
    
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};


const showWinner=(winner)=>{
    msg.innerText=`Congratulation,winer is ${winner}`;
    msgcontainer.classList.remove("hide"); //when someone win this time remove the hide of msg container box and show game page.
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        //console.log(pattern[0],pattern[1],pattern[2]);
        //console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val != "" && pos3Val != ""){ //here we check for winning row & col have there are no empty space 
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
                //console.log("Winner",pos2Val); //here i can write pos1Val or pos2Val or pos3 becose all the pos havs same thing after win
            
                showWinner(pos1Val); //i can use any pos (like pos1,po2..) because all store same .
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);