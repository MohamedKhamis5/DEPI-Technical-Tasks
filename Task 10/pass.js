function SeePassword() {
      const password = document.getElementById('passwordField');
      const iconn = document.getElementById('toggleIcon');
      if (password.type === "password") {
        passwordField.type = "text";
        iconn.textContent = "🙈"; 
      } else {
        password.type = "password";
        iconn.textContent = "👁️"; 
      }
    }