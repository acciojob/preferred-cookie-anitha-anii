// Check if user preferences exist in cookies
const fontSizeCookie = getCookie('fontSize');
const fontColorCookie = getCookie('fontColor');

if (fontSizeCookie) {
  document.documentElement.style.fontSize = fontSizeCookie;
  document.getElementById('fontsize').value = fontSizeCookie;
}

if (fontColorCookie) {
  document.documentElement.style.color = fontColorCookie;
  document.getElementById('fontcolor').value = fontColorCookie;
}

// Function to get cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
}

// Function to set cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()}`;
}

// Handle form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fontSize = document.getElementById('fontsize').value + 'px';
  const fontColor = document.getElementById('fontcolor').value;

  // Set preferences in cookies
  setCookie('fontSize', fontSize, 30);
  setCookie('fontColor', fontColor, 30);

  // Apply preferences to the page
  document.documentElement.style.fontSize = fontSize;
  document.documentElement.style.color = fontColor;
});
