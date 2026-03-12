<template>
  <footer>
    <div class="footer-divider"></div>

    <div class="footer-top">
      <!-- Brand -->
      <div class="footer-brand">
        <div class="f-logo">
          <span class="flt">TURISMO </span>
          <span class="flw">W</span>
          <span class="flj">J</span>
          <span class="fll">L</span>
        </div>
        <div class="slogan">"Uniendo Familias"</div>
        <p>Empresa de transporte con más de 6 años conectando el Perú con seguridad, puntualidad y calidez humana.</p>
      </div>

      <!-- Col: Servicios -->
      <div class="fc">
        <h4>Servicios</h4>
        <ul>
          <li v-for="s in serviceLinks" :key="s"><a href="#">{{ s }}</a></li>
        </ul>
      </div>

      <!-- Col: Empresa -->
      <div class="fc">
        <h4>Empresa</h4>
        <ul>
          <li v-for="l in companyLinks" :key="l"><a href="#">{{ l }}</a></li>
        </ul>
      </div>

      <!-- Col: Legal -->
      <div class="fc">
        <h4>Legal</h4>
        <ul>
          <li v-for="l in legalLinks" :key="l"><a href="#">{{ l }}</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Turismo WJL E.I.R.L. — Todos los derechos reservados</p>
      <p>Autorizado por MTC</p>
    </div>
  </footer>
</template>

<script setup>
const serviceLinks = ['Transporte de Pasajeros', 'Encomiendas', 'Carga Ligera', 'Corporativo', 'Turístico']
const companyLinks = ['Nosotros', 'Nuestra Flota', 'Rutas', 'Trabaja con Nosotros']
const legalLinks = ['Términos y Condiciones', 'Política de Privacidad', 'Libro de Reclamaciones', 'Regulaciones MTC']
</script>

<style scoped>
footer {
  background: var(--navy2);
  border-top: 1px solid rgba(30, 79, 216, .12);
  padding: 5rem 5% 2rem;
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--blue), var(--red), transparent);
  margin-bottom: 2rem;
  opacity: .3;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Brand */
.f-logo {
  font-family: var(--fd);
  font-size: 2.2rem;
  letter-spacing: .08em;
  line-height: 1;
  margin-bottom: .8rem;
}

.flt {
  color: rgba(232, 234, 245, .7);
}

.flw {
  color: var(--blue2);
}

.flj {
  color: var(--white);
}

.fll {
  color: var(--red);
}

.slogan {
  font-style: italic;
  font-size: .82rem;
  color: var(--gray);
  margin-bottom: 1rem;
}

.footer-brand p {
  color: var(--gray);
  font-size: .82rem;
  line-height: 1.7;
  max-width: 260px;
}

/* Cols */
.fc h4 {
  font-family: var(--fm);
  font-size: .65rem;
  color: var(--blue2);
  letter-spacing: .2em;
  text-transform: uppercase;
  margin-bottom: 1.4rem;
  padding-bottom: .6rem;
  border-bottom: 1px solid rgba(30, 79, 216, .2);
}

.fc ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: .7rem;
}

.fc ul a {
  color: var(--gray);
  text-decoration: none;
  font-size: .83rem;
  transition: all .2s;
  display: inline-block;
}

.fc ul a:hover {
  color: var(--white);
  padding-left: .4rem;
}

/* Bottom */
.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, .05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  color: var(--gray);
  font-size: .75rem;
  font-family: var(--fm);
}

@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
</style>
