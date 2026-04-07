<template>
  <nav class="nav" :class="{ scrolled }">

    <!-- Logo -->
    <a href="#" class="nav-logo">
      <span class="nl-t">TURISMO&nbsp;</span>
      <span class="nl-w">W</span>
      <span class="nl-j">J</span>
      <span class="nl-l">L</span>
    </a>

    <!-- Links desktop -->
    <ul class="nav-links">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
    </ul>

    <!-- CTA desktop -->
    <button class="nav-cta" @click="goTo('#contacto')">Cotizar ahora</button>

    <!-- Burger -->
    <button class="nav-burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Abrir menú">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>

  <!-- ✅ Teleport al body — siempre encima de TODO sin importar el scroll -->
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="menuOpen" class="nav-overlay" @click="menuOpen = false" />
    </Transition>

    <Transition name="drawer">
      <div v-if="menuOpen" class="nav-drawer">

        <div class="drawer-head">
          <span class="drawer-logo">
            <span class="nl-t">TURISMO&nbsp;</span>
            <span class="nl-w">W</span>
            <span class="nl-j">J</span>
            <span class="nl-l">L</span>
          </span>
          <button class="drawer-close" @click="menuOpen = false" aria-label="Cerrar">✕</button>
        </div>

        <ul class="drawer-links">
          <li v-for="(link, i) in navLinks" :key="link.href" class="drawer-item"
            :style="`animation-delay:${i * .07 + .1}s`">
            <a :href="link.href" @click="close(link.href)">
              <span class="drawer-num">0{{ i + 1 }}</span>
              {{ link.label }}
              <span class="drawer-arr">→</span>
            </a>
          </li>
        </ul>

        <div class="drawer-footer">
          <a href="#contacto" class="drawer-cta" @click="close('#contacto')">Cotizar ahora</a>
          <a href="https://wa.me/51999713436?text=Hola%20Turismo%20WJL%2C%20quisiera%20informaci%C3%B3n%20sobre%20sus%20servicios."
          class="drawer-wa"
          target="_blank"
          rel="noopener"
          >WhatsApp</a>
        </div>

      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { navLinks } from '@/data/content.js'

const scrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 60
}

function goTo(selector) {
  document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
}

function close(href) {
  menuOpen.value = false
  setTimeout(() => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }, 320)
}

// Bloquear scroll del body cuando el menú está abierto
watch(menuOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ── Nav ── */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.1rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .5s cubic-bezier(.16, 1, .3, 1);
}

.nav.scrolled {
  background: rgba(7, 9, 26, .95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(30, 79, 216, .2);
  box-shadow: 0 4px 40px rgba(0, 0, 0, .4);
}

/* Logo */
.nav-logo {
  font-family: var(--fd);
  font-size: 1.9rem;
  letter-spacing: .1em;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.nl-t {
  color: var(--offwhite);
}

.nl-w {
  color: var(--blue2);
  text-shadow: 0 0 20px var(--blue-glow);
}

.nl-j {
  color: var(--white);
}

.nl-l {
  color: var(--red);
  text-shadow: 0 0 20px var(--red-glow);
}

/* Links desktop */
.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  color: rgba(255, 255, 255, .65);
  text-decoration: none;
  font-size: .82rem;
  font-weight: 500;
  letter-spacing: .08em;
  text-transform: uppercase;
  transition: color .2s;
  position: relative;
  padding-bottom: 2px;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--red);
  transition: width .3s;
}

.nav-links a:hover {
  color: white;
}

.nav-links a:hover::after {
  width: 100%;
}

/* CTA */
.nav-cta {
  background: var(--red);
  color: white;
  border: none;
  padding: .6rem 1.6rem;
  font-family: var(--fb);
  font-weight: 600;
  font-size: .82rem;
  letter-spacing: .06em;
  cursor: pointer;
  transition: all .25s;
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
}

.nav-cta:hover {
  background: var(--red2);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px var(--red-glow);
}

