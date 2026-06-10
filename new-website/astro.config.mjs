// @ts-check
import { defineConfig } from 'astro/config';

// Static-first per §10/§11: zero-JS by default, interactivity as islands later.
export default defineConfig({
  site: 'https://kosha.app',
  // <html lang="en-IN"> is set in the Layout (§10 SEO).
});
