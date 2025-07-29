/**
 * The scrollToSection function scrolls smoothly to a specified section on the webpage based on the
 * provided element ID.
 * @param {string} id - The `id` parameter in the `scrollToSection` function is a string that
 * represents the id attribute of the HTML element you want to scroll to.
 */
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
