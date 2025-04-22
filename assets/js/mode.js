const modeSwitch = document.getElementById('mode-switch');

function switchToLightMode() {
  document.body.classList.remove('night-mode');
  document.body.classList.add('light-mode');
  modeSwitch.checked = false;
  localStorage.setItem('mode', 'light');
}

function switchToNightMode() {
  document.body.classList.remove('light-mode');
  document.body.classList.add('night-mode');
  modeSwitch.checked = true;
  localStorage.setItem('mode', 'night');
}

// default
switchToLightMode();

modeSwitch.addEventListener('change', function() {
  if (modeSwitch.checked) {
    switchToNightMode();
  } else {
    switchToLightMode();
  }
});