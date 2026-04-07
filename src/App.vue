<template>
  <div id="app">
    <!-- Layout -->
    <NavBar />

    <!-- Secciones -->
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <AboutSection />
    <FleetSection />
    <CoverageSection />
    <ContactSection />

    <!-- Layout -->
    <FooterSection />

    <!-- Botón flotante WhatsApp -->
    <a href="https://wa.me/51999713436?text=Hola%20Turismo%20WJL%2C%20quisiera%20informaci%C3%B3n%20sobre%20sus%20servicios."
      class="wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path
          d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L.057 23.082a.75.75 0 0 0 .916.899l5.453-1.429A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.699-.505-5.25-1.385l-.375-.217-3.884 1.018 1.037-3.77-.235-.386A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    </a>
  </div>
</template>

<script setup>
// Layout
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
// Secciones
import HeroSection from '@/components/sections/HeroSection.vue'
import StatsSection from '@/components/sections/StatsSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import FleetSection from '@/components/sections/FleetSection.vue'
import CoverageSection from '@/components/sections/CoverageSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'

// Composable global de animaciones scroll
import { useScrollAnimation } from '@/composables/useScrollAnimation.js'
useScrollAnimation()
</script>

<style>
/* Estilos globales cargados una sola vez */
@import '@/assets/main.css';

/* ── Botón flotante WhatsApp ── */
.wa-float {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  width: 56px;
  height: 56px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, .5);
  transition: all .3s;
}

.wa-float svg {
  width: 28px;
  height: 28px;
  color: white;
}

.wa-float:hover {
  background: #1ebe5d;
  transform: scale(1.1);
  box-shadow: 0 6px 28px rgba(37, 211, 102, .6);
}

.wa-float::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #25D366;
  animation: pulse-wa 2s ease-out infinite;
  z-index: -1;
}

@keyframes pulse-wa {
  0% {
    transform: scale(1);
    opacity: .6;
  }

  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}
</style>