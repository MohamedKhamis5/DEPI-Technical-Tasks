document.addEventListener('click', function (e) {
    if (e.target.classList.contains('box')) {
      var clone = e.target.cloneNode(true);
      clone.style.backgroundColor = `rgb(${Math.random()*255|0}, ${Math.random()*255|0}, ${Math.random()*255|0})`;
      document.body.appendChild(clone);
    }
  });