export default async () => {
    
        // const { $content } = require('@nuxt/content')
        // const files = await $content('blog').only(['path']).fetch()

        // return files.map(file => file.path === '/index' ? '/' : file.path)
      
    const { $content } = require('@nuxt/content')
    const files = await $content('blog')
      .only(['path', 'updatedAt'])
      .fetch()
    return files.map((file) => {
      return {
        url: '/' + file.path.replace('index', ''),
        lastmod: Date.parse(file.updatedAt),
      }
    })
  }