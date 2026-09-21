document.getElementById('keyInput').addEventListener('keydown', function(event) {
let asciiCode = event.keyCode;
let message = "ASCII Code: " + asciiCode +" " + event.key ;
message += "Alt Key: " + (event.altKey ? "yes" : "no") ;
message += "Ctrl Key: " + (event.ctrlKey ? "yes" : "no") ;
message += "Shift Key: " + (event.shiftKey ? "yes" : "no");
alert(message);    });
