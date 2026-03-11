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
</style>
