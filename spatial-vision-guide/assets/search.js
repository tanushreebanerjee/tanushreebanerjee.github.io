// Shared search functionality for all pages
(function() {
  function initSearch() {
    const markdownContent = document.querySelector('.md') || document.body;
    if (!markdownContent) {
      setTimeout(initSearch, 100);
      return;
    }
    
    // Check if search box already exists
    if (document.getElementById('search-box')) {
      return;
    }
    
    const firstHR = markdownContent.querySelector('hr');
    const firstH2 = markdownContent.querySelector('h2');
    const firstH1 = markdownContent.querySelector('h1');
    
    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.id = 'search-container';
    searchContainer.style.cssText = 'margin: 1em 0 1.5em 0; max-width: 600px; padding: 0.5em 0;';
    
    const label = document.createElement('label');
    label.htmlFor = 'search-box';
    label.textContent = '🔍 Search:';
    label.style.cssText = 'display: block; margin-bottom: 0.5em; font-weight: 600; color: #8B1538; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; font-size: 0.9em;';
    
    const searchBox = document.createElement('input');
    searchBox.type = 'text';
    searchBox.id = 'search-box';
    searchBox.placeholder = 'Search this page...';
    searchBox.autocomplete = 'off';
    searchBox.style.cssText = 'width: 100%; padding: 0.5em 0.8em; font-size: 0.95em; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; border: 2px solid #8B1538; border-radius: 4px; box-sizing: border-box;';
    
    searchContainer.appendChild(label);
    searchContainer.appendChild(searchBox);
    
    // Insert search box after first HR or after first heading
    if (firstHR && firstHR.nextSibling) {
      firstHR.parentNode.insertBefore(searchContainer, firstHR.nextSibling);
    } else if (firstH2 && firstH2.parentNode) {
      firstH2.parentNode.insertBefore(searchContainer, firstH2.nextSibling);
    } else if (firstH1 && firstH1.parentNode) {
      firstH1.parentNode.insertBefore(searchContainer, firstH1.nextSibling);
    } else if (markdownContent) {
      markdownContent.insertBefore(searchContainer, markdownContent.firstChild);
    }
    
    if (!searchBox) {
      return;
    }
    
    // Get all searchable content
    const allSections = document.querySelectorAll('.md h2, .md h3, .md h4, .md p, .md li, .md strong');
    const allLinks = document.querySelectorAll('.md a');
    
    // Build search index
    const searchIndex = [];
    allSections.forEach(el => {
      if (el.textContent && el.textContent.trim() && el.textContent.length > 10) {
        searchIndex.push({
          element: el,
          text: el.textContent.toLowerCase(),
          originalHTML: el.innerHTML
        });
      }
    });
    
    allLinks.forEach(link => {
      if (link.textContent && link.textContent.trim() && link.href) {
        searchIndex.push({
          element: link,
          text: link.textContent.toLowerCase(),
          originalHTML: link.innerHTML
        });
      }
    });
    
    // Search function
    function performSearch(query) {
      const searchTerm = query.toLowerCase().trim();
      
      if (!searchTerm) {
        // Show all if search is empty
        allSections.forEach(el => {
          el.classList.remove('search-result-hidden');
          const highlights = el.querySelectorAll('.search-highlight');
          highlights.forEach(h => {
            h.outerHTML = h.textContent;
          });
        });
        allLinks.forEach(link => {
          link.classList.remove('search-result-hidden');
          const highlights = link.querySelectorAll('.search-highlight');
          highlights.forEach(h => {
            h.outerHTML = h.textContent;
          });
        });
        return;
      }
      
      const terms = searchTerm.split(/\s+/).filter(t => t.length > 0);
      
      // Search and highlight
      searchIndex.forEach(item => {
        const matches = terms.every(term => item.text.includes(term));
        
        if (matches) {
          item.element.classList.remove('search-result-hidden');
          
          // Highlight matching text
          if (item.element.textContent && !item.element.querySelector('.search-highlight')) {
            let html = item.originalHTML || item.element.innerHTML;
            terms.forEach(term => {
              const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
              html = html.replace(regex, '<span class="search-highlight">$1</span>');
            });
            item.element.innerHTML = html;
          }
        } else {
          item.element.classList.add('search-result-hidden');
        }
      });
      
      // Hide empty sections
      document.querySelectorAll('.md h2, .md h3').forEach(heading => {
        let hasVisibleContent = false;
        let sibling = heading.nextElementSibling;
        while (sibling && !['H1', 'H2', 'H3', 'HR'].includes(sibling.tagName)) {
          if (!sibling.classList.contains('search-result-hidden')) {
            hasVisibleContent = true;
            break;
          }
          sibling = sibling.nextElementSibling;
        }
        if (!hasVisibleContent && searchTerm) {
          heading.classList.add('search-result-hidden');
        } else {
          heading.classList.remove('search-result-hidden');
        }
      });
    }
    
    // Event listener
    searchBox.addEventListener('input', function(e) {
      performSearch(e.target.value);
    });
    
    // Handle Enter key
    searchBox.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const firstVisible = document.querySelector('.md a:not(.search-result-hidden)');
        if (firstVisible) {
          firstVisible.focus();
        }
      }
    });
  }
  
  // Initialize when page loads
  if (document.readyState === 'complete') {
    setTimeout(initSearch, 100);
  } else {
    window.addEventListener('load', function() {
      setTimeout(initSearch, 300);
    });
  }
})();

