// Function to set a cookie with the provided name, value, and expiration days
    function setCookie(name, value, days) {
      let expires = "";
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + value + expires + "; path=/";
    }

    // Function to get the value of a cookie with the provided name
    function getCookie(name) {
      const cookieName = name + "=";
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
      return "";
    }

    // Function to apply the saved preferences
    function applyPreferences() {
      const fontSizeInput = document.getElementById('fontSize');
      const fontColorInput = document.getElementById('fontColor');

      const savedFontSize = getCookie('fontSize');
      if (savedFontSize !== "") {
        fontSizeInput.value = savedFontSize;
        document.body.style.fontSize = savedFontSize + 'px';
      }

      const savedFontColor = getCookie('fontColor');
      if (savedFontColor !== "") {
        fontColorInput.value = savedFontColor;
        document.body.style.color = savedFontColor;
      }
    }

    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault();

      const fontSizeInput = document.getElementById('fontSize');
      const fontColorInput = document.getElementById('fontColor');

      const fontSize = fontSizeInput.value;
      const fontColor = fontColorInput.value;

      // Save preferences using cookies
      setCookie('fontSize', fontSize, 30);
      setCookie('fontColor', fontColor, 30);

      // Apply the saved preferences
      document.body.style.fontSize = fontSize + 'px';
      document.body.style.color = fontColor;
    }

    // Add event listener for form submission
    const form = document.getElementById('customizeForm');
    form.addEventListener('submit', handleSubmit);

    // Apply the saved preferences on page load
    window.addEventListener('load', applyPreferences);
