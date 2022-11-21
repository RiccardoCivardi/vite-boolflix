<script>

import {store} from './data/store';

import axios from 'axios';

export default {

  name: 'App',

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
          language: store.language
        }
      })
      .then(result => {
        console.log(result.data);
      })


    }

  },

  mounted(){

    this.getApi();

  }

}

</script>

<template>
  
</template>

<style lang="scss">

@use './style/general.scss';

</style>
