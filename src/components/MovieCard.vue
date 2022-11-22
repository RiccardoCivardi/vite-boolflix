<script>

import {store} from '../data/store';
import flags from '../data/flags';

export default {

  name: 'MovieCard',

  props: {

    card: Object

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
      <img :src="`${store.pathImage}${card.poster_path}`" class="card-img-top" :alt="card.title">
      <div class="card-body">
        <p class="card-text">Titolo: {{card.title || card.name}}</p>
        <p class="card-text">Titolo originale: {{card.original_title || card.original_name}}</p>
        <p class="card-text">Lingua: 
          <span 
            v-if="flags.includes(card.original_language)"
            class="fi" :class="`fi-${card.original_language}`"></span>
          <span 
            v-else-if="card.original_language === 'en'"
            class="fi fi-gb"></span>
          <span 
            v-else>{{card.original_language}}</span>  
        </p>
        <p class="card-text">Voto: {{card.vote_average}}
          <i v-for="i in Math.ceil(card.vote_average / 2)" :key="i" class="fa-solid fa-star"></i>
          <i v-for="i in (store.limitStars - Math.ceil(card.vote_average / 2))" :key="i" class="fa-regular fa-star"></i>
        </p>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

</style>