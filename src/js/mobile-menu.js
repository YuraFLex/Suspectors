(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector('body');
  const scroll = document.querySelectorAll('a[href^="#"');

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    mobileMenuRef.classList.toggle('is-hidden');
    body.classList.toggle('no-scroll');
  });

  //

  scroll.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.scrollto').offsetHeight;
      // const topOffset = 130;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });

      mobileMenuRef.classList.add('is-hidden');
      menuBtnRef.classList.remove('is-open');
      body.classList.remove('no-scroll');
    });
  });
})();
