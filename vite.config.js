/*
 * @Description: 
 * @Autor: 郝志杰
 * @Date: 2024-05-11 14:59:27
 * @LastEditors: 郝志杰
 * @LastEditTime: 2024-05-11 15:00:53
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
          }
    }
})
