import uni from '@dcloudio/vite-plugin-uni'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/dcloudio/uni-app/issues/4815#issuecomment-3076701285
    uni.default(),
  ],
})
