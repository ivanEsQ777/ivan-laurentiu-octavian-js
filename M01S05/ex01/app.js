function getTime() {
let hours = (new Date).getHours();
let minutes = (new Date).getMinutes();
let seconds = (new Date).getSeconds();
let milliseconds = (new Date).getMilliseconds();

return `${hours}:${minutes}:${seconds}:${milliseconds} Am ajuns la pixellab`;
}

console.log(
  (new Date()).getHours() + ':' +
  (new Date()).getMinutes() + ':' +
  (new Date()).getSeconds() + ':' +
  (new Date()).getMilliseconds(),
  'Am ajuns la Pixellab.'
);

