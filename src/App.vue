<script>

import {store} from './data/store';

import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'

export default {

  name: 'App',

  components: {

    AppHeader,
    AppMain

  },

  data(){
    return{

      store

    }
  },

  methods: {

    getApi(){

      axios.get(store.apiUrl, {
        params:{
          api_key: store.api_key,
          query: store.query,
          page: store.page,
          language: store.language,
          include_adult: store.include_adult
        }
      })
      .then(result => {
        console.log(result.data);
        store.movieTvList = result.data.results;
      })
      .catch(error => {
        console.log('error')
      })


    }

  },

  mounted(){

    this.getApi();

  }

}

</script>

<template>

  <AppHeader @clickSearch="getApi()"/>

  <AppMain/>
  
</template>

<style lang="scss">

@use './style/general.scss';

</style>
