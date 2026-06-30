const properties = [
  {
    title: 'Apartamento familiar en zona residencial',
    type: 'arriendo',
    location: 'Bogotá D.C.',
    price: '$2.300.000 / mes',
    meta: ['3 alcobas', '2 baños', 'Parqueadero'],
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',
    text: 'Espacio cómodo, iluminado y listo para proceso de arrendamiento.'
  },
  {
    title: 'Casa con excelente proyección comercial',
    type: 'venta',
    location: 'Cundinamarca',
    price: '$480.000.000',
    meta: ['4 alcobas', 'Patio', 'Ubicación estratégica'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    text: 'Ideal para familia o inversión patrimonial de mediano plazo.'
  },
  {
    title: 'Inmueble listo para administración integral',
    type: 'administracion',
    location: 'Bogotá D.C.',
    price: 'Gestión personalizada',
    meta: ['Contrato', 'Inventario', 'Seguimiento'],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    text: 'Modelo de acompañamiento para propietarios que buscan tranquilidad.'
  }
];

const grid = document.getElementById('propertyGrid');
const filters = document.querySelectorAll('.filter');

function renderProperties(filter = 'todos') {
  const filtered = filter === 'todos' ? properties : properties.filter(item => item.type === filter);
  grid.innerHTML = filtered.map(item => `
    <article class="property-card reveal visible">
      <div class="property-card__image" style="--image:url('${item.image}')"></div>
      <div class="property-card__body">
        <span class="property-card__tag">${item.type}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <div class="property-card__meta">${item.meta.map(m => `<span>${m}</span>`).join('')}</div>
        <div class="property-card__price">${item.price}</div>
        <p><strong>${item.location}</strong></p>
      </div>
    </article>
  `).join('');
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderProperties(button.dataset.filter);
  });
});

const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => links.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
renderProperties();
