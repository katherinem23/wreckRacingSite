
    // JavaScript to collapse navbar when clicking outside
    document.addEventListener('click', function(event) {
        var isClickInside = document.querySelector('.navbar-collapse').contains(event.target);
        var isTogglerClicked = document.querySelector('.navbar-toggler').contains(event.target);
  
        if (!isClickInside && !isTogglerClicked) {
          var navCollapse = document.querySelector('.navbar-collapse');
          var bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
          bsCollapse.hide();
        }
      });


      const images = [
        'assets/IMG_0731.jpg',
          'assets/IMG_3535.JPG',
          'assets/818group.jpg'
      ];
  
      let currentImageIndex = 0;
      const slideshowElement = document.querySelector('.hero-section.slideshow');
  
      function changeBackgroundImage() {
          slideshowElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
          currentImageIndex = (currentImageIndex + 1) % images.length;
      }
  
      // Change background image every 5 seconds
      setInterval(changeBackgroundImage, 5000);
  
      // Initialize the first image
      changeBackgroundImage();


      function showTab(tabName) {
        const tabs = document.querySelectorAll('.tab-content');
        tabs.forEach(tab => {
            tab.style.display = 'none'; // Hide all tabs
        });
        
        document.getElementById(tabName).style.display = 'block'; // Show selected tab
    }

    
    
    function scrollRight() {
      const container = document.querySelector('.card-container');
      if (container) {
        container.scrollLeft += container.offsetWidth; // Scroll right by 200px
      }
    }
    function scrollBack() {
      const container = document.querySelector('.card-container');
      if (container) {
        container.scrollLeft -= container.offsetWidth; // Scroll right by 200px
      }
    }
    

    
    
   