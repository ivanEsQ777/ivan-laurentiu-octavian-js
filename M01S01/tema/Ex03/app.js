var inputRadius = document.getElementById('radius'),
  elementResult = document.getElementById('result'),
  form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  var radius = inputRadius.value || 0,
    result = 0;

  result = 4 / 3 * (Math.pow((Math.PI * radius), 3));

  elementResult.innerText = result;

  e.preventDefault();
}, false);