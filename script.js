// script.js

// Function to set theme based on user selection
function setTheme(themeValue) {
    const body = document.body;
    
    // Remove existing theme classes
    body.classList.remove('light-theme', 'dark-theme');
    
    // Add the selected theme class
    body.classList.add(themeValue + '-theme');
    
    // Save the user's preference in localStorage
    localStorage.setItem("theme", themeValue);
  }
  
  // Event listener for theme selector change
  const themeSelector = document.getElementById("theme");
  themeSelector.addEventListener("change", function() {
    setTheme(themeSelector.value);
  });
  
  // Check if user has set a preference for theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // Default theme
    setTheme('light');
  }
  