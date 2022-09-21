import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import path from 'path';
import css from 'unocss/vite';
import autoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3333,
  },
  resolve: {
    alias: {
      '~/': `${path.join(__dirname, './src')}/`,
      $css: path.join(__dirname, './src/assets/style/index.ts'),
      $public: path.join(__dirname, './'),
      react: 'preact/compat',
    },
  },
  plugins: [
    preact(),
    css(),
    autoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'preact',
        {
          '@preact/signals': [
            'useSignal', 'signal', 'useSignalEffect', 'effect', 'computed', 'useComputed', 'batch'
          ]
        }
      ],
    }),
  ]
})
