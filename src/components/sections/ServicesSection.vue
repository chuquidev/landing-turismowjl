<template>
  <section class="services" id="servicios">
    <div class="srv-header">
      <div>
        <div class="s-tag">Lo que hacemos</div>
        <h2 class="s-title reveal">NUESTROS<br>SERVICIOS</h2>
      </div>
      <p class="s-sub reveal rd2">
        Soluciones de movilidad para personas, empresas y operadores
        turísticos en todo el territorio peruano.
      </p>
    </div>

    <div class="srv-grid">
      <div class="srv-card reveal" :class="{ featured: s.featured }" v-for="(s, i) in services" :key="i"
        :style="`transition-delay:${i * .08}s`">
        <div class="srv-img-wrap">
          <img :src="s.img" :alt="s.name" loading="lazy" />
        </div>
        <div class="srv-body">
          <div class="srv-num">0{{ i + 1 }}</div>
          <div class="srv-name">{{ s.name }}</div>
          <p class="srv-desc">{{ s.desc }}</p>
        </div>
        <span class="srv-arrow">↗</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { services } from '@/data/content.js'
</script>

<style scoped>
.services {
  background: var(--navy2);
  position: relative;
  overflow: hidden;
}

.services::before {
  content: '';
  position: absolute;
  top: -30%;
  right: -10%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(30, 79, 216, .05), transparent 70%);
  pointer-events: none;
}

.srv-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.srv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, .04);
}

.srv-card {
  background: var(--navy3);
  position: relative;
  cursor: pointer;
  transition: all .4s cubic-bezier(.16, 1, .3, 1);
  overflow: hidden;
  border: 1px solid transparent;
}

.srv-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--blue), var(--red));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .4s;
}

.srv-card:hover {
  transform: translateY(-4px);
  border-color: rgba(30, 79, 216, .2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, .5);
}

.srv-card:hover::after {
  transform: scaleX(1);
}

.srv-card.featured {
  grid-column: span 2;
}

/* Imagen */
.srv-img-wrap {
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.srv-card.featured .srv-img-wrap {
  height: 220px;
}

.srv-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform .5s;
}

.srv-card:hover .srv-img-wrap img {
  transform: scale(1.05);
}

.srv-body {
  padding: 1.8rem;
}

.srv-num {
  font-family: var(--fm);
  font-size: .65rem;
  color: rgba(30, 79, 216, .5);
  letter-spacing: .18em;
  margin-bottom: .8rem;
}

.srv-name {
  font-family: var(--fd);
  font-size: 1.7rem;
  letter-spacing: .03em;
  margin-bottom: .6rem;
}

.srv-desc {
  color: var(--gray2);
  font-size: .86rem;
  line-height: 1.7;
  font-weight: 300;
}

.srv-arrow {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  font-size: 1.1rem;
  color: rgba(30, 79, 216, .3);
  transition: all .3s;
}

.srv-card:hover .srv-arrow {
  color: var(--red);
  transform: translate(3px, -3px);
}

@media (max-width: 900px) {
  .srv-grid {
    grid-template-columns: 1fr;
  }

  .srv-card.featured {
    grid-column: span 1;
  }

  .srv-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
