<script>

import {store} from '../data/store';
import {headerMenu} from '../data/menu'; 

export default {

  name: 'AppHeader',

  data(){
    return{

      store,
      headerMenu,

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

        <div class="col-8 p-0 ps-4">


          <div class="dropdown d-md-none">
            <span class="browse dropdown-toggle">Sfoglia</span>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          <!-- <span class="browse d-md-none dropdown-toggle">Sfoglia</span> -->
          
          <ul class="d-flex p-0 d-none d-md-flex">
            <li
              v-for="(link, index) in headerMenu" :key="index"
              class="ps-3"
            ><a href="link.href" :class="{'active': link.active}">{{link.text}}</a></li>
          </ul>

        </div>

        <div class="col-3">
          <input
            @keyup.enter="$emit('search')" @keypress.enter="store.genre = ''"
            v-model.trim="store.apiParams.query" 
            class="form-control" type="text" placeholder="Film, serie Tv, persone "
          >
          
          <select v-model="store.type" @change="$emit('search')">
            <option value="" selected>Tutti</option>
            <option value="movie">Film</option>
            <option value="tv">Serie Tv</option>
          </select>

          <select v-if="store.type === 'movie' || store.type === 'tv'" v-model="store.genre" @change="$emit('search')">
            <option value="" selected>Tutti i generi</option>
            <option v-for="(genre, index) in genresType" :key="index" :value="genre.id">{{genre.name}}</option>
          </select>

          <button
            @click="$emit('search')"
            class="btn btn-light">Cerca</button>
        </div>


      </div>

      

      


    </div>
    
  </header>
  
</template>

<style lang="scss" scoped>

@use '../style/partials/vars' as *;

header{
  .browse {
    font-size: 0.8rem;
    color: $light-color;
    font-weight: 400;
    // &::after{
    //   content: '\f0d7';
    //   font-family: 'Font Awesome 6 free';
    //   font-weight: bold;
    // }
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
}

</style>