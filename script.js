var i = 1 ;
var draw=0;
var c = 0 ;
const click = new Audio("click.mp3");
const win = new Audio("winner.mp3");
const clapping = new Audio("clap.mp3")
click.playbackRate = 3 ;
var player ;

document.addEventListener('click',function(e){
    
    if(e.target.innerHTML == '' && player == 2)
    {
        if(i%2==0)
        {
            if(draw==0)
            {
                click.play();
                e.target.innerHTML = "O" ;
                i++;
                document.getElementById('info').innerText = " It's Move For X";
                isWin();
            }
        }
        else
        {
            if(draw==0)
            {
                click.play();
                e.target.innerHTML = "X" ;
                i++;
                document.getElementById('info').innerText = " It's Move For O";
                isWin();
            }

        }
        
    }
    
    
})

document.addEventListener('click',function(e){
    
    if(e.target.innerHTML == '' && player == 1)
    {
        if(draw==0)
        {
            click.play();
            e.target.innerHTML = "X" ;
            document.getElementById('info').innerText = " Computer Is Thinking....";
            isWin();
            if(draw==0)
            {
                delay();
            }
        }
    }
    
    
})

function computer() {
    
    for (let index = 5; index <= 15; index++) {
        if (index !== 8 && index !== 12) {
            if (document.getElementsByTagName('div')[index].innerText === "") {
                document.getElementsByTagName('div')[index].innerText = "O";
                if (isWinningMove("O")) {
                    click.play();
                    document.getElementById('info').innerText = " It's Move For X";
                    isWin();
                    return;
                } else {
                    document.getElementsByTagName('div')[index].innerText = "";
                }
            }
        }
    }

    
    for (let index = 5; index <= 15; index++) {
        if (index !== 8 && index !== 12) {
            if (document.getElementsByTagName('div')[index].innerText === "") {
                document.getElementsByTagName('div')[index].innerText = "X";
                if (isWinningMove("X")) {
                    click.play();
                    document.getElementsByTagName('div')[index].innerText = "O";
                    document.getElementById('info').innerText = " It's Move For X";
                    isWin();
                    return;
                } else {
                    document.getElementsByTagName('div')[index].innerText = "";
                }
            }
        }
    }

   
    for (let index = 5; index <= 15; index++) {
        if (index !== 8 && index !== 12) {
            if (document.getElementsByTagName('div')[index].innerText === "") {
                document.getElementsByTagName('div')[index].innerText = "O";
                click.play();
                document.getElementById('info').innerText = " It's Move For X";
                isWin();
                return;
            }
        }
    }
}

function isWinningMove(player) {
    var board = [];
    for (let i = 5; i <= 15; i += 4) {
        let row = [];
        for (let j = i; j <= i + 2; j++) {
            row.push(document.getElementsByTagName('div')[j].innerText);
        }
        board.push(row);
    }


    for (let i = 0; i < 3; i++) {
        if ((board[i][0] === player && board[i][1] === player && board[i][2] === player) ||
            (board[0][i] === player && board[1][i] === player && board[2][i] === player)) {
            return true;
        }
    }

  
    if ((board[0][0] === player && board[1][1] === player && board[2][2] === player) ||
        (board[0][2] === player && board[1][1] === player && board[2][0] === player)) {
        return true;
    }

    return false;
}


function delay()
{
    setTimeout(function()
    {
        computer();
    },3000)
}

function reset()
{
    for(let i=5; i<=15; i++)
    {
        if(i!=8 && i!=12)
        {
            document.getElementsByTagName('div')[i].innerText = "" ;
        }
    }
    document.getElementById('info').innerText = " It's Move For X";
     
    i = 1 ;
    c = 0 ;
    draw = 0 ;
}

function back()
{
    reset();
    var select = document.getElementById("select");
    select.style.display = "block";
}

function isWin()
{
    c++;
    var div1 = document.getElementsByTagName('div')[5].innerText; 
    var div2 = document.getElementsByTagName('div')[6].innerText;
    var div3 = document.getElementsByTagName('div')[7].innerText;
    var div4 = document.getElementsByTagName('div')[9].innerText;
    var div5 = document.getElementsByTagName('div')[10].innerText;
    var div6 = document.getElementsByTagName('div')[11].innerText;
    var div7 = document.getElementsByTagName('div')[13].innerText;
    var div8 = document.getElementsByTagName('div')[14].innerText;
    var div9 = document.getElementsByTagName('div')[15].innerText;

    if((div1=="X"&&div2=="X"&&div3=="X")||(div4=="X"&&div5=="X"&&div6=="X")||(div7=="X"&&div8=="X"&&div9=="X"))
    {
        document.getElementById('info').innerText = " Congratulation X is WINNER";
      
        draw++;
        win.play();
        clapping.play();
    }
    else if((div1=="X"&&div4=="X"&&div7=="X")||(div2=="X"&&div5=="X"&&div8=="X")||(div3=="X"&&div6=="X"&&div9=="X"))
    {
        document.getElementById('info').innerText = " Congratulation X is WINNER";
     
        draw++;
        win.play();
        clapping.play();
    }
    else if((div1=="X"&&div5=="X"&&div9=="X")||(div3=="X"&&div5=="X"&&div7=="X"))
    {
        document.getElementById('info').innerText = " Congratulation X is WINNER";
        
        draw++;
        win.play();
        clapping.play();
    }
    else if((div1=="O"&&div2=="O"&&div3=="O")||(div4=="O"&&div5=="O"&&div6=="O")||(div7=="O"&&div8=="O"&&div9=="O"))
    {
        document.getElementById('info').innerText = " Congratulation O is WINNER";
        
        draw++;
        win.play();
        clapping.play();
    }
    else if((div1=="O"&&div4=="O"&&div7=="O")||(div2=="O"&&div5=="O"&&div8=="O")||(div3=="O"&&div6=="O"&&div9=="O"))
    {
        document.getElementById('info').innerText = " Congratulation O is WINNER";
        
        draw++;
        win.play();
        clapping.play();
    }
    else if((div1=="O"&&div5=="O"&&div9=="O")||(div3=="O"&&div5=="O"&&div7=="O"))
    {
        document.getElementById('info').innerText = " Congratulation O is WINNER";
        
        draw++;
        win.play();
        clapping.play();
    }

    if(draw==0 && c==9 )
    {
        document.getElementById('info').innerText = "GAME IS DRAW";
        draw++;
    }
}

function onePlayer()
{
    var select = document.getElementById("select");
    select.style.display = "none" ;
    player = 1 ;
}

function twoPlayer()
{
    var select = document.getElementById("select");
    select.style.display = "none" ;
    player = 2 ;
}

