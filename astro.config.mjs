// @ts-check
import { defineConfig } from 'astro/config';


import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  // Deine GitHub Pages URL (ohne den Unterordner am Ende)
  site: 'https://abdulkhalek-omar.github.io',

  // Der Name deines Repositorys mit Schrägstrichen davor und danach
  base: '/friseur-salon/',

  // Verwende den Netlify Adapter für die Bereitstellung auf Netlify
  output: 'server',
  adapter: netlify()
});