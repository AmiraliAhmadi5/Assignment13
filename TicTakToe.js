var cells = document.getElementsByClassName("cell");
var xx = document.getElementById("xx");
var score_x = document.getElementById("score_x");
var score_x_counter = 0;
var oo = document.getElementById("oo");
var score_o = document.getElementById("score_o");
var score_o_counter = 0;
var dd = document.getElementById("dd");
var score_draw =document.getElementById("score_draw");
var score_draw_counter = 0;
var reset = document.getElementById("reset");
var num;
var num_counter = 0; 
var buttons = [[cells[0] , cells[1] , cells[2]],
               [cells[3] , cells[4] , cells[5]],
               [cells[6] , cells[7] , cells[8]]];
var flags = [[null , null , null],
             [null , null , null],
             [null , null , null]];
var ply = "x";
/*********************test**************************/
var players = document.getElementById("players");
var cpu = document.getElementById("cpu");
var one_or_two = 0;
players.onclick = function(){
    one_or_two = 1;
}
cpu.onclick = function(){
    one_or_two = 2;
}
function show_index(x , y){
    if(one_or_two == 1){
        if (flags[x][y] == null){
            if(ply == "x"){
                flags[x][y] = "x";
                buttons[x][y].innerHTML = "X";
                buttons[x][y].classList.add("x");
                ply = "o";
                num_counter++;
                num = num_counter;
            }
            else if(ply == "o"){
                flags[x][y] = "o";
                buttons[x][y].innerHTML = "O";
                buttons[x][y].classList.add("o");
                ply = "x";
                num_counter++;
                num = num_counter;
            }
        }
        else{
            alert("noooo");
        }
    }
    else if(one_or_two == 2){
        if (flags[x][y] == null){
            if(ply == "x"){
                flags[x][y] = "x";
                buttons[x][y].innerHTML = "X";
                buttons[x][y].classList.add("x");
                ply = "o";
                num_counter++;
                num = num_counter;
            }
            else if(ply == "o"){
                x = Math.floor(Math.random(null) * 3);
                y = Math.floor(Math.random(null) * 3);
                    if(flags[x][y] == null){
                        buttons[x][y].classList.add("o");
                        flags[x][y] = "o";
                        buttons[x][y].innerHTML = "O";
                    }
                    else if(flags[x][y] != null){
                        x = Math.floor(Math.random(null) * 3);
                        y = Math.floor(Math.random(null) * 3);
                        if(flags[x][y] == null){
                            buttons[x][y].classList.add("o");
                            flags[x][y] = "o";
                            buttons[x][y].innerHTML = "O";
                        }
                    }
                    num_counter++;
                    num = num_counter;
                ply = "x";
            }
        }
        else{
            alert("noooo");
        }
    }
    else{
        alert("what????");
    }
    check_game();
}
/************************************************/
function check_game(){
    if(flags[0][0] == "x" && flags[0][1] == "x" && flags[0][2] == "x"){
        score_x_counter++;
        score_x.innerHTML = score_x_counter;
        xx.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[1][0] == "x" && flags[1][1] == "x" && flags[1][2] == "x"){
        score_x_counter++;
        score_x.innerHTML = score_x_counter;
        xx.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[2][0] == "x" && flags[2][1] == "x" && flags[2][2] == "x"){
        score_x_counter++;
        score_x.innerHTML = score_x_counter;
        xx.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[0][0] == "x" && flags[1][0] == "x" && flags[2][0] == "x"){
        score_x_counter++;
        score_x.innerHTML = score_x_counter;
        xx.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[0][1] == "x" && flags[1][1] == "x" && flags[2][1] == "x"){
        score_x_counter++;
        score_x.innerHTML = score_x_counter;
        xx.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[0][2] == "x" && flags[1][2] == "x" && flags[2][2] == "x"){
        score_x_counter++;
        score_x.innerHTML = score_x_counter;
        xx.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[0][0] == "x" && flags[1][1] == "x" && flags[2][2] == "x"){
        score_x_counter++;
        score_x.innerHTML = score_x_counter;
        xx.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[2][0] == "x" && flags[1][1] == "x" && flags[0][2] == "x"){
        score_x_counter++;
        score_x.innerHTML = score_x_counter;
        xx.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[0][0] == "o" && flags[0][1] == "o" && flags[0][2] == "o"){
        score_o_counter++;
        score_o.innerHTML = score_o_counter;
        oo.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[1][0] == "o" && flags[1][1] == "o" && flags[1][2] == "o"){
        score_o_counter++;
        score_o.innerHTML = score_o_counter;
        oo.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[2][0] == "o" && flags[2][1] == "o" && flags[2][2] == "o"){
        score_o_counter++;
        score_o.innerHTML = score_o_counter;
        oo.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[0][0] == "o" && flags[1][0] == "o" && flags[2][0] == "o"){
        score_o_counter++;
        score_o.innerHTML = score_o_counter;
        oo.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[0][1] == "o" && flags[1][1] == "o" && flags[2][1] == "o"){
        score_o_counter++;
        score_o.innerHTML = score_o_counter;
        oo.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[0][2] == "o" && flags[1][2] == "o" && flags[2][2] == "o"){
        score_o_counter++;
        score_o.innerHTML = score_o_counter;
        oo.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[0][0] == "o" && flags[1][1] == "o" && flags[2][2] == "o"){
        score_o_counter++;
        score_o.innerHTML = score_o_counter;
        oo.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(flags[2][0] == "o" && flags[1][1] == "o" && flags[2][0] == "o"){
        score_o_counter++;
        score_o.innerHTML = score_o_counter;
        oo.style.display = "inline";
        num_counter = 0;
        num.innerHTML = num_counter;
    }
    if(num == 9){
        score_draw_counter++;
        score_draw.innerHTML = score_draw_counter;
        dd.style.display = "inline";
    }
}
xx.onclick = function(){
    xx.style.display = "none";
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            buttons[i][j].innerHTML = "";
            buttons[i][j].classList.remove("x");
            buttons[i][j].classList.remove("o");
            flags[i][j] = null;
            ply = "x";
        }
    }
}
oo.onclick = function(){
    oo.style.display = "none";
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            buttons[i][j].innerHTML = "";
            buttons[i][j].classList.remove("x");
            buttons[i][j].classList.remove("o");
            flags[i][j] = null;
            ply = "x";
        }
    }
    num_counter = 0;
    num.innerHTML = num_counter;
}
dd.onclick = function(){
    dd.style.display = "none";
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            buttons[i][j].innerHTML = "";
            buttons[i][j].classList.remove("x");
            buttons[i][j].classList.remove("o");
            flags[i][j] = null;
            ply = "x";
        }
    }
    num_counter = 0;
    num.innerHTML = num_counter;
}
reset.onclick = function(){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            buttons[i][j].innerHTML = "";
            buttons[i][j].classList.remove("x");
            buttons[i][j].classList.remove("o");
            flags[i][j] = null;
            ply = "x";
        }
    }
    score_x_counter = 0;
    score_x.innerHTML = score_x_counter;
    score_o_counter = 0;
    score_o.innerHTML = score_o_counter;
    score_draw_counter = 0;
    score_draw.innerHTML = score_draw_counter;
    num_counter = 0;
    num.innerHTML = num_counter;
    one_or_two = 0;
}                                           
if(xx.style.display == "inline"){
    dd.style.display = "none";
    num_counter = 0;
    num.innerHTML = num_counter;
}
if(oo.style.display == "inline"){
    dd.style.display = "none";
    num_counter = 0;
    num.innerHTML = num_counter;
}
if(dd.style.display == "inline"){
    oo.style.display = "none";
    xx.style.display = "none";
}