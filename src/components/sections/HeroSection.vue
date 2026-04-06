<template>
  <section class="hero" id="inicio">
    <!-- Imagen de fondo -->
    <div class="hero-img">
      <img src="/src/assets/images/bannerfondo1.png"
        alt="Bus de turismo en carretera" loading="eager" />
    </div>

    <div class="hero-grid"></div>
    <div class="hero-sideline"></div>

    <div class="hero-content">
      <div class="hero-eyebrow">Turismo WJL E.I.R.L. — Desde 2020</div>
      <h1 class="hero-title">
        <span class="line1">UNIENDO</span>
        <span class="line2">FAMILIAS</span>
        <span class="line3">SIEMPRE</span>
      </h1>
      <p class="hero-sub">
        Pasajeros, encomiendas, carga ligera, corporativo y turismo.
        Viaja seguro con la empresa que conecta el Perú.
      </p>
      <div class="hero-actions">
        <a href="#contacto" class="btn-p">Reservar servicio</a>
        <a href="#servicios" class="btn-s">Ver servicios →</a>
      </div>
    </div>

    <!-- Badge flotante con stats -->
    <div class="hero-badge">
      <div class="badge-stat" v-for="s in stats" :key="s.label">
        <div class="badge-num">{{ s.value }}<span class="badge-suf">{{ s.suffix }}</span></div>
        <div class="badge-lbl">{{ s.label }}</div>
      </div>
    </div>

    <div class="hero-scroll">
      <div class="scroll-line"></div>SCROLL
    </div>
    <div class="hero-swoosh"></div>
  </section>
</template>

<script setup>
import { stats } from '@/data/content.js'
</script>

<style scoped>
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 72px;
  /* compensa el nav fijo */
  box-sizing: border-box;
  /* incluye el padding en el 100vh */
}

/* Imagen con overlay */
.hero-img {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(7, 9, 26, .92) 0%, rgba(7, 9, 26, .75) 45%, rgba(7, 9, 26, .3) 100%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  z-index: 1;
  opacity: .04;
  background-image: linear-gradient(rgba(30, 79, 216, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 79, 216, 1) 1px, transparent 1px);
  background-size: 80px 80px;
}

.hero-swoosh {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  z-index: 3;
  background: linear-gradient(90deg, var(--blue), var(--blue2) 40%, var(--red) 70%, var(--red2) 100%);
}

.hero-sideline {
  position: absolute;
  left: 4%;
  top: 20%;
  width: 2px;
  height: 60%;
  z-index: 2;
  background: linear-gradient(to bottom, transparent, var(--blue), var(--red), transparent);
  opacity: .7;
}

/* Contenido — sin margin artificial */
.hero-content {
  position: relative;
  z-index: 2;
  padding: 0 5%;
  max-width: 680px;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  font-family: 8px;
  font-size: .7rem;
  color: var(--blue2);
  letter-spacing: .2em;
  text-transform: uppercase;
  margin-bottom: 1.8rem;
  background: rgba(30, 79, 216, .15);
  border: 1px solid rgba(30, 79, 216, .35);
  padding: .4rem .9rem;
  animation: fu .8s ease both;
  font-weight: 600;
}

.hero-eyebrow::before {
  content: '►';
  font-size: .5rem;
  color: var(--red);
}

.hero-title {
  font-family: var(--fd);
  font-size: clamp(4.5rem, 9vw, 9.5rem);
  line-height: .88;
  letter-spacing: .01em;
  margin-bottom: 1.8rem;
  animation: fu .8s .15s ease both;
}

.hero-title .line1 {
  color: var(--offwhite);
  display: block;
}

.hero-title .line2 {
  display: block;
  background: linear-gradient(90deg, var(--blue2), var(--blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 30px var(--blue-glow));
}

.hero-title .line3 {
  color: var(--red);
  display: block;
  filter: drop-shadow(0 0 20px var(--red-glow));
}

.hero-sub {
  font-size: 1.05rem;
  color: rgba(232, 234, 245, .7);
  line-height: 1.8;
  max-width: 460px;
  margin-bottom: 2.5rem;
  font-weight: 300;
  animation: fu .8s .3s ease both;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  animation: fu .8s .45s ease both;
}

@keyframes fu {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Badge flotante */
.hero-badge {
  position: absolute;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  background: rgba(13, 17, 40, .85);
  border: 1px solid rgba(30, 79, 216, .3);
  backdrop-filter: blur(20px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  animation: float 6s ease-in-out infinite;
  box-shadow: 0 30px 80px rgba(0, 0, 0, .6);
}

@keyframes float {

  0%,
  100% {
    transform: translateY(-50%);
  }

  50% {
    transform: translateY(calc(-50% - 12px));
  }
}

.badge-stat {
  padding: 1.4rem 1.8rem;
  text-align: center;
  background: rgba(7, 9, 26, .6);
}

.badge-stat:nth-child(2) {
  border-left: 1px solid rgba(30, 79, 216, .2);
}

.badge-stat:nth-child(3) {
  border-top: 1px solid rgba(30, 79, 216, .2);
}

.badge-stat:nth-child(4) {
  border-top: 1px solid rgba(30, 79, 216, .2);
  border-left: 1px solid rgba(30, 79, 216, .2);
}

.badge-num {
  font-family: var(--fd);
  font-size: 3rem;
  line-height: 1;
}

.badge-suf {
  font-size: 1.8rem;
  color: var(--red);
}

.badge-lbl {
  font-size: .65rem;
  color: var(--gray2);
  text-transform: uppercase;
  letter-spacing: .1em;
  margin-top: .2rem;
}

/* Scroll indicator */
.hero-scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 5%;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: .8rem;
  font-family: var(--fm);
  font-size: .62rem;
  letter-spacing: .18em;
  color: var(--gray);
}

.scroll-line {
  width: 50px;
  height: 1px;
  background: linear-gradient(90deg, var(--blue), var(--red));
  animation: lg 2s ease-in-out infinite;
}

@keyframes lg {

  0%,
  100% {
    width: 30px;
  }

  50% {
    width: 60px;
  }
}

@media (max-width: 900px) {
  .hero {
    padding-top: 64px;
  }

  .hero-content {
    padding: 0 4%;
    max-width: 100%;
  }

  .hero-badge {
    display: none;
  }
}
</style>