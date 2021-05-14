<template>
    <div>  
        <img :src="require(`./../../assets/images/${image}`)" :alt="alt" class="featured-image mb-3" />
    </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        required: true
      },
      alt:{
        type: String,
        required: true
      }
    }
  }
</script>


<style scoped>
.featured-image{
    width: 100%;
    /* object-fit: cover; */
}
</style>