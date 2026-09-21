var img = document.querySelector("img");
var vavv = document.getElementById("nav");
var newImg = img.cloneNode(true);
img.style.position = "fixed";
img.style.top = "0";
img.style.right = "0";
newImg.style.position = "fixed";
newImg.style.bottom = "0";
newImg.style.left = "0";
document.body.appendChild(newImg);
vavv.style.position = "fixed";
vavv.style.top = "50%";
vavv.style.left = "50%";
vavv.style.transform = "translate(-50%, -50%)";

