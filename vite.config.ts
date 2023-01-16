import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  plugins: [
    glsl(),
    Unocss({
      /* options */

      configFile: 'unocss.config.ts',
    }),
  ],
})
