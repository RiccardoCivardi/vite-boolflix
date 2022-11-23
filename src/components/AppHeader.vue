<script>

import {store} from '../data/store';
import {headerMenu} from '../data/menu'; 

export default {

  name: 'AppHeader',

  data(){
    return{

      store,
      headerMenu

    }
  },

  computed: {

    genresType(){
      if(store.type === 'movie'){
        store.genre = '';
        return store.movieGenres;
      } 

      store.genre = '';
      return store.tvGenres;
    }

  }

}

</script>

<template>

  <header class="pt-3">

    <div class="container-custom">

      <div class="row">

        <div class="col-1 p-0">
          <img src="/logo-boolflix.png" alt="Logo Boolflix">
        </div>

        <div class="col-6 p-0 ps-4 d-flex ">

          <div class="dropdown d-lg-none h-100 d-flex align-items-center">
            <span class="browse dropdown-toggle">Sfoglia</span>
            <ul class="dropdown-menu">
            </ul>
          </div>
          
          <ul class="d-flex p-0 d-none d-lg-flex h-100 d-flex align-items-center">
            <li
              v-for="(link, index) in headerMenu" :key="index"
              class="ps-2"
            ><a href="link.href" :class="{'active': link.active}">{{link.text}}</a></li>
          </ul>

        </div>

        <div class="col-5 d-flex flex-wrap
        ">
          <input
            @keyup.enter="store.apiParams.page = 1; store.genre = ''; $emit('search')" 
            v-model.trim="store.apiParams.query" 
            class="form-control me-1 w-75" type="text" placeholder="Film, serie Tv..."
          >

          <button @click="$emit('search')" class="btn btn-light w-auto me-1">Cerca</button>
          
          <div class="w-75">

            <select v-model="store.type" @change="store.apiParams.page = 1; $emit('search')" class="me-1">
              <option value="" selected>Tutti</option>
              <option value="movie">Film</option>
              <option value="tv">Serie Tv</option>
            </select>
  
            <select v-if="store.type === 'movie' || store.type === 'tv'" 
            v-model="store.genre" @change="store.apiParams.page = 1; $emit('search')" class="me-1">
              <option value="" selected>Tutti i generi</option>
              <option v-for="(genre, index) in genresType" :key="index" :value="genre.id">{{genre.name}}</option>
            </select>

          </div>

        </div>

      </div>

    </div>
    
  </header>
  
</template>

<style lang="scss" scoped>

@use '../style/partials/vars' as *;

header{
 
  img{
    object-fit: contain;
  }
  .browse {
    font-size: 0.8rem;
    color: $light-color;
    font-weight: 400;
  }
  a{
    color: $light-color;
    font-weight: 300;
    font-size: 0.8rem;
    &:hover{
      color: $light-primary-color;
    }
    &.active{
      font-weight: 400;
    }

  }
  select, input, button {
    height: 20px;
    padding: 0 5px;
    font-size: 0.7rem;
    margin-bottom: 5px;
  }
}

</style>