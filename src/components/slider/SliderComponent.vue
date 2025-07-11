<script setup lang="ts">
import type { Skills } from '@/types/skills'
import skillData from './skills.json'
const skills: Skills[] = skillData
</script>

<template>
  <div class="skills-container" id="slider">
    <div class="skills-slider">
      <div class="skills-track">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <div class="skill-inner">
            <img :src="skill.path" alt="skill logo" />
            <span>{{ skill.name }}</span>
          </div>
        </div>
        <div v-for="skill in skills" :key="'loop-' + skill.name" class="skill-item">
          <div class="skill-inner">
            <img :src="skill.path" alt="logo duplicate" />
            <span>{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills-container {
  position: absolute;
  left: 0;
  bottom: -2rem;
  overflow: hidden;
  width: 100%;
  z-index: 10;
  padding: 1rem 0;
  transition: all 300ms ease;

  .skills-slider {
    width: 100%;
    overflow: hidden;

    .skills-track {
      display: flex;
      width: max-content;
      animation: scroll 30s linear infinite;
      align-items: center;

      .skill-item {
        flex: 0 0 auto;
        width: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 2rem;
        overflow: hidden;
        position: relative;

        .skill-inner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: transform 275ms ease;

          img {
            max-height: 3.75rem;
            min-height: 3.75rem;
            transition: transform 275ms ease;
          }

          span {
            color: transparent;
            transition: all 200ms ease-in-out;
            font: 400 0.9rem roboto;
            user-select: none;
          }
        }

        &:hover .skill-inner {
          transform: scale(1.2);
        }

        &:hover span {
          color: var(--kmd-c-text-light);
        }
      }
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
