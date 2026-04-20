import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,mdx,md}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
