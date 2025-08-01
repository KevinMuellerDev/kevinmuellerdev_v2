<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { sendMessage } from '@/utils/sendMail'
import ButtonWhite from '../buttons/ButtonWhite.vue'
const { t } = useI18n()

//TODO: Test mobile responsiveness and switching between different sizes.

const formRef = ref<HTMLFormElement | null>(null)
const formData = ref({
  to_name: 'Kevin Mueller',
  name: '',
  email: '',
  message: '',
})

const loading = ref(false)
const errorMsg = ref('')

const showOverlay = ref(false)
const overlayText = ref(t('email.sending'))

const validateForm = () => {
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    errorMsg.value = t('email.fillAll')
    return false
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errorMsg.value = t('email.fillEmail')
    return false
  }
  errorMsg.value = ''
  return true
}

const handleSubmit = async () => {
  if (!validateForm()) return

  loading.value = true
  showOverlay.value = true
  overlayText.value = t('email.sending')

  const result = await sendMessage(formData.value)
  loading.value = false

  if (result) {
    overlayText.value = t('email.success')
    formData.value = { to_name: 'Kevin Mueller', name: '', email: '', message: '' }
  } else {
    overlayText.value = t('email.failed')
  }

  setTimeout(() => {
    showOverlay.value = false
  }, 2000)
}

const triggerSubmit = () => {
  if (formRef.value) {
    formRef.value.requestSubmit()
  }
}
</script>

<template>
  <section id="contact">
    <div class="contact-wrapper">
      <img class="cube-top" src="../../assets/images/contact-cube-top-left.svg" alt="" />
      <div class="contact-container">
        <h3>
          <p>Ready to Collaborate?</p>
          Let's Turn Your Ideas into reality!
        </h3>
        <form ref="formRef" @submit.prevent="handleSubmit">
          <input placeholder="Your Name..." v-model="formData.name" type="text" />
          <input placeholder="Your Email..." v-model="formData.email" type="email" />
          <textarea
            maxlength="500"
            placeholder="Deine Nachricht..."
            v-model="formData.message"
          ></textarea>
          <ButtonWhite :disabled="loading" @click="triggerSubmit" text="Contact Me" />
        </form>

        <div class="error-message">
          {{ errorMsg || ' ' }}
        </div>

        <div v-if="showOverlay" class="modal-loading">
          <div id="spinner"></div>
          <p class="overlay-text" style="margin-top: 120px">{{ overlayText }}</p>
        </div>
      </div>
      <img class="cube-bottom" src="../../assets/images/contact-cube-bottom-right.svg" alt="" />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding: 0 2rem;
  min-height: 50rem;
  width: 100%;
  transition: all 0.5s ease;
  margin: 2rem 0;
  border-radius: 10px;

  .contact-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 3.125rem;
    background-color: var(--kmd-c-background-light);
    width: 100%;

    .cube-top {
      position: absolute;
      top: 1rem;
      left: 2rem;
    }

    .cube-bottom {
      position: absolute;
      bottom: 1rem;
      right: 2rem;
    }

    .contact-container {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      padding: 8rem 2rem;

      h3 {
        max-width: 733px;
        text-align: center;
        color: var(--kmd-c-text-light);
        font: 400 2.5rem michroma;
      }

      form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        input {
          background-color: transparent;
          width: 100%;
          max-width: 733px;
          border-style: solid;
          border-width: 0 0 1px;
          height: 2rem;
          caret-color: var(--kmd-c-text-light-opacity-60);
          font-size: 1.25rem;
          color: var(--kmd-c-text-light-opacity-60);

          &:focus-visible {
            outline: 0;
            border-color: white;
          }
        }

        textarea {
          background-color: transparent;
          width: 100%;
          max-width: 733px;
          border-style: solid;
          border-width: 0 0 1px;
          min-height: 6rem;
          resize: vertical;
          caret-color: var(--kmd-c-text-light-opacity-60);
          font-size: 1.25rem;
          color: var(--kmd-c-text-light-opacity-60);
          padding: 0.5rem 0;

          &:focus-visible {
            outline: 0;
            border-color: white;
          }
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px #222222fa inset !important;
          -webkit-text-fill-color: var(--kmd-c-text-light-opacity-60) !important;
        }
      }
    }
  }

  .overlay-text {
    margin-top: 120px;
    color: var(--kmd-c-text-light);
  }

  .modal-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.7);

    p {
      margin-top: 120px;
      font-size: 1.75em;
    }

    #spinner {
      position: absolute;
      --c: no-repeat linear-gradient(var(--kmd-c-accent) 0 0);
      background:
        var(--c), var(--c), var(--c), var(--c), var(--c), var(--c), var(--c), var(--c), var(--c);
      background-size: 16px 16px;
      animation:
        l32-1 1s infinite,
        l32-2 1s infinite;
    }

    @keyframes l32-1 {
      0%,
      100% {
        width: 45px;
        height: 45px;
      }
      35%,
      65% {
        width: 65px;
        height: 65px;
      }
    }

    @keyframes l32-2 {
      0%,
      40% {
        background-position:
          0 0,
          0 50%,
          0 100%,
          50% 100%,
          100% 100%,
          100% 50%,
          100% 0,
          50% 0,
          50% 50%;
      }
      60%,
      100% {
        background-position:
          0 50%,
          0 100%,
          50% 100%,
          100% 100%,
          100% 50%,
          100% 0,
          50% 0,
          0 0,
          50% 50%;
      }
    }
  }

  .error-message {
    min-height: 1.5em;
    color: #ff6b6b;
    margin-top: 1rem;
    transition: opacity 0.2s;
  }
}
</style>
