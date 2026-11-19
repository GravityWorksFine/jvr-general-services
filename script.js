// ---------- Language (English default, Spanish remembered once chosen) ----------
const ES = {
  'top.first': 'Llámenos primero:',
  'top.noanswer': '¿No contestamos? Llame al',
  'nav.services': 'Servicios',
  'nav.gallery': 'Galería',
  'nav.contact': 'Contacto',
  'cta.call': 'Llame Ahora',
  'cta.estimate': 'Solicite un Estimado Gratis',
  'cta.estimateShort': 'Estimado Gratis',
  'hero.title': 'Su Hogar, Nuestra Experiencia. <span>Nos Encargamos de Todo.</span>',
  'hero.lead': 'Reparaciones, mantenimiento, renovaciones y mejoras para su hogar. Desde un pequeño arreglo hasta una remodelación completa, nos encargamos de casi todo lo que su casa necesita.',
  'hero.fb': 'Encuéntrenos en Facebook',
  'contact.first': 'Llame primero',
  'contact.second': 'Si no contestamos',
  'scope.repairs': 'Reparaciones',
  'scope.repairsText': 'Pequeños arreglos del hogar y esos trabajos que siempre se posponen.',
  'scope.maint': 'Mantenimiento',
  'scope.maintText': 'Cuidado que mantiene su casa en buen estado.',
  'scope.reno': 'Renovaciones',
  'scope.renoText': 'Actualización de habitaciones, acabados y accesorios en toda la casa.',
  'scope.remodel': 'Remodelación',
  'scope.remodelText': 'Proyectos más grandes, incluidas remodelaciones completas de cocinas y baños.',
  'svc.eyebrow': 'Nuestros Servicios',
  'svc.title': 'Una sola llamada para toda la casa',
  'svc.lead': 'JVR General Services es un contratista general para propietarios de vivienda. En lugar de contratar una compañía diferente para cada trabajo, llámenos para cualquiera de estos:',
  'svc.plumbing': 'Plomería',
  'svc.plumbingText': 'Accesorios, llaves de agua, fugas y reparación de tuberías.',
  'svc.electrical': 'Electricidad',
  'svc.electricalText': 'Iluminación, tomacorrientes, interruptores y cableado.',
  'svc.painting': 'Pintura',
  'svc.paintingText': 'Pintura interior y exterior.',
  'svc.drywall': 'Drywall',
  'svc.drywallText': 'Instalación, parchado y acabado de paneles de yeso.',
  'svc.flooring': 'Pisos',
  'svc.flooringText': 'Pisos nuevos y reparación de pisos.',
  'svc.roofing': 'Techos',
  'svc.roofingText': 'Reparación de techos y trabajos de techado.',
  'svc.kitchen': 'Remodelación de Cocinas',
  'svc.kitchenText': 'Gabinetes, encimeras y remodelaciones completas de cocinas.',
  'svc.bath': 'Remodelación de Baños',
  'svc.bathText': 'Duchas, bañeras, lavamanos y azulejos.',
  'svc.carpentry': 'Carpintería',
  'svc.carpentryText': 'Molduras, puertas, estructuras y trabajos en madera.',
  'svc.general': 'Reparaciones Generales',
  'svc.generalText': 'Arreglos del día a día, grandes o pequeños.',
  'svc.note': '¿No ve su proyecto en la lista? <a href="tel:+16095150447">Llame al +1 (609) 515-0447</a> y pregunte. Nos encargamos de casi todo.',
  'band.title': '¿Listo para comenzar?',
  'band.text': 'Llámenos y cuéntenos sobre su proyecto para solicitar un estimado gratis.',
  'band.call': 'Llame al +1 (609) 515-0447',
  'band.alt': '¿No contestamos? Llame al (609) 515-7661',
  'gal.eyebrow': 'Galería de Proyectos',
  'gal.title': 'Cocinas, baños, interiores y exteriores',
  'gal.lead': 'Toque cualquier foto para verla más grande. Para ver nuestros proyectos más recientes, <a href="https://www.facebook.com/share/1FZiCdKTnm/?mibextid=wwXIfr" target="_blank" rel="noopener">visítenos en Facebook</a>.',
  'ct.eyebrow': 'Contacto y Estimados Gratis',
  'ct.title': 'Llame a JVR General Services',
  'ct.lead': 'Para solicitar un estimado gratis, llámenos y díganos qué necesita. Por favor intente primero con nuestro primer número.',
  'ct.step1': '1 &middot; Llame primero',
  'ct.step2': '2 &middot; Si no contestamos',
  'ct.tap': 'Toque para llamar',
  'ct.follow': 'Síganos y escríbanos',
  'ct.visit': 'Visite nuestra página &rarr;',
  'foot.tag': 'Su Hogar, Nuestra Experiencia. Nos Encargamos de Todo.',
  'foot.first': '(llame primero)',
  'foot.photos': 'Fotos de',
};

const META = {
  en: { title: document.title, menuOpen: 'Open menu', menuClose: 'Close menu', toggleLabel: 'Ver en español' },
  es: { title: 'JVR General Services | Reparaciones, Renovaciones y Remodelaciones', menuOpen: 'Abrir menú', menuClose: 'Cerrar menú', toggleLabel: 'View in English' },
};

const i18nEls = [...document.querySelectorAll('[data-i18n]')];
i18nEls.forEach(el => { el.dataset.en = el.innerHTML; });

const langBtn = document.getElementById('langToggle');
const langLong = langBtn.querySelector('.lang-long');
let lang = 'en';

function setLang(next) {
  lang = next;
  i18nEls.forEach(el => {
    el.innerHTML = next === 'es' ? (ES[el.dataset.i18n] ?? el.dataset.en) : el.dataset.en;
  });
  document.documentElement.lang = next;
  document.title = META[next].title;
  // The button always offers the other language.
  const other = next === 'es' ? 'en' : 'es';
  langLong.textContent = other === 'es' ? 'Español' : 'English';
  langLong.lang = other;
  langBtn.setAttribute('aria-label', META[next].toggleLabel);
  menuBtn.setAttribute('aria-label', nav.classList.contains('open') ? META[next].menuClose : META[next].menuOpen);
}

langBtn.addEventListener('click', () => {
  const next = lang === 'en' ? 'es' : 'en';
  setLang(next);
  try { localStorage.setItem('jvr:lang', next); } catch (e) {}
});

// ---------- Mobile menu ----------
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? META[lang].menuClose : META[lang].menuOpen);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', META[lang].menuOpen);
}));

// Apply saved preference (English unless Spanish was chosen before).
let saved = null;
try { saved = localStorage.getItem('jvr:lang'); } catch (e) {}
setLang(saved === 'es' ? 'es' : 'en');
document.documentElement.classList.remove('lang-pending');

// ---------- Gallery lightbox ----------
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

// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
