// ---- Typewriter effect ----
(function () {
  const el = document.getElementById('hero-title');
  const text = 'Jans Astudillo';
  let i = 0;
  el.textContent = '';
  const interval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
    } else {
      clearInterval(interval);
      // Remove cursor after typing is done
      setTimeout(() => el.classList.remove('typewriter-cursor'), 600);
    }
  }, 80);
})();

// ---- Header scroll effect ----
(function () {
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
})();

// ---- Mobile menu toggle ----
(function () {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  const links = document.querySelectorAll('.mobile-link');
  let open = false;

  toggle.addEventListener('click', () => {
    open = !open;
    menu.classList.toggle('open', open);
    iconOpen.classList.toggle('hidden', open);
    iconClose.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-label', open ? 'Cerrar menu' : 'Abrir menu');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      open = false;
      menu.classList.remove('open');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
    });
  });
})();

// ---- Scroll reveal animations ----
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal, .reveal-children').forEach((el) => {
    observer.observe(el);
  });
})();
