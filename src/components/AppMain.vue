<script>

import {store} from '../data/store';

import CardBox from './CardBox.vue';

export default {

  name: 'AppMain',

  components: {

    CardBox

  },

  data(){
    return{

      store

    }
  }

}

</script>

<template>

  <main class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
    
    <CardBox v-for="movie in store.movieList" :key="movie.id"
      :movie="movie"/>
   
  </main>
  
</template>

<style lang="scss" scoped>

</style>