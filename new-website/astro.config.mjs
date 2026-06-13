// @ts-check
import { defineConfig } from 'astro/config';

// Static-first per §10/§11: zero-JS by default, interactivity as islands later.
export default defineConfig({
  site: 'https://www.koshax.com',
  // Legacy URLs from the old React site → their new homes. For static output
  // Astro emits meta-refresh pages at the old paths. (/care.html is handled
  // by a static file in public/ since it's a literal .html path.)
  redirects: {
    '/privacy-policy': '/privacy',
    '/terms-and-conditions': '/terms',
    '/pricing': '/',
    '/philosophy': '/',
  },
  // <html lang="en-IN"> is set in the Layout (§10 SEO).
});
