<script>

import {store} from '../data/store';
import flags from '../data/flags';
import {getImagePath} from '../data/methods';

import axios from 'axios';

export default {

  name: 'MovieCard',

  props: {

    card: Object,
    type: String

  },

  data(){
    return{

      store,
      flags,
      getImagePath,
      stringCast: ''

    }
  },

  methods: {

    getCast() {
      const apiUrl = store.apiUrlCast + this.card.media_type + '/' + this.card.id + '/credits';

      axios.get(apiUrl, {
        params: {
          api_key: store.apiParams.api_key
        }
      })
      .then(result => {
        const cast = result.data.cast;
        console.log(cast)
        for(let i = 0; i < 5; i++){
          this.stringCast += (cast[i].name + ' ');
        }
      })
    }

  },

  computed: {

    formatDate() {
      const date = this.card.release_date || this.card.first_air_date;
      return date.split('-').reverse().join('/');
    },

    formatGenres() {
      let genresString = '';
      let genresFilter = [];

      if(this.card.media_type = this.type) {
        let string = this.type + 'Genres'; 
        genresFilter = store[string];
      } 

      this.card.genre_ids.forEach(genre => {
        genresFilter.forEach(gen => {
          if(gen.id === genre) {
            genresString += (gen.name + ' ');
          }
        })
      })

      return genresString;
    }

  }

}

</script>

<template>

  <div class="col mb-4">
    <div class="card-default card h-100 rounded-2" @mouseenter="getCast()">

      <div class="h-100 overflow-hidden rounded-2">
        
        <img v-if="card.poster_path" :src="store.pathImage + card.poster_path"  class="card-img-top" :alt="card.title">
        <img v-else :src="getImagePath(store.imageNotFoundBig)"  class="card-img-top" :alt="card.title">
        
      </div>
      
      <div class="card-zoom card h-100">

        <div class="overflow-hidden image-zoom">
          
          <img v-if="card.backdrop_path" :src="`${store.pathImage}${card.backdrop_path}`" class="card-img-top" :alt="card.title">
          <img v-else :src="getImagePath(store.imageNotFoundSmall)" class="card-img-top" :alt="card.title">

        </div>

        <div class="card-body">
          
          <h6 class="">{{card.title || card.name}}</h6>

          <p class="mb-1">Titolo originale: <strong>{{card.original_title || card.original_name}}</strong></p>

          <p class="mb-1">{{formatGenres}}</p>

          <p v-if="card.release_date || card.first_air_date" class="mb-1">Uscita: {{formatDate}}</p>

          <p class="mb-1">Lingua: 
            <span 
              v-if="flags.includes(card.original_language)"
              class="fi" :class="`fi-${card.original_language}`"></span>
            <span 
              v-else-if="card.original_language === 'en'"
              class="fi fi-gb"></span>
            <span 
              v-else>{{card.original_language}}</span>  
          </p>

          <p class="mb-1">Voto:
            <i v-for="i in Math.ceil(card.vote_average / 2)" :key="i" class="fa-solid fa-star"></i>
            <i v-for="i in (store.limitStars - Math.ceil(card.vote_average / 2))" :key="i" class="fa-regular fa-star"></i>
          </p>

          <p class="mb-1 cast">Cast: <em>{{stringCast}}</em></p>

          <p v-if="card.overview" class="description mb-0">{{card.overview}}</p>

        </div>
      </div>  

    </div>
  </div>
    
    
  
</template>

<style lang="scss" scoped>

@use '../style/partials/vars' as *;

.card {
  border: 1px solid $primary-color;
  background-color: $primary-color;
  color: $light-color;
  .image-zoom{
    height: 130px;
    object-fit: contain;
    object-position: center;
  }
  .card-body {
    font-size: 0.6rem;
    .description {
      height: 100px;
      padding-right: 10px;
      overflow-y: scroll;
    }
    i {
      color: yellow;
    }
  }

}
.card-default{
  position: relative;
  .card-zoom {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    overflow: scroll;
  }
  &:hover .card-zoom{
    display: block; 
    transform: scale(1.4);
  }
}



</style>