/* Burger */
.nav-burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  padding: 8px;
  background: none;
  border: none;
  width: 38px;
  height: 38px;
}

.nav-burger span {
  display: block;
  width: 22px;
  height: 2px;
  background: white;
  border-radius: 2px;
  transition: all .35s cubic-bezier(.16, 1, .3, 1);
  transform-origin: center;
}

.nav-burger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav-burger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.nav-burger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 900px) {

  .nav-links,
  .nav-cta {
    display: none;
  }

  .nav-burger {
    display: flex;
  }
}
</style>

<!-- ✅ Estilos globales (sin scoped) para los elementos en Teleport -->
<style>
/* Overlay */
.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: 998;
  background: rgba(0, 0, 0, .65);
  backdrop-filter: blur(4px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Drawer */
.nav-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(340px, 85vw);
  z-index: 999;
  background: var(--navy2);
  border-left: 1px solid rgba(30, 79, 216, .2);
  display: flex;
  flex-direction: column;
  box-shadow: -20px 0 60px rgba(0, 0, 0, .6);
  overflow-y: auto;
}

.drawer-enter-active {
  transition: transform .4s cubic-bezier(.16, 1, .3, 1);
}

.drawer-leave-active {
  transition: transform .3s cubic-bezier(.4, 0, 1, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}

/* Cabecera */
.drawer-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 1.8rem;
  border-bottom: 1px solid rgba(30, 79, 216, .15);
  flex-shrink: 0;
}

.drawer-logo {
  font-family: var(--fd);
  font-size: 1.5rem;
  letter-spacing: .08em;
}

.drawer-close {
  background: rgba(217, 31, 42, .1);
  border: 1px solid rgba(217, 31, 42, .3);
  color: var(--red);
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .2s;
}

.drawer-close:hover {
  background: var(--red);
  color: white;
}

/* Links */
.drawer-links {
  list-style: none;
  padding: 1.5rem 0;
  flex: 1;
}

.drawer-item {
  animation: slideIn .4s ease both;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.drawer-item a {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.8rem;
  color: rgba(255, 255, 255, .7);
  text-decoration: none;
  font-family: var(--fd);
  font-size: 1.6rem;
  letter-spacing: .06em;
  border-left: 2px solid transparent;
  transition: all .25s;
}

.drawer-item a:hover {
  color: white;
  border-left-color: var(--red);
  background: rgba(217, 31, 42, .05);
  padding-left: 2.2rem;
}

.drawer-num {
  font-family: var(--fm);
  font-size: .6rem;
  color: rgba(30, 79, 216, .5);
  letter-spacing: .15em;
  margin-top: .3rem;
}

.drawer-arr {
  margin-left: auto;
  font-size: 1rem;
  color: rgba(30, 79, 216, .3);
  transition: all .25s;
}

.drawer-item a:hover .drawer-arr {
  color: var(--red);
  transform: translateX(4px);
}

/* Footer */
.drawer-footer {
  padding: 1.5rem 1.8rem;
  border-top: 1px solid rgba(30, 79, 216, .15);
  display: flex;
  flex-direction: column;
  gap: .8rem;
  flex-shrink: 0;
}

.drawer-cta {
  display: block;
  text-align: center;
  background: var(--red);
  color: white;
  text-decoration: none;
  padding: .9rem;
  font-family: var(--fb);
  font-weight: 600;
  font-size: .88rem;
  letter-spacing: .05em;
  transition: all .25s;
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
}

.drawer-cta:hover {
  background: var(--red2);
}

.drawer-wa {
  display: block;
  text-align: center;
  background: rgba(37, 211, 102, .1);
  border: 1px solid rgba(37, 211, 102, .3);
  color: #25D366;
  text-decoration: none;
  padding: .9rem;
  font-family: var(--fb);
  font-weight: 600;
  font-size: .88rem;
  transition: all .25s;
}

.drawer-wa:hover {
  background: #25D366;
  color: white;
}
</style>