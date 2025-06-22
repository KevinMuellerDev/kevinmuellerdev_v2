<script setup lang="ts">
const props = defineProps(['text'])
</script>

<template>
    <div class="btn-transparent">
        {{ props.text }}
        <div class="arrow" />
    </div>
</template>

<style scoped lang="scss">
.btn-transparent {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.25rem;
    color: var(--kmd-c-text-light);
    font: 500 1rem Inter;
    border: 1px solid var(--kmd-c-divider-full);
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.5s ease;
    background: linear-gradient(to left, transparent 50%, var(--kmd-c-button-light) 50%) right;
    background-size: 200% 100%;
    user-select: none;
    -webkit-user-select: none;

    &:hover {
        color: var(--kmd-c-background);
        background-position: left;

        .arrow {
            background-image: url('@/components/icons/arrow-dark.png');
        }
    }

    .arrow {
        background-image: url('@/components/icons/arrow-light.png');
        width: 16px;
        object-fit: cover;
        height: 13px;
        transition: all 0.5s ease;
    }
}
</style>