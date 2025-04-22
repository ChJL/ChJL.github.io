const langSwitch = document.getElementById('lang-switch');

function switchToEnMode() {
  document.body.classList.remove('tw-lang');
  document.body.classList.add('en-lang');
  langSwitch.checked = false;
  localStorage.setItem('lang', 'en');
}

function switchToTwMode() {
  document.body.classList.remove('en-lang');
  document.body.classList.add('tw-lang');
  langSwitch.checked = true;
  localStorage.setItem('lang', 'tw');
}

// default
switchToEnMode();

langSwitch.addEventListener('change', function() {
  if (langSwitch.checked) {
    switchToTwMode();
  } else {
    switchToEnMode();
  }
});