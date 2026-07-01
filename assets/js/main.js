const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('[data-menu]');
if(toggle&&menu){
  toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
}
const yearEl=document.getElementById('year'); if(yearEl) yearEl.textContent=new Date().getFullYear();

const properties=[
  {id:'apto-rosales-001',operacion:'Arriendo',tipo:'Apartamento',ciudad:'Bogotá D.C.',sector:'Rosales',titulo:'Apartamento ejecutivo con vista y excelente iluminación',precio:4300000,precioTexto:'$4.300.000 / mes',area:92,habitaciones:2,banos:2,parqueaderos:2,estado:'Disponible',destacado:true,descripcion:'Un inmueble pensado para quienes valoran ubicación, luz natural, seguridad y una experiencia residencial tranquila. Ideal para ejecutivos, parejas o familias pequeñas.',beneficios:['Ubicación estratégica en zona residencial de alto perfil.','Espacios sociales amplios y funcionales.','Excelente iluminación natural.','Edificio con portería y zonas comunes.','Proceso de arrendamiento con acompañamiento profesional.']},
  {id:'casa-cajica-002',operacion:'Venta',tipo:'Casa',ciudad:'Cajicá',sector:'Milla de Oro',titulo:'Casa moderna en zona de valorización familiar',precio:780000000,precioTexto:'$780.000.000',area:168,habitaciones:3,banos:4,parqueaderos:2,estado:'Destacada',destacado:true,descripcion:'Casa con espacios generosos, diseño contemporáneo y ubicación de alta proyección. Una alternativa para familias que buscan tranquilidad, valorización y conexión con Bogotá.',beneficios:['Zona de alta valorización.','Diseño moderno y funcional.','Espacios para familia y trabajo remoto.','Entorno tranquilo y seguro.','Acompañamiento en documentación y cierre.']},
  {id:'local-chapinero-003',operacion:'Arriendo',tipo:'Local',ciudad:'Bogotá D.C.',sector:'Chapinero',titulo:'Local comercial para marca de servicios o consultorio',precio:2500000,precioTexto:'$2.500.000 / mes',area:48,habitaciones:0,banos:1,parqueaderos:0,estado:'Oportunidad',destacado:false,descripcion:'Local práctico, visible y adaptable para servicios profesionales, comercio liviano o consultorio. Buena conectividad y flujo peatonal.',beneficios:['Ubicación con flujo comercial.','Espacio adaptable.','Ideal para servicios profesionales.','Fácil acceso a transporte.','Contrato claro y acompañado.']},
  {id:'oficina-salitre-004',operacion:'Arriendo',tipo:'Oficina',ciudad:'Bogotá D.C.',sector:'Ciudad Salitre',titulo:'Oficina corporativa con ubicación estratégica',precio:5000000,precioTexto:'$5.000.000 / mes',area:76,habitaciones:0,banos:2,parqueaderos:2,estado:'Corporativo',destacado:false,descripcion:'Oficina para empresas que buscan imagen profesional, conectividad y un espacio funcional para atención de clientes y operación administrativa.',beneficios:['Sector empresarial consolidado.','Buena iluminación.','Parqueaderos privados.','Edificio empresarial.','Cercanía a vías principales.']},
  {id:'apto-madrid-005',operacion:'Venta',tipo:'Apartamento',ciudad:'Madrid',sector:'Centro urbano',titulo:'Apartamento de inversión con excelente proyección',precio:290000000,precioTexto:'$290.000.000',area:64,habitaciones:3,banos:2,parqueaderos:1,estado:'Inversión',destacado:false,descripcion:'Inmueble atractivo para inversión o vivienda familiar, con distribución eficiente y ubicación en municipio de crecimiento sostenido.',beneficios:['Precio competitivo.','Buena distribución interior.','Proyección de valorización.','Ideal para renta.','Acompañamiento comercial y jurídico.']},
  {id:'casa-chia-006',operacion:'Administración',tipo:'Casa',ciudad:'Chía',sector:'Zona norte',titulo:'Servicio de administración para casa familiar',precio:0,precioTexto:'Servicio de administración',area:150,habitaciones:4,banos:3,parqueaderos:2,estado:'Propietarios',destacado:true,descripcion:'Modelo de publicación para propietarios que desean entregar su inmueble a una gestión inmobiliaria profesional, documentada y orientada a reducir riesgos.',beneficios:['Promoción profesional del inmueble.','Selección de interesados.','Contratos y soportes organizados.','Seguimiento al arrendamiento.','Comunicación clara con el propietario.']}
];

