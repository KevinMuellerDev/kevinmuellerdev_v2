<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ButtonWhite from '@/components/buttons/ButtonWhite.vue'
import ButtonTransparent from '@/components/buttons/ButtonTransparent.vue'

const { t } = useI18n()
</script>

<template>
  <div class="highlight-container">
    <div class="highlight-text-container">
      <div class="highlight-heading">
        <h1>{{ t('landing.profession') }}</h1>
        <h2>{{ t('landing.name') }}</h2>
      </div>
      <span class="highlight-text">{{ t('landing.slogan') }}</span>
    </div>
    <div class="highlight-button-container">
      <ButtonWhite :text="t('button.explore')" />
      <ButtonTransparent :text="t('button.hire')" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.highlight-container {
  display: flex;
  flex-direction: column;
  gap: 61px;
  transition: all 0.5s ease;

  .highlight-text-container {
    display: flex;
    flex-direction: column;
    gap: 81px;

    .highlight-heading {
      display: flex;
      flex-direction: column-reverse;
      user-select: none;
      -webkit-user-select: none;

      h1 {
        font: 400 4rem Michroma;
        color: var(--kmd-c-text-light);
        margin-top: -2rem;
      }

      h2 {
        font: bold 3.875rem Syne;
        color: var(--kmd-c-text-light);
      }
    }

    .highlight-text {
      width: 100%;
      max-width: 35rem;
    }
  }

  .highlight-button-container {
    display: flex;
    gap: 18px;
  }
}
</style>
