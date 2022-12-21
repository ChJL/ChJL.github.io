const modeIndicator = document.getElementById('mode-indicator');
const modeSwitch = document.getElementById('mode-switch');

function switchToLightMode() {
  document.body.classList.remove('night-mode');
  document.body.classList.add('light-mode');
  // modeIndicator.innerHTML = 'Light Mode';
  modeSwitch.checked = true;
  localStorage.setItem('mode', 'light');
}

function switchToNightMode() {
  document.body.classList.remove('light-mode');
  document.body.classList.add('night-mode');
  // modeIndicator.innerHTML = 'Night Mode';
  modeSwitch.checked = false;
  localStorage.setItem('mode', 'night');
}

modeSwitch.addEventListener('change', function() {
  if (modeSwitch.checked) {
    switchToLightMode();
  } else {
    switchToNightMode();
  }
});