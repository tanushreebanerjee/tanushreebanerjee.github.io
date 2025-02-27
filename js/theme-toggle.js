// Add this to a new JavaScript file named theme-toggle.js

document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference or respect OS preference
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme === 'dark' || (!storedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-mode');
  }
  
  // Create and insert the theme toggle button
  const themeToggle = document.createElement('button');
  themeToggle.id = 'theme-toggle';
  themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? 
    '<i class="fas fa-sun"></i>' : 
    '<i class="fas fa-moon"></i>';
  themeToggle.setAttribute('aria-label', 'Toggle dark mode');
  themeToggle.setAttribute('title', 'Toggle dark mode');
  
  // Style the button
  themeToggle.style.position = 'fixed';
  themeToggle.style.bottom = '20px';
  themeToggle.style.right = '20px';
  themeToggle.style.width = '50px';
  themeToggle.style.height = '50px';
  themeToggle.style.borderRadius = '50%';
  themeToggle.style.backgroundColor = document.body.classList.contains('dark-mode') ? '#555' : '#f5f5f5';
  themeToggle.style.color = document.body.classList.contains('dark-mode') ? '#f5f5f5' : '#333';
  themeToggle.style.border = 'none';
  themeToggle.style.fontSize = '1.5rem';
  themeToggle.style.cursor = 'pointer';
  themeToggle.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  themeToggle.style.transition = 'all 0.3s ease';
  themeToggle.style.zIndex = '1000';
  
  // Add hover effect
  themeToggle.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
  });
  
  themeToggle.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
  });
  
  // Add click event to toggle theme
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Update button appearance
    if (document.body.classList.contains('dark-mode')) {
      this.innerHTML = '<i class="fas fa-sun"></i>';
      this.style.backgroundColor = '#555';
      this.style.color = '#f5f5f5';
      localStorage.setItem('theme', 'dark');
    } else {
      this.innerHTML = '<i class="fas fa-moon"></i>';
      this.style.backgroundColor = '#f5f5f5';
      this.style.color = '#333';
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Add to the DOM
  document.body.appendChild(themeToggle);
  
  // Add styles for dark mode
  const darkModeStyles = `
    body.dark-mode {
      background-color: #121212;
      color: #e1e1e1;
    }
    
    body.dark-mode a {
      color: #ff80ab;
    }
    
    body.dark-mode a:hover {
      color: #ffab40;
    }
    
    body.dark-mode .header__links a,
    body.dark-mode .projects__item,
    body.dark-mode .research-interests {
      background-color: #2a2a2a;
    }
    
    body.dark-mode .tag {
      background-color: #B30059;
    }
    
    body.dark-mode .footer {
      border-top-color: #2a2a2a;
    }
    
    body.dark-mode .publications__list,
    body.dark-mode .teaching__item {
      background-color: #1e1e1e;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
    }
    
    body.dark-mode h2 {
      border-bottom-color: #ff80ab;
    }
    
    /* Smooth transition for theme toggle */
    body, a, .header__links a, .projects__item, .research-interests, .tag, .footer, 
    .publications__list, .teaching__item, h2 {
      transition: all 0.3s ease;
    }
  `;
  
  // Add dark mode styles to the page
  const styleElement = document.createElement('style');
  styleElement.textContent = darkModeStyles;
  document.head.appendChild(styleElement);
});
