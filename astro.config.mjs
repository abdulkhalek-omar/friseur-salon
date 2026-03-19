// @ts-check
import { defineConfig } from 'astro/config';


import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://friseur-salon-mh.netlify.app',
  output: 'server',
  adapter: netlify()
});