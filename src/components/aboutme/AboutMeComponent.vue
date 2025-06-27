<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="aboutme">
    <img src="../../assets/images/about-logo.svg" alt="KevinMuellerDev-Logo" />
    <div class="about-text-container">
      <div class="about-text-subcontainer">
        <span>{{ t('aboutme.about') }}</span>
        <h3>{{ t('aboutme.headline1') }}<br />{{ t('aboutme.headline2') }}</h3>
      </div>
      <span>{{ t('aboutme.slogan') }}</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  min-height: 50rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.125rem;
  transition: all 0.5s ease;

  img {
    max-width: 35.625rem;
  }

  .about-text-container {
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 9.75rem;

    .about-text-subcontainer {
      span {
        font: 400 1rem Inter;
        color: var(--kmd-c-accent);
      }

      h3 {
        font: 400 3.125rem Michroma;
        color: var(--kmd-c-text-light);
      }
    }
  }
}
</style>
