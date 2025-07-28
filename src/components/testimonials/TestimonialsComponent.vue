<script setup lang="ts">
import Testimonial from '@/components/testimonials/Testimonial.vue'
import ButtonTransparent from '../buttons/ButtonTransparent.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template>
  <section id="testimonials">
    <div class="testimonials-head">
      <h3>What My Clients Say</h3>
      <ButtonTransparent text="View more" />
    </div>
    <div>
      <Testimonial />
    </div>
  </section>
</template>
<style lang="css" scoped>
#testimonials {
  display: flex;
  justify-content: space-between;
  max-width: 1240px;
  padding: 130px 0;
}

.testimonials-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 117px;
  max-width: 380px;
  h3 {
    font: 400 3.125rem Michroma;
    color: var(--kmd-c-text-light);
  }
}
</style>
