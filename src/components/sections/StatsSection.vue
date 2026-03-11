<template>
  <div class="stats-bar">
    <div class="stats-bar-line"></div>
    <div class="stats-grid">
      <div class="stat-item reveal" v-for="(s, i) in stats" :key="s.label" :class="`rd${i}`">
        <div class="stat-num">{{ s.value }}<span class="stat-suf">{{ s.suffix }}</span></div>
        <div class="stat-lbl">{{ s.label }}</div>
        <div class="stat-accent"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { stats } from '@/data/content.js'
</script>

<style scoped>
.stats-bar {
  position: relative;
  overflow: hidden;
  background: var(--navy2);
  border-top: 1px solid rgba(30, 79, 216, .1);
  border-bottom: 1px solid rgba(217, 31, 42, .1);
}

.stats-bar-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--blue) 0%, var(--blue2) 35%, var(--red) 65%, var(--red2) 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1300px;
  margin: 0 auto;
}

.stat-item {
  padding: 2.5rem 2rem;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, .05);
  position: relative;
  transition: background .3s;
  cursor: default;
}

.stat-item:last-child {
  border-right: none;
}

.stat-item:hover {
  background: rgba(30, 79, 216, .06);
}

.stat-num {
  font-family: var(--fd);
  font-size: 4rem;
  line-height: 1;
}

.stat-suf {
  color: var(--red);
  font-family: var(--fd);
  font-size: 2.5rem;
}

.stat-lbl {
  font-size: .72rem;
  text-transform: uppercase;
  letter-spacing: .12em;
  color: var(--gray2);
  margin-top: .4rem;
}

.stat-accent {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--red);
  transition: width .4s;
}

.stat-item:hover .stat-accent {
  width: 60%;
}

@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-item {
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, .05);
  }
}
</style>
