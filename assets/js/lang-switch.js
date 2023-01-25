const langIndicator = document.getElementById('lang-indicator');
const langSwitch = document.getElementById('lang-switch');

function switchToEnMode() {
  document.body.classList.remove('tw-lang');
  document.body.classList.add('en-lang');
  
  langIndicator.innerHTML = 'EN';
  langSwitch.checked = false;
  localStorage.setItem('lang', 'en');
}

function switchToTwMode() {
  document.body.classList.remove('en-lang');
  document.body.classList.add('tw-lang');

  langIndicator.innerHTML = 'Zh-TW';
  langSwitch.checked = true;
  localStorage.setItem('lang', 'tw');
}

langSwitch.addEventListener('change', function() {
  if (langSwitch.checked) {
    switchToTwMode();
  } else {
    switchToEnMode();
  }
});