canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

mouse_event="empty";
var last_pos_x,last_pos_y;

color="black";
width=3;

canvas.addEventListener("mousedown", mouse_down);
function mouse_down(e){
    color=document.getElementById("input_color").value;
    width=document.getElementById("input_width").value;
    mouse_event="mousedown";
}

canvas.addEventListener("mouseup", mouse_up);
function mouse_up(e){
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave", mouse_leave);
function mouse_leave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mousemove", mouse_move);
function mouse_move(e){
current_pos_x=e.clientX-canvas.offsetLeft;
current_pos_y=e.clientY-canvas.offsetTop;

if (mouse_event=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    

    console.log("The last position of user was");
    console.log("x= "+last_pos_x+"y= "+last_pos_y);
    ctx.moveTo(last_pos_x,last_pos_y);

    console.log("The current position of user is");
    console.log("x= "+current_pos_x+"y= "+current_pos_y);
    ctx.lineTo(current_pos_x,current_pos_y);
    ctx.stroke();    
}

last_pos_x=current_pos_x;
last_pos_y=current_pos_y;
}
function clear_canvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}