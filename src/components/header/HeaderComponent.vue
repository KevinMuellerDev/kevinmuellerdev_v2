<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ButtonTransparent from '@/components/buttons/ButtonTransparent.vue'
import HeaderMobileComponent from './header-mobile/HeaderMobileComponent.vue'

const { t } = useI18n()

const handleContact = () => {
  console.log('clicked')
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header>
    <div class="header-left">
      <img class="" src="../../assets/images/kevin.svg" alt="logo" />
      <nav class="nav-desktop">
        <a @click.prevent="scrollToSection('aboutme')" class="nav-link">{{ t('navbar.about') }}</a>
        <a @click.prevent="scrollToSection('expertise')" class="nav-link">{{
          t('navbar.expertise')
        }}</a>
        <a @click.prevent="scrollToSection('portfolio')" class="nav-link">{{
          t('navbar.portfolio')
        }}</a>
        <a @click.prevent="scrollToSection('aboutme')" class="nav-link">{{
          t('navbar.testimonials')
        }}</a>
      </nav>
    </div>
    <ButtonTransparent class="nav-desktop" :text="t('button.contactme')" @click="handleContact" />
    <HeaderMobileComponent />
  </header>
</template>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 1.75rem;
  min-height: 38px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 0 8.125rem;
  align-items: center;
  z-index: 1;

  .header-left {
    display: flex;
    gap: 3.75rem;

    .nav-desktop {
      display: flex;
      gap: 3.125rem;
    }
  }
}

@media (width<1150px) {
  .nav-desktop {
    display: none !important;
  }

  header {
    padding: 0 2.125rem !important;
  }
}
</style>
