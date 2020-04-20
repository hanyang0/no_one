let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello ROWING!';
document.querySelector('h1').onclick = function() {
    alert('别戳我，我怕疼。');
}
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test.png') {
      myImage.setAttribute('src', 'images/test1.jpg');
    } else {
      myImage.setAttribute('src', 'images/test.png');
    }
}
let myButton = document.querySelector('button');
let myHeading1 = document.querySelector('h2');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading1.innerHTML = 'NCWU ROWING欢迎你，' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading1.textContent = 'NCWU ROWING欢迎你，' + storedName;
}

  myButton.onclick = function() {
    setUserName();
 }
