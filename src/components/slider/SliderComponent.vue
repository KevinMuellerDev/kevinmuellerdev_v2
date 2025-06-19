<script setup lang="ts">
import skillData from './skills.json'
const skills = skillData
</script>

<template>
    <div class="skills-container">
        <div class="skills-slider">
            <div class="skills-track">
                <div v-for="skill in skills" :key="skill">
                    <img :src="skill.path" alt="skill logo" />
                    <span>{{ skill.name }}</span>
                </div>
                <div v-for="skill in skills" :key="'loop-' + skill">
                    <img :src="skill.path" alt="logo duplicate" />
                    <span>{{ skill.name }}</span>
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
    z-index: 100;
    padding: 1rem 0;

    .skills-slider {
        width: 100%;
        overflow: hidden;

        .skills-track {
            display: flex;
            width: max-content;
            animation: scroll 30s linear infinite;
            align-items: center;

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;


                span {
                    color: transparent;
                    transition: all 200ms ease-in-out;
                    user-select: none;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    font: 400 1rem roboto;

                }


                img {
                    max-height: 6.25rem;
                    min-height: 3.75rem;
                    margin: 0 2.625rem;
                    padding: 1rem 0;
                    transition: transform 275ms ease;

                    &:hover {
                        transform: scale(1.3);
                    }

                    &:hover~span {
                        color: var(--kmd-c-text-light);
                    }
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