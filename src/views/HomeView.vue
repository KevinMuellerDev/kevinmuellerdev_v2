<script setup lang="ts">
import HeroComponent from '@/components/hero/HeroComponent.vue'
import AboutMeComponent from '@/components/aboutme/AboutMeComponent.vue'
import ExpertiseComponent from '@/components/expertise/ExpertiseComponent.vue'
import PortfolioComponent from '@/components/portfolio/PortfolioComponent.vue'
// import TestimonialsComponent from '@/components/testimonials/TestimonialsComponent.vue'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { scrollToSection } from '@/utils/scrollToSection'
import ContactComponent from '@/components/contact/ContactComponent.vue'
const route = useRoute()

onMounted(async () => {
  scrollToSection(route.hash.slice(1))
})
</script>

<template>
  <main>
    <HeroComponent />
    <AboutMeComponent />
    <ExpertiseComponent />
    <PortfolioComponent />
    <!-- <TestimonialsComponent /> -->
    <ContactComponent />
  </main>
</template>
