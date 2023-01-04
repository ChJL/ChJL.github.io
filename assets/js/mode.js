const modeIndicator = document.getElementById('mode-indicator');
const modeSwitch = document.getElementById('mode-switch');

function switchToLightMode() {
  document.body.classList.remove('night-mode');
  // document.h3.classList.remove('night-mode');
  // document.h4.classList.remove('night-mode');
  // document.p.classList.remove('night-mode');
  // document.div.classList.remove('night-mode');
  // document.footer.classList.remove('night-mode');
  // document.section.classList.remove('night-mode');
  // document.a.classList.remove('night-mode');

  document.body.classList.add('light-mode');
  document.h3.classList.add('light-mode');
  document.h4.classList.add('light-mode');
  document.p.classList.add('light-mode');
  document.div.classList.add('light-mode');
  document.footer.classList.add('light-mode');
  document.section.classList.add('light-mode');
  document.a.classList.add('light-mode');
  
  // modeIndicator.innerHTML = 'Light Mode';
  modeSwitch.checked = false;
  localStorage.setItem('mode', 'light');
}

function switchToNightMode() {
  document.body.classList.remove('light-mode');
  // document.h3.classList.remove('light-mode');
  // document.h4.classList.remove('light-mode');
  // document.p.classList.remove('light-mode');
  // document.div.classList.remove('light-mode');
  // document.footer.classList.remove('light-mode');
  // document.section.classList.remove('light-mode');
  // document.a.classList.remove('light-mode');

  document.body.classList.add('night-mode');
  document.h3.classList.add('night-mode');
  document.h4.classList.add('night-mode');
  document.p.classList.add('night-mode');
  document.div.classList.add('night-mode');
  document.footer.classList.add('night-mode');
  document.section.classList.add('night-mode');
  document.a.classList.add('night-mode');
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