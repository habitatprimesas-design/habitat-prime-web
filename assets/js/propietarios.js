(() => {
  const form = document.getElementById('ownerEnquiry');
  if (!form) return;
  const params = new URLSearchParams(window.location.search);
  // Attribute the enquiry in the owner's message; do not send analytics or store form data.
  const origin = ['Origen: web propietarios'];
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign']) {
    const value = params.get(key);
    if (value && /^[\w .-]{1,80}$/.test(value)) origin.push(`${key}: ${value}`);
  }
  const makeUrl = text => `https://wa.me/573004292902?text=${encodeURIComponent(text)}`;
  const direct = document.querySelector('[data-direct-whatsapp]');
  if (direct) direct.href = makeUrl(`Hola, quiero entregar mi inmueble en administración.\n${origin.join('\n')}`);
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('nombre') || '').trim();
    const city = String(data.get('ciudad') || '').trim();
    if (!city) {
      form.elements.ciudad.setCustomValidity('Indique la ciudad o el municipio del inmueble.');
      form.elements.ciudad.reportValidity();
      return;
    }
    const lines = [
      'Hola Hábitat Prime, quiero información para entregar mi inmueble en administración.',
      ...(name ? [`Nombre: ${name}`] : []),
      `Ciudad o municipio: ${city}`,
      `Tipo: ${data.get('tipo')}`,
      `Situación: ${data.get('situacion')}`,
      'Autorizo el tratamiento de los datos de esta consulta conforme a la política de privacidad.',
      ...origin
    ];
    const url = makeUrl(lines.join('\n'));
    const link = document.getElementById('preparedLink');
    link.href = url;
    document.getElementById('formStatus').hidden = false;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
  form.elements.ciudad.addEventListener('input', () => form.elements.ciudad.setCustomValidity(''));
})();
