const modeIndicator = document.getElementById('mode-indicator');
const modeSwitch = document.getElementById('mode-switch');

function switchToLightMode() {
  document.body.classList.remove('night-mode');
  // var divs = document.getElementsByTagName("div");
  // divs.classList.remove('night-mode');
  
  // document.getElementsByTagName("h3").classList.remove('night-mode');
  // document.getElementsByTagName("h4").classList.remove('night-mode');
  // document.getElementsByTagName("p").classList.remove('night-mode');
  // document.getElementsByTagName("div").classList.remove('night-mode');
  // document.getElementsByTagName("footer").classList.remove('night-mode');
  // document.getElementsByTagName("section").classList.remove('night-mode');
  // document.getElementsByTagName("a").classList.remove('night-mode');
  document.body.classList.add('light-mode');
  // divs.classList.add('light-mode')
  // document.getElementsByTagName("h3").classList.add('light-mode');
  // document.getElementsByTagName("h4").classList.add('light-mode');
  // document.getElementsByTagName("p").classList.add('light-mode');
  // document.getElementsByTagName("div").classList.add('light-mode');
  // document.getElementsByTagName("footer").classList.add('light-mode');
  // document.getElementsByTagName("section").classList.add('light-mode');
  // document.getElementsByTagName("a").classList.add('light-mode');
  // modeIndicator.innerHTML = 'Light Mode';
  modeSwitch.checked = false;
  localStorage.setItem('mode', 'light');
}

function switchToNightMode() {
  document.body.classList.remove('light-mode');
  // var divs = document.getElementsByTagName("div");
  // divs.classList.remove('light-mode');
  // document.getElementsByTagName("h3").classList.remove('light-mode');
  // document.getElementsByTagName("h4").classList.remove('light-mode');
  // document.getElementsByTagName("p").classList.remove('light-mode');
  // document.getElementsByTagName("div").classList.remove('light-mode');
  // document.getElementsByTagName("footer").classList.remove('light-mode');
  // document.getElementsByTagName("section").classList.remove('light-mode');
  // document.getElementsByTagName("a").classList.remove('light-mode');
  document.body.classList.add('night-mode');
  // divs.classList.add('night-mode')
  // document.getElementsByTagName("h3").classList.add('night-mode');
  // document.getElementsByTagName("h4").classList.add('night-mode');
  // document.getElementsByTagName("p").classList.add('night-mode');
  // document.getElementsByTagName("div").classList.add('night-mode');
  // document.getElementsByTagName("footer").classList.add('night-mode');
  // document.getElementsByTagName("section").classList.add('night-mode');
  // document.getElementsByTagName("a").classList.add('night-mode');
  // modeIndicator.innerHTML = 'Night Mode';
  modeSwitch.checked = true;
  localStorage.setItem('mode', 'night');
}

modeSwitch.addEventListener('change', function() {
  if (modeSwitch.checked) {
    switchToNightMode();
  } else {
    switchToLightMode();
  }
});