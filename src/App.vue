<script>

import {store} from './data/store';

import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue'

export default {

  name: 'App',

  components: {

    AppHeader,
    AppMain,
    AppFooter

  },

  data(){
    return{

      store

    }
  },

  methods: {

    getApiGenres(type) {
      let apiUrl = store.apiUrlGenres + type + '/list';
      axios.get(apiUrl, { params: store.apiParams })
      .then(result => {
        if(type === 'movie') store.movieGenres = result.data.genres;
        else store.tvGenres = result.data.genres;
      })
      .catch(error => {
        console.log('error')
      })
    },

    getApi(type, isPopular){

      let apiUrl;

      if(isPopular && type === 'movie') apiUrl = store.apiUrlMovieTrend;
      else if(isPopular && type === 'tv') apiUrl = store.apiUrlTvTrend;
      else  apiUrl = store.apiUrl + type;
      
      axios.get(apiUrl , { params: store.apiParams })
      .then(result => {
        store[type] = result.data.results;
        // console.log(store[type]);
      })
      .catch(error => {
        console.log('error')
      })

    },

    startSearch(isPopular = false) {

      store.movie = [];
      store.tv = [];

      if(store.apiParams.query === '' && store.type === '') {
        this.getApi('movie', isPopular);
        this.getApi('tv', isPopular);
      } else if(store.apiParams.query === '' && store.type === 'movie') {
        this.getApi('movie', isPopular);
      }else if(store.apiParams.query === '' && store.type === 'tv') {
        this.getApi('tv', isPopular);
      }else if(store.type === '') {
        this.getApi('movie', isPopular);
        this.getApi('tv', isPopular);
      } else this.getApi(store.type, isPopular); 

    },

    getSearchParams() {
      if(store.apiParams.query === '') this.startSearch(true);
      else this.startSearch ();
    },

  },

  mounted(){

    this.startSearch(true);
    this.getApiGenres('movie');
    this.getApiGenres('tv');

  }

}

</script>

<template>

  <AppHeader @search="getSearchParams()"/>

  <div class="scroll">

    <main class="mb-5 pt-5">
      
      <AppMain v-if="store.movie.length" title="Film" type="movie"/>
  
      <AppMain v-if="store.tv.length" title="Serie Tv" type="tv"/>
  
    </main>
  
    <AppFooter/>

  </div>

</template>

<style lang="scss">

@use './style/general.scss';
@use './style/partials/vars' as *;

.scroll {
  height: calc(100vh - $header-heigth);
  overflow: scroll;
}

</style>
