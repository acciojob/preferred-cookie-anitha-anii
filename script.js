function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

function applyPreferences() {
  var fontSizeInput = document.getElementById('fontsize');
  var fontColorInput = document.getElementById('fontcolor');

  var fontSize = fontSizeInput.value;
  var fontColor = fontColorInput.value;

  document.body.style.fontSize = fontSize + 'px';
  document.body.style.color = fontColor;

  setCookie('fontsize', fontSize, 365);
  setCookie('fontcolor', fontColor, 365);
}

var storedFontSize = getCookie('fontsize');
var storedFontColor = getCookie('fontcolor');

if (storedFontSize && storedFontColor) {
  document.body.style.fontSize = storedFontSize + 'px';
  document.body.style.color = storedFontColor;
  document.getElementById('fontsize').value = storedFontSize;
  document.getElementById('fontcolor').value = storedFontColor;
}

document.addEventListener('DOMContentLoaded', function () {
  var applyButton = document.querySelector("input[type='submit']");
  applyButton.addEventListener('click', applyPreferences);
});

