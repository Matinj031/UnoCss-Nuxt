# Nuxt Color Mode with UnoCSS Integration

A modern, lightweight implementation of dark and light theme switching in Nuxt 3 applications using the Nuxt Color Mode module with UnoCSS integration.

![Nuxt Color Mode with UnoCSS](https://img.shields.io/badge/Nuxt%203-Color%20Mode%20+%20UnoCSS-00DC82)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Features

- 🌓 Seamless dark and light theme switching
- 🎨 UnoCSS integration for utility-first styling
- 💾 Persistent color mode storage
- 🔄 System preference detection
- 🚀 Fully optimized for performance
- 📱 Responsive design support
- ♿ Accessibility compliant

## Demo

See the live demo [here](#) (replace with your demo URL)

## Prerequisites

- Node.js (v16 or newer)
- pnpm, npm, yarn, or bun

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nuxt-color-mode-unocss.git
cd nuxt-color-mode-unocss
```

2. Install dependencies:

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install

# Or using bun
bun install
```

## Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## How It Works

### Core Technologies

- **Nuxt 3**: The intuitive Vue framework
- **Nuxt Color Mode**: Official module for color mode switching
- **UnoCSS**: The instant on-demand atomic CSS engine

### Integration Approach

This project demonstrates how to:

1. Set up Nuxt Color Mode with UnoCSS
2. Create dynamic theme switching
3. Use UnoCSS utility classes with color mode
4. Persist user preferences

## Implementation Guide

### 1. Install Required Packages

```bash
pnpm add -D @nuxtjs/color-mode @unocss/nuxt
```

### 2. Configure Nuxt

Add the modules to `nuxt.config.ts`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light',    // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
})
```

### 3. Configure UnoCSS

Create a `uno.config.ts` file:

```ts
import { defineConfig } from 'unocss'
import presetMini from '@unocss/preset-mini'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetMini(),
    presetAttributify(),
    presetIcons()
  ],
  theme: {
    colors: {
      // Define your theme colors here
      primary: {
        light: '#4F46E5', // for light mode
        dark: '#818CF8'   // for dark mode
      }
    }
  },
  shortcuts: {
    // Create theme-aware shortcuts
    'bg-base': 'dark:bg-dark-900 bg-light-100',
    'text-base': 'dark:text-light-100 text-dark-900',
  }
})
```

### 4. Create a Color Mode Toggle Component

Create a component to toggle between modes:

```vue
<!-- components/ColorModeToggle.vue -->
<template>
  <button @click="toggleColorMode" class="color-mode-toggle" aria-label="Toggle dark/light mode">
    <div v-if="$colorMode.value === 'dark'" class="i-tabler:moon-filled" />
    <div v-else class="i-tabler:sun-filled" />
  </button>
</template>

<script setup>
const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
```

### 5. Use in Your Application

```vue
<!-- app.vue -->
<template>
  <div class="bg-base text-base min-h-screen transition-colors duration-300">
    <header class="p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">My App</h1>
      <ColorModeToggle />
    </header>
    <main class="p-4">
      <NuxtPage />
    </main>
  </div>
</template>
```

## Customization

You can customize the color scheme by:

1. Modifying the `uno.config.ts` file to include your theme colors
2. Creating custom shortcuts for common color mode patterns
3. Using CSS variables for more complex theming needs

## Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
