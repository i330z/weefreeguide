<template>
<div>
    
  <ShareNetwork
    v-for="network in networks"
    :network="network.network"
    :key="network.network"
    :style="{backgroundColor: network.color}"
    :url="`${this.url}/${slug}`"
    :title="title"
    :description="description"
    :quote="sharing.quote"
    :hashtags="sharing.hashtags"
    :twitterUser="sharing.twitterUser"
    :media="media"
  >
    <i :class="network.icon"></i>
    <span>{{ network.name }}</span>
  </ShareNetwork>
</div>
</template>

<script>
export default {
     props:{
          slug:{
              type: String,
          },
          title:{
              type: String
          },
          description:{
              type: String
          },
          media:{
              type: String
          }

      },
  data () {
    return {
      sharing: {
        url: 'https://www.weefreeguide.xyz',
        // title: 'Say hi to Vite! A brand new, extremely fast development setup for Vue.',
        // description: 'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',
        quote: 'The hot reload is so fast it\'s near instant. - Evan You',
        hashtags: 'vuejs,vite,javascript',
        twitterUser: 'youyuxi'
      },
      networks: [
        { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' },
        { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },
        
      ]
    }
  },
  
}
</script>


<style scoped>
.share-network-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
  }

  a{
      display: inline-block;
  }

  a[class^="share-network-"] {
      display: inline-block;
      padding: 10px 0px;
      margin-right: 10px;
      margin-bottom: 10px;
      color: white;
      border-radius: 3px;
      overflow: hidden;
    /* flex: none;
    color: #FFFFFF;
    background-color: #333;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 0px 10px 0;
    width: 100px; */
  }
  a[class^="share-network-"] .fah {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    max-width: 100px;

    /* flex: 0 1 auto; */
  }
  a[class^="share-network-"] span {
    padding: 10px 10px;
    /* flex: 1 1 0%; */
    font-weight: 500;
    max-width: 100px;

  }
</style>