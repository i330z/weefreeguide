<template>
  <div class="main-wrapper">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4" v-for="article in articles" :key="article.slug">
          <div class="card">
            <div class="card-img">
              <img :src="require(`./../../assets/images/${article.featured.img}`)" :alt="article.featured.alt" class="featured-image" >
            </div>
            <div class="card-text">
              <h2>{{ article.title }}</h2>
              <p>{{ article.description }}</p>
              <n-link :to="article.slug">
                <button class="btn-default mt-3">VIEW POST</button>
              </n-link> 
            </div>
          </div>
        </div>
        <!-- <div class="col-md-8 offset-md-2 col-12">
          <app-search-input />
          {{ articles.fetured }}
          <div v-for="article in articles" :key="article.slug">
            
              <div class="blog-post-card">
                <div class="row">
                  <div class="col-md-4">
                    <img :src="article.featured.img" :alt="article.featured.alt" class="blog-post-img">
                  </div>
                  <div class="col-md-8">
                    <div class="p-2">
                      <h2 class="mb-2">{{ article.title }}</h2>
                      <p>{{ article.description }}</p>
                      <n-link :to="article.slug">
                        <button class="btn-default mt-3">VIEW POST</button>
                      </n-link> 
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import AppSearchInput from '~/components/AppSearchInput.vue';
export default {
  components: { AppSearchInput },
  async asyncData ({ $content, params }){
    const articles = await $content('blog')
        .only(['title', 'description', 'slug', 'featured'])
        .sortBy('createdBy', 'asc')
        .fetch();

        return {
          articles
        }

  },

   jsonld() {
   
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
       "name": "WeeFreeGuide",
        "url": "https://www.weefreeguide.xyz/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "{search_term_string}",
          "query-input": "required name=search_term_string"
    }
  }
}
}
</script>


<style scoped>
.main-wrapper{
  min-height: 100vh;
}
.blog-post-card{
  /* padding: 20px; */
  /* height: 200px; */
  /* border: 1px solid rgb(207, 207, 207); */
  margin-bottom: 20px;
  background: white;
}

.blog-post-card h2{
  font-size: 30px;
}

.blog-post-card p{
  color: #777;
}

.blog-post-img{
  width: 100%;
  height: 100%;
  background: red;
  object-fit: cover;
}

.card-img{
  width: 100%;
  object-fit: cover;
}

.card{
  border: 2px solid var(--primary);
  border-radius: 4px;
}

.card-text{
  padding: 10px;
}

</style>
