<script>

import social from '../data/social';
import {getImagePath} from '../data/methods';
import { footerMenu } from '../data/menu';


export default {

  name: 'AppFooter',

  data(){
    return{

      social,
      getImagePath,
      footerMenu

    }
  }

}

</script>

<template>

  <footer class="container-custom pt-5">

    <div class="row">

      <div class="col-12 mb-3">
        <a v-for="(icon, index) in social" :key="index" 
        href="" class="me-4">
          <img :src="getImagePath(icon.name)" :alt="icon.alt">
        </a>
      </div>

      <div v-for="(menu, index) in footerMenu" :key="index" class="col-6 col-lg-3">
        <ul class="ps-0">
          <li v-for="(link, index) in menu" :key="index"><a href="link.href">{{link.text}}</a></li>
        </ul>
      </div>

      <div class="col-auto">
        <p class="code">Codice di servizio</p>
        <p><i class="fa-regular fa-copyright"></i> 1997-2022 Netflix.inc</p>
      </div>

    </div>

  </footer>
  
</template>

<style lang="scss" scoped>

@use '../style/partials/vars' as *;

img {
  width: 25px;
  filter:invert(1);
}

a {
  color: $light-primary-color;
  font-size: 0.8rem;
  &:hover {
    text-decoration: underline;
    color: $light-primary-color;
  }
}

p {
  font-size: 0.7rem;
  color:  $light-primary-color;
  &.code {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid  $light-primary-color;
    cursor: pointer;
  }
}

</style>