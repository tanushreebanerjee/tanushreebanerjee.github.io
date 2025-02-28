// Filter functionality for research projects
document.addEventListener('DOMContentLoaded', function() {
  // Get filter buttons and publications
  const filterButtons = document.querySelectorAll('.filter-button');
  const publications = document.querySelectorAll('.publication');
  
  // Add click event to filter buttons
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // Filter publications
      publications.forEach(pub => {
        if (filter === 'all') {
          pub.style.display = 'grid';
          
          // Add a slight animation when showing items
          setTimeout(() => {
            pub.style.opacity = '1';
            pub.style.transform = 'translateY(0)';
          }, 50);
        } else {
          const tags = pub.getAttribute('data-tags');
          if (tags && tags.includes(filter)) {
            pub.style.display = 'grid';
            
            // Add a slight animation when showing items
            setTimeout(() => {
              pub.style.opacity = '1';
              pub.style.transform = 'translateY(0)';
            }, 50);
          } else {
            pub.style.opacity = '0';
            pub.style.transform = 'translateY(10px)';
            
            // Hide after fade out animation
            setTimeout(() => {
              pub.style.display = 'none';
            }, 300);
          }
        }
      });
    });
  });
  
  // Filter based on URL hash if present
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const filterButton = document.querySelector(`.filter-button[data-filter="${hash}"]`);
    if (filterButton) {
      filterButton.click();
    }
  } else {
    // Default: show all
    const allButton = document.querySelector('.filter-button[data-filter="all"]');
    if (allButton) {
      allButton.click();
    }
  }
  
  // Search functionality
  const searchInput = document.getElementById('research-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase().trim();
      
      publications.forEach(pub => {
        const title = pub.querySelector('.publication__title').textContent.toLowerCase();
        const excerpt = pub.querySelector('.publication__excerpt').textContent.toLowerCase();
        const authors = pub.querySelector('.publication__authors').textContent.toLowerCase();
        const tags = pub.getAttribute('data-tags') ? pub.getAttribute('data-tags').toLowerCase() : '';
        
        if (searchTerm === '' || 
            title.includes(searchTerm) || 
            excerpt.includes(searchTerm) || 
            authors.includes(searchTerm) ||
            tags.includes(searchTerm)) {
          pub.style.display = 'grid';
          setTimeout(() => {
            pub.style.opacity = '1';
            pub.style.transform = 'translateY(0)';
          }, 50);
        } else {
          pub.style.opacity = '0';
          pub.style.transform = 'translateY(10px)';
          setTimeout(() => {
            pub.style.display = 'none';
          }, 300);
        }
      });
    });
  }
});
