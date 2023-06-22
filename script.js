// Check if user preferences exist in local storage
const fontSizeStorage = localStorage.getItem('fontSize');
const fontColorStorage = localStorage.getItem('fontColor');

if (fontSizeStorage) {
  document.documentElement.style.fontSize = fontSizeStorage;
  document.getElementById('fontsize').value = fontSizeStorage;
}

if (fontColorStorage) {
  document.documentElement.style.color = fontColorStorage;
  document.getElementById('fontcolor').value = fontColorStorage;
}

// Handle form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fontSize = document.getElementById('fontsize').value + 'px';
  const fontColor = document.getElementById('fontcolor').value;

  // Set preferences in local storage
  localStorage.setItem('fontSize', fontSize);
  localStorage.setItem('fontColor', fontColor);

  // Apply preferences to the page
  document.documentElement.style.fontSize = fontSize;
  document.documentElement.style.color = fontColor;
});

