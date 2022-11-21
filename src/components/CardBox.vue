<script>

import {store} from '../data/store';
import flags from '../data/flags';

export default {

  name: 'CardBox',

  props: {

    poster_path: String,
    title: String,
    original_title: String,
    original_language: String,
    vote_average: Number

  },

  data(){
    return{

      store,
      flags

    }
  },

}

</script>

<template>


  <div class="col">
    <div class="card">
      <img :src="`${store.pathImage}${poster_path}`" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Titolo: {{title}}</p>
        <p class="card-text">Titolo originale: {{original_title}}</p>
        <p class="card-text">Lingua: 
          <span 
            v-if="flags.includes(original_language)"
            class="fi" :class="`fi-${original_language}`"></span>
          <span 
            v-else-if="original_language === 'en'"
            class="fi fi-gb"></span>
          <span 
            v-else>{{original_language}}</span>  
        </p>
        <p class="card-text">Voto: {{vote_average}}
          <i v-for="i in Math.ceil(vote_average / 2)" :key="i" class="fa-solid fa-star"></i>
          <i v-for="i in (store.limitStars - Math.ceil(vote_average / 2))" :key="i" class="fa-regular fa-star"></i>
        </p>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

</style>