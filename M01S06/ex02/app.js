let paragraphElement = document.createElement('p');
let userAgentString = navigator.userAgent;
let message = 'Nu stiu ce browser folosesti';
let browserName = 'Browser';
let userName = 'Username';

if (Array.isArray(userAgentString.match(/chrome/ig))) {
  message = 'Navighezi folosind Chrome';
  browserName = 'Chrome';
}
if (Array.isArray(userAgentString.match(/firefox/ig))) {
  message = 'Navighezi folosind Firefox';
  browserName = 'Firefox';
}

paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);

setTimeout(() => {
  userName = prompt(`${browserName} vrea sa stie cum te cheama`);
  let h1 = document.createElement('h1'); 
  h1.innerText = userName;

  document.body.appendChild(h1);

  //set timeout(() => {}, 3000);
}, 3000);
