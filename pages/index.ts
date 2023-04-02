import { defineNuxtModule, extendPages } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  setup() {
    extendPages((pages) => {
      const homepage = pages.find(p => p.path === '/')
      
      if (homepage) {
        homepage.file = resolve(__dirname, './index.vue')
      } else {
        pages.push({
          name: 'homepage',
          path: '/a',
          file: resolve(__dirname, './index.vue'),
          children: []
        })
      }
      console.log(pages)
    })
  }
})