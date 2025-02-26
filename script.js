let b = document.querySelectorAll(".box");
let r = document.querySelector("#reset");
let n = document.querySelector("#new");
let mb = document.querySelector("#msgbox");
let m = document.querySelector("#winmsg");
let count = 0;

let turn = 1;

const win_pattern = [    // 2D array
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];


b.forEach(box => {
    box.addEventListener("click",function(){
        console.log("Box was clicked");           
        if (turn==1){   // turn of player x 
            box.innerHTML = "X";
            turn=0;
            box.style.backgroundColor="blue"; 
        }
        else {          //  turn of player 0
            box.innerHTML = "0";
            turn=1;
            box.style.backgroundColor="purple"; 
        }
        box.disabled = true;
        count++ ;
                        
        check_Winner(count);
    })
})


function check_Winner(count){
    for (let element of win_pattern){
        let v1 = b[element[0]].innerHTML;
        let v2 = b[element[1]].innerHTML;
        let v3 = b[element[2]].innerHTML;

        if (v1!="" && v1==v2 && v1==v3){
            console.log("Winner",v1);
            PrintWinner (v1);
            DisableButtons();

            b[element[0]].style.backgroundColor = "gold";
            b[element[1]].style.backgroundColor = "gold";
            b[element[2]].style.backgroundColor = "gold";
            return;
        }

        else if (count==9){
            console.log("Draw");
            PrintDraw();
            DisableButtons();
        }
        
    }
}

function PrintWinner(winner){
    m.innerHTML = `Congratulations , Winner is ${winner}`;
    mb.style.display = "block";
}

function PrintDraw (){
    m.innerHTML = "Oops, No Result";
    mb.style.display = "block";
}

function DisableButtons (){
    b.forEach(box => {
        box.disabled = true;
    })
}

function EnableButtons (){
    b.forEach(box => {
        box.disabled = false;
    })
}

function ResetGame (){
    turn = 1;
    EnableButtons() ;
    mb.style.display = "none";
    count=0;
    b.forEach(box=>{
        box.innerHTML="";
        box.style.backgroundColor = "";
        // or  box.style.backgroundColor = "your-color";
    })
}

r.addEventListener("click",ResetGame);
n.addEventListener("click",ResetGame);