const grid=document.getElementById('propertyGrid');
const filter=document.getElementById('propertyFilter');
const count=document.getElementById('propertyCount');
const empty=document.getElementById('emptyState');
const clear=document.getElementById('clearFilters');
const modal=document.getElementById('propertyModal');
const modalContent=document.getElementById('modalContent');
const formatCOP=value=> value ? new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(value) : 'Consultar servicio';
function card(p){
  const icon=p.tipo==='Casa'?'🏡':p.tipo==='Apartamento'?'🏢':p.tipo==='Oficina'?'🏬':'📍';
  return `<article class="property-card-v2">
    <div class="property-visual">
      <div class="property-badges"><span class="badge gold">${p.operacion}</span><span class="badge">${p.estado}</span></div>
    </div>
    <div class="property-body">
      <div class="property-meta"><span>${icon} ${p.tipo}</span><span>${p.ciudad}</span></div>
      <h3>${p.titulo}</h3>
      <p class="property-location">${p.sector} · ${p.ciudad}</p>
      <div class="property-features"><span>${p.area} m²</span><span>${p.habitaciones || '—'} hab.</span><span>${p.banos} baños</span></div>
      <div class="property-price">${p.precioTexto}</div>
      <div class="property-actions">
        <button class="btn-mini primary" type="button" data-detail="${p.id}">Ver detalle</button>
        <a class="btn-mini secondary" href="https://wa.me/573004292902?text=Hola%20H%C3%81BITAT%20PRIME%2C%20quiero%20informaci%C3%B3n%20sobre%20${encodeURIComponent(p.titulo)}" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
  </article>`;
}
function render(list=properties){
  if(!grid) return;
  grid.innerHTML=list.map(card).join('');
  if(count) count.textContent=list.length;
  if(empty) empty.hidden=list.length!==0;
}
function applyFilters(){
  const data=new FormData(filter);
  const operacion=data.get('operacion');
  const ciudad=data.get('ciudad');
  const tipo=data.get('tipo');
  const precio=Number(data.get('precio')||0);
  const habitaciones=Number(data.get('habitaciones')||0);
  const result=properties.filter(p=>
    (!operacion || p.operacion===operacion) &&
    (!ciudad || p.ciudad===ciudad) &&
    (!tipo || p.tipo===tipo) &&
    (!precio || p.precio===0 || p.precio<=precio) &&
    (!habitaciones || p.habitaciones>=habitaciones)
  );
  render(result);
}
if(filter){filter.addEventListener('submit',e=>{e.preventDefault();applyFilters();});filter.querySelectorAll('select').forEach(s=>s.addEventListener('change',applyFilters));}
if(clear){clear.addEventListener('click',()=>{filter.reset();render(properties);});}
if(grid){grid.addEventListener('click',e=>{const btn=e.target.closest('[data-detail]'); if(!btn) return; const p=properties.find(x=>x.id===btn.dataset.detail); if(!p) return; openModal(p);});}
function openModal(p){
  modalContent.innerHTML=`<div class="modal-hero"><div><span class="badge gold">${p.operacion}</span><h3>${p.titulo}</h3><p>${p.descripcion}</p></div></div><div class="modal-main"><div><h4>Beneficios principales</h4><ul class="modal-list">${p.beneficios.map(b=>`<li>${b}</li>`).join('')}</ul></div><aside class="modal-side"><h4>Ficha del inmueble</h4><div class="property-price">${p.precioTexto}</div><p><strong>Ubicación:</strong> ${p.sector}, ${p.ciudad}</p><p><strong>Tipo:</strong> ${p.tipo}</p><p><strong>Área:</strong> ${p.area} m²</p><p><strong>Habitaciones:</strong> ${p.habitaciones || 'No aplica'}</p><p><strong>Baños:</strong> ${p.banos}</p><p><strong>Parqueaderos:</strong> ${p.parqueaderos}</p><a class="btn btn-primary" href="https://wa.me/573004292902?text=Hola%20H%C3%81BITAT%20PRIME%2C%20quiero%20agendar%20una%20asesor%C3%ADa%20sobre%20${encodeURIComponent(p.titulo)}" target="_blank" rel="noopener">Agendar asesoría</a><p class="modal-disclaimer">Información de referencia. Las condiciones definitivas se validan con el propietario y la documentación del inmueble.</p></aside></div>`;
  if(typeof modal.showModal==='function') modal.showModal();
}
document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',()=>modal.close()));
if(modal){modal.addEventListener('click',e=>{if(e.target===modal) modal.close();});}
render(properties);
