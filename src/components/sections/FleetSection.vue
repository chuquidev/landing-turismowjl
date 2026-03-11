<template>
  <section class="fleet" id="flota">
    <div class="s-tag">Nuestra flota</div>
    <h2 class="s-title reveal">VEHÍCULOS<br>MODERNOS</h2>
    <div class="fleet-grid">
      <div class="fleet-card reveal" v-for="(v, i) in vehicles" :key="v.name" :style="`transition-delay:${i * .1}s`">
        <div class="fleet-img-wrap">
          <img :src="v.img" :alt="v.name" loading="lazy" />
        </div>
        <div class="fleet-body">
          <div class="fleet-name">{{ v.name }}</div>
          <div class="fleet-cap">{{ v.capacity }}</div>
          <div class="fleet-bar"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { vehicles } from '@/data/content.js'
</script>

<style scoped>
.fleet {
  background: var(--navy2);
}

.fleet-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, .04);
  margin-top: 3.5rem;
}

.fleet-card {
  background: var(--navy3);
  overflow: hidden;
  transition: all .35s;
  cursor: default;
  position: relative;
}

.fleet-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  z-index: 1;
  background: linear-gradient(90deg, var(--blue), var(--red));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .35s;
}

.fleet-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, .4);
}

.fleet-card:hover::before {
  transform: scaleX(1);
}

.fleet-img-wrap {
  width: 100%;
  height: 160px;
  overflow: hidden;
}

.fleet-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform .5s;
}

.fleet-card:hover .fleet-img-wrap img {
  transform: scale(1.06);
}

.fleet-body {
  padding: 1.4rem;
}

.fleet-name {
  font-family: var(--fd);
  font-size: 1.3rem;
  letter-spacing: .04em;
  margin-bottom: .3rem;
}

.fleet-cap {
  font-family: var(--fm);
  font-size: .68rem;
  color: var(--blue2);
  letter-spacing: .12em;
}

.fleet-bar {
  width: 0;
  height: 1px;
  background: linear-gradient(90deg, var(--blue), var(--red));
  margin: .7rem 0 0;
  transition: width .4s;
}

.fleet-card:hover .fleet-bar {
  width: 80%;
}

@media (max-width: 900px) {
  .fleet-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
