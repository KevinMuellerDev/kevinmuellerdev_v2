# Kevin Mueller Dev Portfolio

This is the source code for [Kevin Mueller's](https://kevinmueller.dev) personal developer portfolio.  
It is a modern, modular Vue 3 application with TypeScript, SCSS, and EmailJS integration for contact functionality.

## Features

- ✨ **Vue 3 + TypeScript**: Modern, type-safe frontend
- 🎨 **SCSS Styling**: Custom, responsive design
- 📬 **Contact Form**: EmailJS-powered, with validation and feedback overlay
- 🧩 **Modular Components**: Reusable UI building blocks
- ⚡ **Fast & Responsive**: Optimized for all devices

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
git clone https://github.com/kevinmuellerdev/kevinmuellerdev_v2.git
cd kevinmuellerdev_v2
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view the app.

### Build for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
  assets/         # Images, fonts, etc.
  components/     # Vue components (contact, buttons, base, etc.)
  composables/    # Reusable logic (e.g. useContactForm)
  utils/          # Utility functions (e.g. sendMail.ts)
  App.vue
  main.ts
```

## Contact Form

- Uses [EmailJS](https://www.emailjs.com/) for sending messages.
- Includes validation, loading spinner, and error/success feedback.

## Customization

- Update your contact details in `src/components/contact/ContactComponent.vue`.
- Adjust styles in `src/assets` and component SCSS blocks.

## License

[MIT](LICENSE)

---

> Built with ❤️ by [Kevin Mueller](https://kevinmueller.dev)
