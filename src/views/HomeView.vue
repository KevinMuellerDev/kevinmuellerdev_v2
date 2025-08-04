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
import { useHead } from '@unhead/vue'

const route = useRoute()

useHead({
  title: 'Home | KevinMuellerDev',
  meta: [
    { name: 'description', content: 'Kevin Müller - Fullstack Developer bei KevinMuellerDev. Spezialisiert auf moderne Frontend- und Backend-Technologien für effiziente Webprojekte.' },
    { name: 'creator', content: 'https://www.kevin-mueller-dev.de' },
    { name: 'keywords', content: 'Fullstack Developer, Kevin Müller, KevinMuellerDev, Webentwicklung, Softwareentwicklung, Vue.js, Angular, React, TypeScript, JavaScript, HTML, CSS, Django, Python, REST API, Firebase, PostgreSQL, Redis, Docker, Git, moderne Webanwendungen, Frontend, Backend, API-Entwicklung, skalierbare Systeme, Single Page Applications, Web Apps, Cloud Lösungen, Freelancer Webentwicklung, professionelle Softwareentwicklung' },
    { property: 'og:url', content: 'https://www.kevin-mueller-dev.de' },
    { property: 'og:title', content: 'Home | KevinMuellerDev' },
    { property: 'og:site_name', content: 'KevinMuellerDev' },
    { property: 'og:locale', content: 'de' },
    { property: 'og:description', content: 'Kevin Müller - Fullstack Developer bei KevinMuellerDev. Spezialisiert auf moderne Frontend- und Backend-Technologien für effiziente Webprojekte.' },
    { property: 'og:image', content: '/favicon.png' },
    { property: 'og:image:width', content: '226' },
    { property: 'og:image:height', content: '220' },
    { property: 'og:type', content: 'website' },
    { property: 'twitter:title', content: 'Home | KevinMuellerDev' },
    { property: 'twitter:description', content: 'Kevin Müller - Fullstack Developer bei KevinMuellerDev. Spezialisiert auf moderne Frontend- und Backend-Technologien für effiziente Webprojekte.' },
    { property: 'twitter:image', content: '/favicon.png' },
    { property: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.kevin-mueller-dev.de' },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
  ]
})

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
