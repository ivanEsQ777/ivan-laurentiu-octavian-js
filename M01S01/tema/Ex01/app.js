
var inputLength = document.getElementById('length'),
  inputWidth = document.getElementById('width'),
  inputDepth = document.getElementById('depth'),
  elementResult = document.getElementById('result'),
  form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  var length = inputLength.value || 0,
    width = inputWidth.value || 0,
    depth = inputDepth.value || 0,
    result = 0;

  result = length * width * depth;

  elementResult.innerText = result;

  e.preventDefault();
}, false);