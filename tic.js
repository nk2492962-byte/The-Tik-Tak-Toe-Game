let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#restbutton");
let newbutton=document.querySelector("#newbutton");
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let turnO = true; // playerX,playerY
let count = 0; // Track button clicks for draw condition
const resetgame=()=>{
    turnO=true;
    count=0;
enablesboxes();
msgcontainer.classList.add("hide");
}
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked!");

    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    checkwinner();
    if(count===9){
        showdraw();
    }
  });
});
const disablesboxes=()=>{
    for(let box of boxes){
         box.disabled=true;
    }
}
const enablesboxes=()=>{
    for(let box of boxes){
         box.disabled=false;
         box.innerText="";
    }
}
let showwinner=(winner)=>{
    msg.innerText=`Congratulation The winner is ${winner}`;
     msgcontainer.classList.remove("hide");
     disablesboxes();
}
let showdraw=()=>{
    msg.innerText=`Game was a Draw`;
     msgcontainer.classList.remove("hide");
     disablesboxes();
}
const checkwinner = () => {
  for (let pattern of winpattern) {
   
      let postval1=boxes[pattern[0]].innerText;
      let postval2=boxes[pattern[1]].innerText;
      let postval3=boxes[pattern[2]].innerText;
    if(postval1!=""&& postval2!=""&&postval3!=""){
         if(postval1===postval2&&postval2===postval3){
             console.log("congratulation winner ",postval1)
             showwinner(postval1);
         }
    }
  }
};
newbutton.addEventListener("click",resetgame);

reset.addEventListener("click",resetgame);
