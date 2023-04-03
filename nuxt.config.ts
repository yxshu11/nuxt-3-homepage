// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // hooks: {
  //   'pages:extend'(pages) {
  //     // Add routes
  //     if (process.env.npm_package_name !== 'nuxt-3-main-app') { 
  //       pages.push({
  //         name: 'Homepage',
  //         path: '/',
  //         file: '~/pages/index.vue'
  //       })
      
  //       // remove routes
  //       function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
  //         const pagesToRemove = []
  //         for (const page of pages) {
  //           if (pattern.test(page.file)) {
  //             pagesToRemove.push(page)
  //           } else {
  //             removePagesMatching(pattern, page.children)
  //           }
  //         }
  //         for (const page of pagesToRemove) {
  //           pages.splice(pages.indexOf(page), 1)
  //         }
  //       }
  //       removePagesMatching(/\.ts$/, pages)
  //     }
  //   }
  // },
  runtimeConfig: {
    public: {
      theme: {
        primaryColor: 'SEPHORA_RED',
        secondaryColor: 'SEPHORA_WHITE'
      }
    }
  }
})
