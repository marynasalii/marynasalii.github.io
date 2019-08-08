//toggle menu

(function() {

    var hamburger = {
      openNav: document.querySelector('#nav-open'),
      closeNav: document.querySelector('#nav-close'),
      nav: document.querySelector('nav'),
  
      open: function(e) {
        e.preventDefault();
        this.nav.classList.add('visible-flex');
      },

      close: function(e) {
        e.preventDefault();
        this.nav.classList.remove('visible-flex');
      }
    };
  
    hamburger.openNav.addEventListener('click', function(e) { hamburger.open(e); });
    hamburger.closeNav.addEventListener('click', function(e) { hamburger.close(e); });
  
  }());