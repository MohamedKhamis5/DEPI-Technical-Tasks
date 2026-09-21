document.getElementById('numberInput').addEventListener('keypress', function(event) {
      let charCode =event.keyCode;
      let charStr = String.fromCharCode(charCode);
      if (!/[0-9]/.test(charStr)) {
        event.preventDefault(); 
      }
    });