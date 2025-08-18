<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
    <HeroSection />
    <FeaturesSection />
    <CallToActionSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '../../components/views/pub/home/HeroSection.vue';
import FeaturesSection from '../../components/views/pub/home/FeaturesSection.vue';
import CallToActionSection from '../../components/views/pub/home/CallToActionSection.vue';
</script>

<style scoped>
/* No se necesitan estilos específicos aquí */
</style>
