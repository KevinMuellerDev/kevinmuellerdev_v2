<script setup lang="ts">
import { scrollToSection } from '@/utils/scrollToSection';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();


const routingManager = (path: string) => {
  if (route.path === '/') {
    scrollToSection(path)
  } else {
    router.push(`/#${path}`)
  }
}
</script>

<template>
  <footer>
    <div class="footer-top-container">
      <div class="footer-contact-container">
        <img class="" src="../../assets/images/kevin.svg" alt="logo" />
        <div class="footer-contact-text">
          <span class="footer-head">Contact Information:</span>
          <a href="mailto:info@kevin-mueller-dev.de">info@kevin-mueller-dev.de</a>
          <a href="tel:+4915153962240">+49 151 53962240</a>
        </div>
      </div>
      <div class="footer-links-container">
        <span class="footer-head">Links:</span>
        <div>

          <a @click.prevent="routingManager('aboutme')">{{ t('navbar.about') }}</a>
          <a @click.prevent="routingManager('expertise')">{{ t('navbar.expertise') }}</a>
          <a @click.prevent="routingManager('portfolio')">{{ t('navbar.portfolio') }}</a>
          <a @click.prevent="routingManager('aboutme')">{{ t('navbar.testimonials') }}</a>
          <RouterLink class="privacy" to="/privacypolicy">Privacy policy</RouterLink>
          <RouterLink to="/imprint">Impressum</RouterLink>
        </div>

      </div>
    </div>
    <div class="footer-bottom-container">
      <span>Copyright © 2025 KevinMuellerDev. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  width: 100%;
  max-width: 1440px;
  padding: 0 32px;
}

.footer-top-container {
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--kmd-c-border);
}

.footer-head {
  color: var(--kmd-c-text-light);
  margin-bottom: 0.75rem;
}

.footer-contact-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 66px;

  .footer-contact-text {
    display: flex;
    flex-direction: column;
  }
}

.footer-links-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}

.footer-bottom-container {
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
}

.privacy {
  margin-top: 0.25rem;
}
</style>