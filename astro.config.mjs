import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import postcssLightningcss from 'postcss-lightningcss'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      basicSsl({
        name: 'Matronator Authority Certificate',
      }),
    ],
    css: {
      lightningcss: {
        drafts: {
          customMedia: true,
          nesting: true,
        }
      },
      transformer: 'postcss',
      // postcss: {
      //   plugins: [
      //     postcssLightningcss({
      //         browsers: "> 0.3%, last 2 versions, Firefox ESR, not dead",
      //         lightningcssOptions: {
      //             drafts: {
      //                 nesting: true,
      //                 customMedia: true,
      //             }
      //         }
      //     }),
      //   ]
      // }
    }
  },
  output: 'static'
});
