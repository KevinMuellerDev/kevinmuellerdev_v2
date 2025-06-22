<script setup lang="ts"></script>
<template>
    <section>
        <img src="../../assets/images/about-logo.svg" alt="KevinMuellerDev-Logo">
        <div class="about-text-container">
            <div class="about-text-subcontainer">
                <span>ABOUT ME</span>
                <h3>A Passionate <br> Fullstack Developer</h3>
            </div>
            <span>I'm Kevin, a seasoned creative Fullstack Developer dedicated to transforming ideas into Reality. With
                my
                experience, I have honed my skills to deliver innovative and captivating Websites and Webapps that leave
                a lasting impression. Let's collaborate
                and bring your brand's story to life..</span>
        </div>
    </section>
</template>
<style scoped lang="scss">
section {
    height: 50rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.125rem;

    .about-text-container {
        max-width: 40rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 9.75rem;

        .about-text-subcontainer {
            span {
                font: 400 1rem Inter;
                color: var(--kmd-c-accent);
            }

            h3 {
                font: 400 3.125rem Michroma;
                color: var(--kmd-c-text-light);
            }

        }

    }
}
</style>