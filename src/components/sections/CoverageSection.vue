<template>
  <section class="coverage" id="cobertura">
    <div class="coverage-inner">
      <div>
        <div class="s-tag">Dónde llegamos</div>
        <h2 class="s-title reveal">COBERTURA<br>NACIONAL</h2>
        <p class="s-sub">
          Rutas interprovinciales en todo el país. Huarmaca, Chiclayo, Lima, Piura, Olmos, Trujillo, Bagua.  Conectamos las principales ciudades del Perú, ofreciendo seguridad, puntualidad y comodidad en cada viaje. Nuestro compromiso es
          acercar personas, familias y negocios, creando experiencias de transporte confiables
          y accesibles para todos.
        </p>
        <div class="routes reveal">
          <div class="route-item" v-for="r in routes" :key="r.name">
            <div class="route-dot"></div>
            <span class="route-cities">{{ r.name }}</span>
            <span class="route-km">{{ r.km }}</span>
            <span class="route-arr">→</span>
          </div>
        </div>
      </div>

      <div class="cov-map reveal rd2">
        <div class="cov-map-tag">RUTAS OPERATIVAS</div>
        <img :src="imgRutas" alt="Paisaje andino peruano" loading="lazy" />
        <div class="cov-dot" v-for="d in dots" :key="d.id" :style="d.style"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { features, imgRutas, routes} from '@/data/content.js'


const dots = [
  { id: 1, style: 'top:30%;left:35%;animation-delay:0s' },
  { id: 2, style: 'top:48%;left:31%;animation-delay:.5s' },
  { id: 3, style: 'top:63%;left:43%;animation-delay:1s;background:var(--blue2);box-shadow:0 0 14px var(--blue-glow)' },
  { id: 4, style: 'top:37%;left:56%;animation-delay:.8s' },
  { id: 5, style: 'top:60%;left:66%;animation-delay:.3s;background:var(--blue2);box-shadow:0 0 14px var(--blue-glow)' },
  { id: 1, style: 'top:85%;left:68%;animation-delay:0s' },
]
</script>

<style scoped>
.coverage {
  background: var(--navy);
  position: relative;
  overflow: hidden;
}

.coverage-inner {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 5rem;
  align-items: center;
}

.routes {
  margin-top: 2.5rem;
}

.route-item {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: .85rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, .05);
  cursor: pointer;
  transition: all .25s;
}

.route-item:hover {
  padding-left: .6rem;
  padding-right: .6rem;
  background: rgba(30, 79, 216, .04);
}

.route-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  background: rgba(217, 31, 42, .3);
  border: 1px solid rgba(217, 31, 42, .5);
  transition: all .3s;
}

.route-item:hover .route-dot {
  background: var(--red);
  box-shadow: 0 0 8px var(--red-glow);
  transform: scale(1.4);
}

.route-cities {
  font-weight: 500;
  font-size: .92rem;
  flex: 1;
}

.route-km {
  font-family: var(--fm);
  font-size: .68rem;
  color: var(--gray);
}

.route-arr {
  color: rgba(30, 79, 216, .3);
  margin-left: .5rem;
  transition: all .3s;
  font-size: .8rem;
}

.route-item:hover .route-arr {
  color: var(--blue2);
  transform: translateX(3px);
}

/* Mapa con imagen */
.cov-map {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(30, 79, 216, .15);
  aspect-ratio: 4/5;
}

.cov-map img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.cov-map::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(135deg, rgba(7, 9, 26, .55), rgba(30, 79, 216, .15));
}

.cov-map-tag {
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  z-index: 2;
  font-family: var(--fm);
  font-size: .6rem;
  color: var(--blue2);
  letter-spacing: .18em;
  background: rgba(7, 9, 26, .75);
  padding: .3rem .7rem;
}

.cov-dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  z-index: 2;
  background: var(--red);
  box-shadow: 0 0 14px var(--red-glow);
  animation: pd 2s ease-in-out infinite;
}

.cov-dot::after {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid rgba(217, 31, 42, .4);
  animation: pd2 2s ease-in-out infinite;
}

@keyframes pd {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(1.5);
    opacity: .6;
  }
}

@keyframes pd2 {

  0%,
  100% {
    transform: scale(1);
    opacity: .4;
  }

  50% {
    transform: scale(1.8);
    opacity: 0;
  }
}

@media (max-width: 900px) {
  .coverage-inner {
    grid-template-columns: 1fr;
  }
}
</style>
