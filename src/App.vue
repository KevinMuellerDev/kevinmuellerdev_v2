<script setup lang="ts">
//import { RouterLink, RouterView } from 'vue-router'
//import { useI18n } from 'vue-i18n'
//const { t } = useI18n()
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import FooterComponent from './components/footer/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped></style>
