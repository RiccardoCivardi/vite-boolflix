<script>

import {store} from '../data/store';

import MovieCard from './MovieCard.vue';

export default {

  name: 'AppMain',

  components: {

    MovieCard

  },

  props: {

    title: String,
    type: String


  },

  data(){
    return{

      store

    }
  }

}

</script>

<template>

  <div class="container-custom mb-5">

    <h5 class="mb-3">{{title}}</h5>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">

      <MovieCard v-for="card in store[type]" :key="card.id" :card="card" :type="type"/> 
      
    </div>    

  </div>  
  
</template>

<style lang="scss" scoped>

@use '../style/partials/vars' as *;

h5 {
  color: $light-color;
}

</style>