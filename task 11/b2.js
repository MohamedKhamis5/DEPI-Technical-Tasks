var timer = setTimeout(function () {
  document.getElementById('tout').style.display = 'block';
}, 30000);
var fields = document.querySelectorAll('#regForm input, #regForm select');
fields.forEach(function (el) {
  el.addEventListener('input', function () {
    clearTimeout(timer);
  });
});
document.getElementById('regForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var gender = document.getElementById('gender').value;
  var address = document.getElementById('address').value;
  var params = new URLSearchParams({
    name: name,
    email: email,
    mobile: mobile,
    gender: gender,
    address: address
  });
  window.location.href = './b2_1.html' + params.toString();
});