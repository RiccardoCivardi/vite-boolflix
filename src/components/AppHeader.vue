<script>

import {store} from '../data/store';

export default {

  name: 'AppHeader',

  data(){
    return{

      store

    }
  }

}

</script>

<template>

  <header>
    <input
      v-model="store.query" 
      class="form-control" type="text" placeholder="Film, serie Tv, persone ">
    <button
      @click="$emit('clickSearch')"
      class="btn btn-light">Cerca</button>
  </header>
  
</template>

<style lang="scss" scoped>

</style>