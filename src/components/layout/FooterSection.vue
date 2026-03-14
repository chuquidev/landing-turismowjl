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

        <!-- Redes sociales -->
        <div class="social-links">
          <a href="https://www.facebook.com/share/1DaN2gkFH1/" target="_blank" rel="noopener" aria-label="Facebook"
            class="social-btn social-fb">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://wa.me/51999713436" target="_blank" rel="noopener" aria-label="WhatsApp"
            class="social-btn social-wa">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L.057 23.082a.75.75 0 0 0 .916.899l5.453-1.429A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.699-.505-5.25-1.385l-.375-.217-3.884 1.018 1.037-3.77-.235-.386A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@wilsontineojimene?_r=1&_t=ZS-94gqSnr89KR" target="_blank" rel="noopener" aria-label="TikTok"
            class="social-btn social-tt">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
            </svg>
          </a>
        </div>
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

/* Redes sociales */
.social-links {
  display: flex;
  gap: .75rem;
  margin-top: 1.5rem;
}

.social-btn {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, .1);
  color: var(--gray);
  transition: all .25s;
}

.social-btn svg {
  width: 16px;
  height: 16px;
}

.social-btn:hover {
  transform: translateY(-3px);
}

.social-fb:hover {
  background: #1877F2;
  border-color: #1877F2;
  color: white;
  box-shadow: 0 6px 20px rgba(24, 119, 242, .4);
}

.social-wa:hover {
  background: #25D366;
  border-color: #25D366;
  color: white;
  box-shadow: 0 6px 20px rgba(37, 211, 102, .4);
}

.social-tt:hover {
  background: #000;
  border-color: #000;
  color: white;
  box-shadow: 0 6px 20px rgba(0, 0, 0, .5);
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