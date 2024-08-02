/$$
 $ @Description: 
 $ @Author: Bhb
 $ @Date: 2024-04-10 16:12:51
 $ @LastEditors: Bhb
 $ @LastEditTime: 2024-04-10 16:20:58
 $ @FilePath: \tentech-official\vite.config.js
 $/
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  css: [
    "../../assets/iconfont/iconfont.css"
  ],
  plugins: [vue()],
})
