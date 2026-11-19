// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', 'Open menu');
}));

// Gallery lightbox
const box = document.getElementById('lightbox');
const boxImg = document.getElementById('lightboxImg');
document.querySelectorAll('.g-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const thumb = btn.querySelector('img');
    boxImg.src = btn.dataset.full;
    boxImg.alt = thumb.alt;
    box.showModal();
  });
});
document.getElementById('lightboxClose').addEventListener('click', () => box.close());
box.addEventListener('click', e => { if (e.target === box) box.close(); });
box.addEventListener('close', () => { boxImg.removeAttribute('src'); });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
