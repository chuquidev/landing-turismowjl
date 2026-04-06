// ── Imágenes de servicios
import imgPasajeros from "@/assets/images/pasajeros.png";
import imgEncomiendas from "@/assets/images/encomiendas.jpg";
import imgCarga from "@/assets/images/carga.png";
import imgCorporativo from "@/assets/images/coorporativo.jpg";
import imgTurismo from "@/assets/images/turismo.jpg";

// ── Imágenes de flota
import imgCombi from "@/assets/images/combi.png";
import imgEjecutiva from "@/assets/images/ejecutiva.png";
import imgCamioneta from "@/assets/images/camioneta.jpg";

// ── Imagen nosotros
import imgNosotros from "@/assets/images/nosotros.png";

// ── Imagen rutas/cobertura
import imgRutas from "@/assets/images/rutas.png";

export { imgNosotros, imgRutas };

export const stats = [
  { value: "6", suffix: "+", label: "Años de experiencia" },
  { value: "8", suffix: "", label: "Rutas activas" },
  { value: "10", suffix: "K", label: "Clientes atendidos" },
  { value: "4", suffix: "", label: "Unidades en flota" },
];

export const services = [
  {
    name: "Transporte de Pasajeros",
    desc: "Viajes interprovinciales cómodos y seguros. Salidas diarias con vehículos modernos, aire acondicionado y GPS en todas las unidades.",
    img: imgPasajeros,
    featured: true,
  },
  {
    name: "Encomiendas",
    desc: "Envío rápido y seguro de paquetes a nivel nacional. Rastreo en tiempo real y entrega puerta a puerta.",
    img: imgEncomiendas,
    featured: false,
  },
  {
    name: "Carga Ligera",
    desc: "Transporte de mercadería y equipos hasta 1.5 toneladas. Cobertura en zonas rurales y urbanas.",
    img: imgCarga,
    featured: false,
  },
  {
    name: "Servicio Corporativo",
    desc: "Traslado de personal con contratos mensuales, rutas personalizadas y conductores asignados.",
    img: imgCorporativo,
    featured: false,
  },
  {
    name: "Transporte Turístico",
    desc: "Full day, circuitos regionales y paquetes grupales para agencias, colegios y empresas.",
    img: imgTurismo,
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
  { name: "Combi Interprovincial", capacity: "15 pasajeros", img: imgCombi },
  { name: "Combi Interprovincial", capacity: "15 pasajeros", img: imgNosotros },
  { name: "Camioneta 4x4", capacity: "5 pasajeros", img: imgCamioneta },
  { name: "Furgón de Carga", capacity: "hasta 1.2 t", img: imgCarga },
];

export const routes = [
  { name: "Chiclayo → Lima", km: "770 km" },
  { name: "Chiclayo → Piura", km: "209 km" },
  { name: "Chiclayo → Trujillo", km: "209 km" },
  { name: "Chiclayo → Olmos", km: "106 km" },
  { name: "Chiclayo → Cajamarca", km: "256 km" },
  { name: "Chiclayo → Huarmaca", km: "211 km" },
  { name: "Huarmaca → Chiclayo", km: "211 km" },
  { name: "Chiclayo → Tarapoto", km: "1,050 km" },
  { name: "Huarmaca → Piura", km: "286 km" },
];

export const contactInfo = [
  {
    icon: "📍",
    label: "Dirección",
    value:
      "Parque de los Mecánicos, esquina de la Calle San Isidro y Calle Labradores Chiclayo",
  },
  { icon: "📞", label: "Teléfono", value: "+51 999 713 436" },
  { icon: "✉️", label: "Email", value: "Wilsontineo764@gmail.com" },
  { icon: "🕐", label: "Horario", value: "Lun–Dom · 7:00 am – 10:00 pm" },
];

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Flota", href: "#flota" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contacto", href: "#contacto" },
];
