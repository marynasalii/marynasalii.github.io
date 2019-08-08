// Toggle menu

(function() {

    let hamburger = {
      openNav: document.querySelector('#nav-open'),
      closeNav: document.querySelector('#nav-close'),
      nav: document.querySelector('nav'),
      links: document.querySelectorAll('.nav-item'),
  
      open: function(e) {
        this.nav.classList.add('visible-flex');
      },

      close: function(e) {
        this.nav.classList.remove('visible-flex');    
      }
    };
      
    hamburger.closeNav.addEventListener('click', function(e) { hamburger.close(e); });
    hamburger.openNav.addEventListener('click', function(e) { hamburger.open(e); });
    
    for (let i = 0; i < hamburger.links.length; i++) {
      hamburger.links[i].addEventListener('click', function(e) { hamburger.close(e); });
    }

  }());