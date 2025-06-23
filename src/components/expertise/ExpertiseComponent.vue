<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Expertise } from '@/types/expertise';
const { t } = useI18n();

const expertise: Expertise[] = [
    {
        img: "/frontend-expertise.svg",
        headline: t('expertise.frontend.headline'),
        text: t('expertise.frontend.text')
    },
    {
        img: "/backend-expertise.svg",
        headline: t('expertise.backend.headline'),
        text: t('expertise.backend.text')
    },
    {
        img: "/api-expertise.svg",
        headline: t('expertise.api.headline'),
        text: t('expertise.api.text')
    },
    {
        img: "/deployment-expertise.svg",
        headline: t('expertise.deployment.headline'),
        text: t('expertise.deployment.text')
    }
]
</script>

<template>
    <section id="expertise">
        <h3>{{ t('expertise.headline') }}</h3>
        <div class="expertise-grid-container">
            <div v-for="(item, index) in expertise" :key="index" class="expertise-container-item">
                <img :src=item.img alt="">
                <div>
                    <h4>{{ item.headline }}</h4>
                    <span>{{ item.text }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
section {
    width: 100%;
    height: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.75rem;
    transition: all 0.5s ease;

    h3 {
        font: 400 3.125rem Michroma;
        color: var(--kmd-c-text-light);
        transition: all 0.5s ease;

    }

    .expertise-grid-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        gap: 1.25rem;
        padding: 0 20px;

        .expertise-container-item {
            display: flex;
            align-items: stretch;
            justify-content: stretch;
            gap: 2.5rem;
            padding: 1.25rem;
            border: 0.5px solid var(--kmd-c-border);
            border-radius: 10px;
            width: 100%;
            height: 292px;

            &:hover img {
                transform-style: preserve-3d;
                transform: perspective(8cm) rotateX(-10deg) rotateY(30deg);
            }

            img {
                width: 7.5rem;
                opacity: 0.5;
                transition: all 500ms ease;
            }

            div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                flex: 1;
                border-radius: 8px;
                padding: 30px;
                background-color: var(--kmd-c-background-light);

                h4 {
                    font: 400 20px Michroma;
                    color: var(--kmd-c-text-light);
                }
            }
        }
    }
}
</style>