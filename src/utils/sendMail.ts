import emailjs from '@emailjs/browser'

type FormData = Record<string, string>

export const sendMessage = async (formData: FormData) => {
  try {
    const response = await emailjs.send(
      'service_zd5la5h',
      'template_9gvx7mw',
      formData,
      'PkIjDvptbNUNsZb5y',
    )
    return true
  } catch (error) {
    console.error('Error:', error)
    return false
  }
}
