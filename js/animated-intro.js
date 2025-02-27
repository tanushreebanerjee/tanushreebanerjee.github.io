// Add this to a new JavaScript file named animated-intro.js

document.addEventListener('DOMContentLoaded', function() {
  // Animated introduction for the header section
  const headerContent = document.querySelector('.header__content');
  if (!headerContent) return;
  
  // Save original content
  const originalContent = headerContent.innerHTML;
  
  // Replace with animation container
  headerContent.innerHTML = `
    <h1 class="header__name">Tanushree Banerjee</h1>
    <div id="intro-animation">
      <div class="typing-container">
        <span id="typing-text"></span>
        <span id="cursor">|</span>
      </div>
    </div>
  `;
  
  // Text to be typed
  const textToType = [
    "Exploring 3D perception via inverse generation...",
    "Computer vision researcher...",
    "Princeton CS graduate...",
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70; // milliseconds per character
  const pauseDuration = 1000; // pause at end of sentence
  const deleteSpeed = 30; // faster deletion
  
  // Typing animation
  function typeText() {
    const currentText = textToType[textIndex];
    const typingElement = document.getElementById('typing-text');
    
    if (isDeleting) {
      // Deleting text
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = deleteSpeed;
      
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textToType.length;
        typingSpeed = 70;
      }
    } else {
      // Typing text
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = pauseDuration;
      }
    }
    
    setTimeout(typeText, typingSpeed);
  }
  
  // Start typing animation
  typeText();
  
  // Set cursor blinking
  setInterval(function() {
    const cursor = document.getElementById('cursor');
    cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
  }, 500);
  
  // Replace with original content after animation completes
  setTimeout(function() {
    headerContent.style.opacity = 0;
    
    setTimeout(function() {
      headerContent.innerHTML = originalContent;
      headerContent.style.opacity = 1;
    }, 500);
  }, 10000); // Show animation for 10 seconds
  
  // Add CSS for animation
  const animationStyles = `
    #intro-animation {
      min-height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
    }
    
    .typing-container {
      font-size: 1.5rem;
      color: #B30059;
    }
    
    #cursor {
      font-weight: bold;
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    .header__content {
      transition: opacity 0.5s ease;
    }
  `;
  
  const styleElement = document.createElement('style');
  styleElement.textContent = animationStyles;
  document.head.appendChild(styleElement);
});
