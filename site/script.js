const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

function updateHeader() {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}

function closeMenu() {
  if (!menuButton || !nav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  nav?.classList.toggle('open', !expanded);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => {
  if (window.innerWidth > 940) closeMenu();
});
updateHeader();
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('open')) { closeMenu(); menuButton?.focus(); }
});
