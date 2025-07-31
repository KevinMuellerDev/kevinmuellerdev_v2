<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t } = useI18n()
const isOpen = ref(false)
const menuOpen = ref(false)
const allowCloseAnimation = ref(false)

const changeSpanColorWhite: () => void = () => {
  document.getElementById('item1')!.style.background = 'white'
  document.getElementById('item2')!.style.background = 'white'
  document.getElementById('item3')!.style.background = 'white'
}

const changeSpanColorOriginal: () => void = () => {
  document.getElementById('item1')!.style.background = '#a3a3a3'
  document.getElementById('item2')!.style.background = '#a3a3a3'
  document.getElementById('item3')!.style.background = '#a3a3a3'
}

const toggleNavIcon = () => {
  if (!menuOpen.value) {
    allowCloseAnimation.value = true
    if (document.getElementById('slider') !== null)
      document.getElementById('slider')!.style.zIndex = '0'
    document.getElementById('mobile-menu')!.style.display = 'flex'
    document.getElementById('nav-icon4')!.style.position = 'fixed'
  } else {
    if (document.getElementById('slider') !== null)
      document.getElementById('slider')!.style.zIndex = '10'
    document.getElementById('mobile-menu')!.style.display = 'none'
    document.getElementById('nav-icon4')!.style.position = 'absolute'
  }
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    changeSpanColorWhite()
  } else {
    changeSpanColorOriginal()
  }
  menuOpen.value = !menuOpen.value
}

const menuClick = (section: string) => {
  scrollToSection(section)
  toggleNavIcon()
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <nav class="nav-mobile">
    <div id="nav-icon4" :class="{ open: isOpen }" @click="toggleNavIcon">
      <span id="item1"></span>
      <span id="item2"></span>
      <span id="item3"></span>
    </div>
  </nav>
  <div
    :class="menuOpen ? 'menu_open ' : allowCloseAnimation ? 'menu_close' : ''"
    class="menu-bar"
    id="mobile-menu"
  >
    <RouterLink @click="toggleNavIcon" to="/">Home</RouterLink>
    <a v-if="useRoute().path === '/'" @click.prevent="menuClick('aboutme')" class="nav-link">{{
      t('navbar.about')
    }}</a>
    <a v-if="useRoute().path === '/'" @click.prevent="menuClick('expertise')" class="nav-link">{{
      t('navbar.expertise')
    }}</a>
    <a v-if="useRoute().path === '/'" @click.prevent="menuClick('portfolio')" class="nav-link">{{
      t('navbar.portfolio')
    }}</a>
    <a v-if="useRoute().path === '/'" @click.prevent="menuClick('aboutme')" class="nav-link">{{
      t('navbar.testimonials')
    }}</a>
    <RouterLink class="privacy" @click="toggleNavIcon" to="/privacypolicy"
      >Privacy policy</RouterLink
    >
    <RouterLink @click="toggleNavIcon" to="/imprint">Impressum</RouterLink>
  </div>
</template>

<style scoped lang="scss">
nav {
  display: none;
  align-items: center;
  gap: 24px;
  padding-right: 32px;
  font-size: 1.25em;

  #nav-icon4 {
    position: absolute;
    width: 30px;
    right: 32px;
    height: 22.5px;
    z-index: 10000;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

  #nav-icon4 span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #a3a3a3;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  #nav-icon4 span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-icon4 span:nth-child(2) {
    top: 9px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-icon4 span:nth-child(3) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  #nav-icon4.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -2px;
    left: 8px;
  }

  #nav-icon4.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  #nav-icon4.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 19.5px;
    left: 8px;
  }
}

.menu_open {
  animation-duration: 0.5s;
  animation-name: menu-slidein-mobile;
  animation-fill-mode: forwards;
}

.menu-bar {
  position: fixed;
  right: 0;
  top: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  opacity: 0;

  a {
    font: 400 2rem roboto;
  }
}

.privacy {
  margin-top: 4rem;
}

@keyframes menu-slidein-mobile {
  0% {
    width: 0;
    opacity: 0;
    display: none;
  }

  30% {
    opacity: 0;
    display: none;
  }

  100% {
    width: 100%;
    opacity: 1;
    display: flex;
  }
}

.menu_close {
  animation-duration: 0.5s;
  animation-name: menu-slideout-mobile;
  animation-fill-mode: forwards;
}

@keyframes menu-slideout-mobile {
  0% {
    width: 100%;
    opacity: 1;
    display: flex;
  }

  50% {
    opacity: 0;
    display: none;
  }

  100% {
    width: 0;
    opacity: 0;
    display: none;
  }
}

@media (width<1150px) {
  .nav-mobile {
    display: flex !important;
  }
}
</style>
