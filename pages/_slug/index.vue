<template>
    <div class="my-5">
       
        <div class="container-fluid px-50">
          <div class="row">
            <div class="col-md-8 col-12 bg-white" >
            <h1>{{ article.title }}</h1>
            <img :src="require(`./../../assets/images/${article.featured.img}`)" :alt="article.featured.alt" class="featured-image" />
            
               <div class="toc">
                 <h2 class="mb-3">Table Of Content</h2>
                  <nav>
                      <ul>
                          <li v-for="link of article.toc" :key="link.id" >
                          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                          </li>
                      </ul>
                  </nav>
                </div>

                
              <social-share :title="article.title" :description="article.description" :slug="article.slug" :media="article.featured.img"/>


              <nuxt-content :document="article" />
              <hr>
              <h2 class="my-4">Recommanded Articles</h2>
              <div class="row">
                <div class="col-md-6 col-12" v-for="more in moreStories" :key="more.title">
                <div class="more-stories" >
                  <img :src="require(`./../../assets/images/${article.featured.img}`)" :alt="more.featured.alt" class="featured-image">
                  <div class="more-stories-text">
                    <h2>{{ more.title }}</h2>
                    <n-link :to="`/${more.slug}`">
                      <button class="btn-default mt-3">View More</button>
                    </n-link>
                  </div>
                </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12" >
              Ads
                
              
            </div>
          </div>
        </div>
    </div>
</template>


<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('blog', params.slug).fetch()
      const moreStories = await $content({ deep: true })
      .only(['title', 'featured', 'slug'])
      .where({ title: { $ne: article.title } })
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

      return { article , moreStories}
    },

    head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        {
          property: "article:published_time",
          content: this.article.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.article.updatedAt,
        },
        {
          property: "article:tag",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.article.featured.img
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.article.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.featured.img
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.article.featured.img
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.article.title
        },
        { property: "og:image:width", content: "740" },
        { property: "og:image:height", content: "300" },
      ],
      link: [
        {
          hid:"canonical",
          rel: "canonical",
          href: "https://www.weefreeguide.xyz/" + this.article.slug,
        },
      ],
    };
  },

   jsonld() {
    const items = {
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.weefreeguide.xyz/" + this.article.slug
      },
      headline: this.article.title,
      description: this.article.description,
      image: "",
      author: {
        "@type": "Person",
        name: "nomads"
      },
      publisher: {
        "@type": "Organization",
        name: "NortheastNomads",
        logo: {
          "@type": "ImageObject",
          url: this.article.featured.img
        }
      },
      datePublished: this.article.createdAt,
      dateModified: this.article.updatedAt,
    };
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      ...items
    };
  }

  }
</script>


<style>

  h1{
    font-size: 32px;
    margin-bottom: 20px;
  }
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
    color: var(--primary);
    margin-bottom: 20px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
    margin-bottom: 20px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
    line-height: 30px;
  }

  ul{
    margin: 0px;
    padding: 0px;
  }

  ul>li{
   list-style: square;
  }
  
  ul > li:not(:last-child){
   padding-bottom: 20px;
  }

  .toc{
    padding: 20px 40px;
    background: rgb(212, 252, 212);
    display: block;
    margin: 10px 0px;
    border: 2px solid var(--primary);
    border-radius: 4px;
  }

  .more-stories{
    border: 1px solid black;
    margin-bottom: 10px;
    min-height: 370px;
  }
  .more-stories-text{
    
    padding: 20px;
  }

  .featured-image{
    width: 100%;
    object-fit: cover;
  }

  a{
    color: green;
  }

  @media(max-width:700px){
    .more-stories{
      min-height: 340px;
    }
  }
</style>