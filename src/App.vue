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

    getApi(type, isPopular){

      let apiUrl;

      if(isPopular && type === 'movie') apiUrl = store.apiUrlMovieTrend;
      else if(isPopular && type === 'tv') apiUrl = store.apiUrlTvTrend;
      else  apiUrl = store.apiUrl + type;
      
      axios.get(apiUrl , { params: store.apiParams })
      .then(result => {
        store[type] = result.data.results;
        console.log(store[type]);
      })
      .catch(error => {
        console.log('error')
      })

    },

    startSearch(isPopular = false) {

      store.movie = [];
      store.tv = [];

      if(store.type === '') {
        this.getApi('movie', isPopular);
        this.getApi('tv', isPopular);
      } else this.getApi(store.type);

    },

    getSearchParams() {
      if(store.type === '') this.startSearch(true);
      this.startSearch ();
    },

  },

  mounted(){

    this.startSearch(true);

  }

}

</script>

<template>

  <AppHeader @search="getSearchParams()"/>

  <main>
    
    <AppMain v-if="store.movie.length" title="Film" type="movie"/>

    <AppMain v-if="store.tv.length" title="Serie Tv" type="tv"/>

  </main>

  <AppFooter/>
  
</template>

<style lang="scss">

@use './style/general.scss';

</style>
