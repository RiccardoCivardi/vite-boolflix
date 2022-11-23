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
  },

  computed: {

    ListToPrint(){

      if(store.genre === '') return store[this.type];

      store[this.type] = store[this.type].filter(card => card.genre_ids.includes(store.genre));

      return store[this.type]; 
      
    }

  }

}

</script>

<template>

  <div class="container-custom mb-5">

    <h5 class="mb-3">{{title}}</h5>

    <div class="row g-1 row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">

      <MovieCard v-for="card in ListToPrint" :key="card.id" :card="card" :type="type"/>
     
    </div> 

    <div v-if="store.type != ''" class="d-flex justify-content-center">

      <i 
      @click="store.apiParams.page--; $emit('search')" 
      v-show="store.pagination[type] > 1" class="fa-solid fa-circle-chevron-left me-1"></i>

      <i 
      @click="store.apiParams.page++; $emit('search')" 
      v-show="store.pagination[type] = store.apiParams.page" class="fa-solid fa-circle-chevron-right"></i>

    </div>

  </div>  
  
</template>

<style lang="scss" scoped>

@use '../style/partials/vars' as *;

h5 {
  color: $light-color;
}

i{
  font-size: 2rem;
  &:hover {
    color: $light-color; 
  }
}

</style>