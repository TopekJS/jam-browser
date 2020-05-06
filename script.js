// DOM Element
const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

//showTime
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
//showAmPm
const showAmPm = true;
//set am pm
const ampm = hour >= 12 ? 'pm' : 'am';
// 12 hour format
 hour = hour % 12 || 12;
//output time
time.innerHTML = `${hour}<span> : </span>${addZero(min)}<span> : </span>${addZero(sec)}<span> ${showAmPm ? ampm : ''} </span>`;
// 
setTimeout(showTime, 1000)
}

//addZero
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//setBackground
function setBackground() {
    const today = new Date(),
          hour = today.getHours();
    //mengatur background berdasarkan waktu
    if(hour < 12){
        //pagi
        document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
        greeting.textContent = 'Selamat Pagi';
    } else if(hour < 18) {
        //siang
        document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Selamat Siang';
    } else {
        //malam
        document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'selamat malam';
        document.body.style.color = 'white';
    }
}

//getName
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[enter name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}
//setName
function setName(e) {
  if (e.type === 'keypress') {
      //make sure enter is pressed
      if(e.which == 13 || e.keyCode == 13){
          localStorage.setItem('name', e.target.innerText);
          name.blur();
      }
  } else {
      localStorage.setItem('name', e.target.innerText)
  }
}

//get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        console.log('p')
        focus.textContent = 'focus';
    } else {
        focus.textContent = localStorage.getItem('focus');
        console.log('po')
    }
}
//set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
  }


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//RUN
setBackground();
showTime();
getName();
getFocus();