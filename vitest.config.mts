import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// Same `@/` alias as tsconfig.json paths.
export default defineConfig({ resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } } });
