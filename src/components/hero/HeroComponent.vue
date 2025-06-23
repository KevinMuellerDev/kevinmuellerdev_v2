<script setup lang="ts">
import SliderComponent from '@/components/slider/SliderComponent.vue'
import HeroHighlightComponent from '@/components/hero/herohighlight/HeroHighlightComponent.vue'
</script>

<template>
    <section>
        <HeroHighlightComponent />
        <SliderComponent />
    </section>
</template>

<style lang="scss" scoped>
section {
    position: relative;
    background: url('@/assets/images/dummyheader.png');
    width: 100%;
    height: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        height: 200px;
        z-index: 10;
        width: 100%;
        background: linear-gradient(0deg,
                rgba(34, 34, 34, 1) 0%,
                rgba(34, 34, 34, 0.82) 43%,
                rgba(34, 34, 34, 0.63) 52%,
                rgba(34, 34, 34, 0.48) 60%,
                rgba(34, 34, 34, 0.33) 77%,
                rgba(34, 34, 34, 0) 100%);
    }


}
</style>