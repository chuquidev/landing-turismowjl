export const stats = [
  { value: "6", suffix: "+", label: "Años de experiencia" },
  { value: "20", suffix: "", label: "Rutas activas" },
  { value: "50", suffix: "K", label: "Clientes atendidos" },
  { value: "5", suffix: "", label: "Unidades en flota" },
];

export const services = [
  {
    name: "Transporte de Pasajeros",
    desc: "Viajes interprovinciales cómodos y seguros. Salidas diarias con Vehiculos modernos, aire acondicionado y GPS en todas las unidades.",
    img: "/public/images/pasajeros.png",
    featured: true,
  },
  {
    name: "Encomiendas",
    desc: "Envío rápido y seguro de paquetes a nivel nacional. Rastreo en tiempo real y entrega puerta a puerta.",
    img: "/public/images/encomiendas.jpg",
    featured: false,
  },
  {
    name: "Carga Ligera",
    desc: "Transporte de mercadería y equipos hasta 1.5 toneladas. Cobertura en zonas rurales y urbanas.",
    img: "/public/images/carga.png",
    featured: false,
  },
  {
    name: "Servicio Corporativo",
    desc: "Traslado de personal con contratos mensuales, rutas personalizadas y conductores asignados.",
    img: "/public/images/coorporativo.jpg",
    featured: false,
  },
  {
    name: "Transporte Turístico",
    desc: "Full day, circuitos regionales y paquetes grupales para agencias, colegios y empresas.",
    img: "/public/images/turismo.jpg",
    featured: false,
  },
];

export const features = [
  {
    title: "Misión",
    desc: "Brindar movilidad segura, accesible y eficiente para todos los peruanos, conectando familias, comunidades y negocios a través de rutas interprovinciales confiables.",
  },
  {
    title: "Visión",
    desc: "Ser la empresa de transporte más confiable, moderna y querida del país al 2030, destacando por innovación, calidad de servicio y compromiso con nuestros pasajeros.",
  },
  {
    title: "Certificaciones",
    desc: "Contamos con la certificación ISO 9001:2015, autorización oficial del MTC y homologación de SUTRAN, garantizando estándares internacionales de calidad y seguridad.",
  },
  {
    title: "Seguridad",
    desc: "Nuestra flota recibe mantenimiento preventivo mensual, está equipada con GPS, asegurando monitoreo constante y viajes protegidos.",
  },
];

export const vehicles = [
  {
    name: "Combi Interprovincial",
    capacity: "15 pasajeros",
    img: "public/images/combi.png",
  },
  {
    name: "Minivan Ejecutiva",
    capacity: "6-8 pasajeros",
    img: "public/images/ejecutiva.png",
  },
  {
    name: "Camioneta 4x4",
    capacity: "5 pasajeros",
    img: "public/images/camioneta.jpg",
  },
  {
    name: "Furgón de Carga",
    capacity: "hasta 2.5 t",
    img: "public/images/carga.png",
  },
];

export const routes = [
  // Costa
  { name: "Chiclayo → Lima", km: "209 km" },
  { name: "Chiclayo → Piura", km: "209 km" },
  { name: "Chiclayo → Trujillo", km: "209 km" },
  { name: "Chiclayo → Tumbes", km: "473 km" },

  // Sierra
  { name: "Chiclayo → Cajamarca", km: "256 km" },
  { name: "Chiclayo → Huancayo", km: "865 km" },
  { name: "Chiclayo → Cusco", km: "1,420 km" },

  // Selva
  { name: "Chiclayo → Tarapoto", km: "1,050 km" },
  { name: "Chiclayo → Pucallpa", km: "1,280 km" },
];

export const contactInfo = [
  {
    icon: "📍",
    label: "Dirección",
    value: "Av. Principal 1200, Chiclayo, Lambayeque",
  },
  { icon: "📞", label: "Teléfono", value: "+51 999 713 436" },
  { icon: "✉️", label: "Email", value: "turismowjl@gmail.com" },
  { icon: "🕐", label: "Horario", value: "Lun–Dom · 7:00 am – 10:00 pm" },
];

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Flota", href: "#flota" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];
