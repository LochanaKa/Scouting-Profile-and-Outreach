 function toggle(id) {
    const el = document.getElementById(id);
    const icon = document.getElementById(id + '-icon');
    
    if (el.classList.contains('open')) {
      el.classList.remove('open');
      icon.classList.remove('open');
    } else {
      el.classList.add('open');
      icon.classList.add('open');
    }
  }

  function showPanel(panelId, activeTabButton) {
    // Hide all functional layout containers
    document.querySelectorAll('.panel').forEach(panel => {
      panel.classList.remove('active');
    });
    
    // Reset active structural states on navigation array
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active');
    });
    
    // Inject active visibility definitions
    document.getElementById(panelId).classList.add('active');
    activeTabButton.classList.add('active');
  }

  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  
  // 1. Check if the user has a saved theme preference in their browser
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
  }

  // 2. Listen for clicks on the toggle button
  themeToggle.addEventListener('click', () => {
    // Get current theme
    let theme = document.documentElement.getAttribute('data-theme');
    
    // Switch between light and dark
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Apply the new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Save to local storage
    localStorage.setItem('theme', newTheme);
    
    // Change the icon
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
  });