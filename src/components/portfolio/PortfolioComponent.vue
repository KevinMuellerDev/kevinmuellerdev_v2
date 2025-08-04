<script setup lang="ts">
import ButtonTransparent from '../buttons/ButtonTransparent.vue'
import ButtonWhite from '../buttons/ButtonWhite.vue'
import { useI18n } from 'vue-i18n'
import portfolioData from '@/assets/projects.json'
const { t } = useI18n()

const redirectTo = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <section id="portfolio">
    <div class="section-header">
      <h3>{{ t('portfolio.header.headline') }}</h3>
      <!-- <div class="section-header-cta">
        <span>{{ t('portfolio.header.cta') }}</span>
        <ButtonTransparent :text="t('button.viewmore')" />
      </div> -->
    </div>
    <div class="article-container">
      <article v-for="(project, index) in portfolioData" :key="index">
        <img :src="project.image" alt="" />
        <div class="article-text-container">
          <div class="article-text-headline-container">
            <h5>{{ project.title }}</h5>
            <span>{{ project.stack }}</span>
          </div>
          <span>{{ t(project.description) }}</span>
          <div class="article-button-container">
            <ButtonWhite text="Live Test" @click="redirectTo(project.liveUrl)" />
            <ButtonTransparent text="GitHub" @click="redirectTo(project.githubUrl)" />
            <ButtonTransparent v-if="project.githubUrl2" text="GitHub Backend"
              @click="redirectTo(project.githubUrl2)" />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  min-height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10rem 0 0;
  gap: 3.75rem;
  transition: all 0.5s ease;

  .section-header {
    display: flex;
    width: 100%;
    padding: 0 20px;
    justify-content: center;

    h3 {
      font: 400 3.125rem Michroma;
      color: var(--kmd-c-text-light);
      line-height: 3.75rem;
    }

    .section-header-cta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1.25rem;
    }
  }

  .article-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    padding: 0 20px;

    &:last-child {
      padding-bottom: 20px;
    }

    article {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 1.25rem;
      width: 100%;
      border-bottom: 0.5px solid var(--kmd-c-border);
      padding: 30px 0;

      img {
        width: 100%;
        max-width: 545px;
        max-height: 320px;
        border-radius: 0.5rem;
        border: 0.5px solid var(--kmd-c-border);
      }

      .article-text-container {
        display: flex;
        flex-direction: column;
        gap: 49px;
        max-width: 515px;
        width: 100%;

        .article-text-headline-container {
          display: flex;
          flex-direction: column-reverse;
          gap: 1.25rem;

          span {
            font: 400 1rem Roboto;
            color: var(--kmd-c-accent);
          }

          h5 {
            font: 400 1.75rem Michroma;
            color: var(--kmd-c-text-light);
            line-height: 26px;
          }
        }

        .article-button-container {
          display: flex;
          gap: 1rem;
        }
      }
    }
  }
}

@media (width<1150px) {
  article {
    flex-direction: column;
  }
}
</style>
