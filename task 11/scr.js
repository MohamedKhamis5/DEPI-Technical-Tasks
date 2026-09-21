red=document.getElementById("r")
green=document.getElementById("g")
blue=document.getElementById("b")
di=document.getElementById("di")
function updateColor(){
    var c = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    di.style.color = c;
  }
[red, green, blue].forEach(col => col.addEventListener('input', updateColor));
  updateColor();  
  