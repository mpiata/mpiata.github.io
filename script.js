const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function closeMenu() {
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.querySelector('.sr-only').textContent = 'Open navigation menu';
}

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.querySelector('.sr-only').textContent = isOpen ? 'Close navigation menu' : 'Open navigation menu';
});

navLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && navLinks.classList.contains('open')) { closeMenu(); menuButton.focus(); } });

const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
const filterStatus = document.querySelector('.filter-status');
filters.forEach((button) => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach((filter) => { const active = filter === button; filter.classList.toggle('active', active); filter.setAttribute('aria-pressed', String(active)); });
  let visible = 0;
  cards.forEach((card) => { const show = selected === 'all' || card.dataset.category === selected; card.hidden = !show; if (show) visible += 1; });
  filterStatus.textContent = `${visible} project${visible === 1 ? '' : 's'} shown.`;
}));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('.lightbox-title');
const lightboxDescription = lightbox.querySelector('.lightbox-description');
const openers = [...document.querySelectorAll('[data-lightbox]')];
let currentIndex = 0;
let returnFocus;

function showImage(index) {
  currentIndex = (index + openers.length) % openers.length;
  const image = openers[currentIndex].querySelector('img');
  const title = openers[currentIndex].closest('.project-card').querySelector('h3').textContent;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxTitle.textContent = title;
  lightboxDescription.textContent = image.alt;
}

function openLightbox(index) {
  returnFocus = document.activeElement;
  showImage(index);
  lightbox.hidden = false;
  document.body.classList.add('modal-open');
  lightbox.querySelector('.lightbox-close').focus();
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = '';
  document.body.classList.remove('modal-open');
  if (returnFocus) returnFocus.focus();
}

openers.forEach((opener, index) => opener.addEventListener('click', () => openLightbox(index)));
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.previous').addEventListener('click', () => showImage(currentIndex - 1));
lightbox.querySelector('.next').addEventListener('click', () => showImage(currentIndex + 1));
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => {
  if (lightbox.hidden) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
  if (event.key === 'ArrowRight') showImage(currentIndex + 1);
  if (event.key === 'Tab') {
    const focusable = [...lightbox.querySelectorAll('button')];
    const first = focusable[0]; const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
