<template>
  <section class="about" id="nosotros">
    <!-- Imagen lado izquierdo -->
    <div class="about-img-wrap reveal">
      <div class="about-stripe"></div>
      <img src="/public/images/nosotros.jpg"
        alt="Flota de buses Turismo WJL" loading="lazy" />
      <div class="about-corner">
        <div class="about-corner-n">6</div>
        <div class="about-corner-l">Años de<br>trayectoria</div>
      </div>
    </div>

    <!-- Contenido lado derecho -->
    <div class="about-content reveal rd2">
      <div class="s-tag">Quiénes somos</div>
      <h2 class="s-title">EMPRESA<br>CON<br>PROPÓSITO</h2>
      <p class="s-sub" style="margin-bottom: 2rem">
        Nacimos en 2020 con una sola unidad y un compromiso: conectar a las
        familias peruanas con sus destinos de manera segura, puntual y humana.
      </p>
      <div class="about-features">
        <div class="af" v-for="f in features" :key="f.title">
          <div class="af-dot"></div>
          <p><strong>{{ f.title }}:</strong> {{ f.desc }}</p>
        </div>
      </div>
      <div style="margin-top: 2.5rem">
        <a href="#contacto" class="btn-p">Contáctanos</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { features } from '@/data/content.js'
</script>

<style scoped>
.about {
  background: var(--navy);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
  position: relative;
}

/* Imagen */
.about-img-wrap {
  position: relative;
  overflow: hidden;
  min-height: 600px;
}

.about-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform .6s;
  display: block;
}

.about-img-wrap:hover img {
  transform: scale(1.03);
}

.about-img-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, transparent 60%, var(--navy) 100%);
}

.about-stripe {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 2;
  background: linear-gradient(to bottom, var(--blue), var(--red));
}

.about-corner {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  z-index: 3;
  background: linear-gradient(135deg, var(--blue), var(--blue2));
  padding: 1.2rem 1.6rem;
  text-align: center;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%);
  box-shadow: 0 8px 30px var(--blue-glow);
}

.about-corner-n {
  font-family: var(--fd);
  font-size: 2.8rem;
  line-height: 1;
}

.about-corner-l {
  font-size: .58rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .08em;
  opacity: .9;
}

/* Contenido */
.about-content {
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-features {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: .8rem;
}

.af {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: .7rem 1rem;
  border-left: 2px solid transparent;
  transition: all .3s;
  cursor: default;
}

.af:hover {
  border-left-color: var(--red);
  background: rgba(217, 31, 42, .04);
  padding-left: 1.2rem;
}

.af-dot {
  width: 6px;
  height: 6px;
  background: var(--red);
  margin-top: .45rem;
  flex-shrink: 0;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transition: transform .3s;
}

.af:hover .af-dot {
  transform: rotate(45deg) scale(1.3);
}

.af p {
  color: var(--gray2);
  font-size: .9rem;
  line-height: 1.65;
}

.af strong {
  color: var(--white);
  font-weight: 600;
}

@media (max-width: 900px) {
  .about {
    grid-template-columns: 1fr;
  }

  .about-img-wrap {
    min-height: 320px;
  }

  .about-content {
    padding: 3rem 4%;
  }
}
</style>
