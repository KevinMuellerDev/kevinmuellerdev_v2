<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <header>
    <div class="header-left">
      <img class="" src="../../assets/images/kevin.svg" alt="">
      <nav>
        <RouterLink>{{ t('navbar.about') }}</RouterLink>
        <RouterLink>{{ t('navbar.expertise') }}</RouterLink>
        <RouterLink>{{ t('navbar.portfolio') }}</RouterLink>
        <RouterLink>{{ t('navbar.testimonials') }}</RouterLink>
      </nav>
    </div>

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
