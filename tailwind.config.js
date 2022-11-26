/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
export const content = [
  './node_modules/flowbite-react/**/*.js',
  './pages/**/*.{ts,tsx}',
  './public/**/*.html',
];
export const plugins = [require('flowbite/plugin')];
export const theme = {};
