document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');       // Açma butonu
    const closeBtn = document.querySelector('.cross');         // Kapatma butonu (X)
    const menuOverlay = document.querySelector('.menu-overlay'); // Menü penceresi
    const menuLinks = document.querySelectorAll('.menu-content a'); // Menü içindeki linkler
  
    // 2. Menüyü Açma Fonksiyonu
    function openMenu() {
      menuOverlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  
    // 3. Menüyü Kapatma Fonksiyonu
    function closeMenu() {
      menuOverlay.classList.remove('is-open');
      // Sayfa kaydırmayı tekrar aktif hale getiriyoruz
      document.body.style.overflow = '';
    }
  
    // 4. Olay Dinleyicileri (Event Listeners)
    if (menuBtn) {
      menuBtn.addEventListener('click', openMenu);
    }
  
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }
  
    // Linklere tıklanınca da menü kapansın
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  });