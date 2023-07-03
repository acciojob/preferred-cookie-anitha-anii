function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function to get a cookie
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

    // Function to apply the user's preferences
    function applyPreferences() {
      var fontSizeInput = document.getElementById('fontsize');
      var fontColorInput = document.getElementById('fontcolor');

      var fontSize = fontSizeInput.value;
      var fontColor = fontColorInput.value;

      document.body.style.fontSize = fontSize + 'px';
      document.body.style.color = fontColor;

      // Store the preferences in cookies
      setCookie('fontsize', fontSize, 365);
      setCookie('fontcolor', fontColor, 365);
    }

    // Check if the user's preferences exist in cookies
    var storedFontSize = getCookie('fontsize');
    var storedFontColor = getCookie('fontcolor');

    if (storedFontSize && storedFontColor) {
      // Apply the stored preferences
      document.body.style.fontSize = storedFontSize + 'px';
      document.body.style.color = storedFontColor;

      // Set the input values to the stored preferences
      document.getElementById('fontsize').value = storedFontSize;
      document.getElementById('fontcolor').value = storedFontColor;
    }

    // Add event listener to the apply button
    var applyButton = document.getElementById('apply-button');
    applyButton.addEventListener('click', applyPreferences);

