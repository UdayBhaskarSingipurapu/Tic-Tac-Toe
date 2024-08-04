let boxes=document.querySelectorAll(".box");
let newBtn=document.querySelector("#new-game");
let winner_msg=document.querySelector("#msg");
let msg_container=document.querySelector(".msg-container")

let turnO = true;
//2d array to store winning patterns
const patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            box.style.color='#1e3a8a'
            turnO=false;
        }
        else {
            box.innerText="X";
            box.style.color = 'black';
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        winner_msg.innerText="";
    }
}

const showWinner=(win)=>{
    winner_msg.innerText=`Congratulations, winner is Player ${win}` ;
    disableBoxes();
}

const drawn = ()=>{
    winner_msg.innerText="Match Drawn" ;
    disableBoxes();
}

const checkWinner = ()=>{
    for(let pattern of patterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner", pos1);
                showWinner(pos1);
            }
        }
    }
    let filled=true;
    for(let box of boxes){
        if(box.innerText === ""){
            filled = false;
            break;
        }
    }
    if(filled){
        drawn();
    }
}

newBtn.addEventListener("click", ()=>{
    turnO=true;
    enableBoxes();
})