btn=document.getElementById("cl");
inp=document.getElementById("co");
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
btn.onclick=function(){
var c = Math.ceil(Math.random()*20);
for (var i = 0; i < c; i++) {
    var x = Math.random()*canvas.width;
    var y = Math.random()*canvas.height;
    ctx.beginPath();
    ctx.arc(x,y, 10, 0, 2*Math.PI);
    ctx.strokeStyle = inp.value;
    ctx.lineWidth = 2;
    ctx.stroke();
}
}