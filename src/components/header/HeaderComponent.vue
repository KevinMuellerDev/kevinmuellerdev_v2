<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import ButtonTransparent from '@/components/buttons/ButtonTransparent.vue'

const { t } = useI18n()

const handleContact = () => {
  console.log('clicked')
}
</script>

<template>
  <header>
    <div class="header-left">
      <img class="" src="../../assets/images/kevin.svg" alt="">
      <nav>
        <RouterLink class="nav-link">{{ t('navbar.about') }}</RouterLink>
        <RouterLink class="nav-link">{{ t('navbar.expertise') }}</RouterLink>
        <RouterLink class="nav-link">{{ t('navbar.portfolio') }}</RouterLink>
        <RouterLink class="nav-link">{{ t('navbar.testimonials') }}</RouterLink>
      </nav>
    </div>
    <ButtonTransparent :text="'Contact Me'" @click="handleContact" />
  </header>
</template>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 1.75rem;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;

  .header-left {
    display: flex;
    gap: 60px;

    nav {
      display: flex;
      gap: 50px;
      color: var(--kmd-c-);
    }
  }

}
</style>
