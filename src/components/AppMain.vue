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

  <main>
  
    <h2>Film</h2>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">

      <CardBox
        v-show="movie.media_type === 'movie'" 
        v-for="movie in store.movieTvList" :key="movie.id"
        :poster_path="movie.poster_path"
        :title="movie.title"
        :original_title="movie.original_title"
        :original_language="movie.original_language"
        :vote_average="movie.vote_average"/>

    </div>
    
    <h2>Serie Tv</h2>

    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">

      <CardBox
        v-show="tvShow.media_type === 'tv'" 
        v-for="tvShow in store.movieTvList" :key="tvShow.id"
        :poster_path="tvShow.poster_path"
        :title="tvShow.name"
        :original_title="tvShow.original_name"
        :original_language="tvShow.original_language"
        :vote_average="tvShow.vote_average"/>

</div>

    <!-- <CardBox v-for="tvShows in store.movieList" :key="movie.id"
      :movie="movie"/> -->
   
  </main>
  
</template>

<style lang="scss" scoped>

</style>