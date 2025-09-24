let butt = document.querySelectorAll(".button");
let resetbutt = document.querySelector(".reset");
let newgmbtn=document.querySelector("#newgm");
let winnr = document.querySelector(".winn");
let winnerr=document.querySelector(".winner")
let turn = true;
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

butt.forEach((b)=>{
    b.addEventListener("click",()=>{
        if(turn){
            b.innerText="x";

            turn = false;
        }
        else{
            b.innerText="O";
            turn = true;
        }
        b.disabled=true;
        checkwin();
    })
})

const resetgame =()=>{
    turn = true;
    enabledbtn();
    winnr.classList.add("hide");

}
const enabledbtn=()=>{
    for(let box of butt){
        box.disabled=false;
        box.innerText="";
    }
}
const disabledbtn=()=>{
    for(let box of butt){
        box.disabled=true;
    }
}
const showwinner =(winner)=>{
    winnerr.innerText=`Congratulation ${winner} is winner`;
    winnr.classList.remove("hide");
    disabledbtn();
}
const checkwin = ()=>{
    for(let patt of winpattern){
        let pos1 = butt[patt[0]].innerText;
        let pos2 = butt[patt[1]].innerText;
        let pos3 = butt[patt[2]].innerText;

        if(pos1!=="" && pos2!=="" && pos3!=="" ){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
            }
        }

        // for(let i=0;i<patt.length;i++){
        //     if(butt[patt[i]].innerText==='x'){
        //         console.log("winner");
        //     }
        //     else if(butt[patt[i]].innerText==='O'){
        //         console.log("winner");
        //     }

        // }
    }
}

newgmbtn.addEventListener("click",resetgame);
resetbutt.addEventListener("click",resetgame);