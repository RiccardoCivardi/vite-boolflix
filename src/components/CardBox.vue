<script>

export default {

  name: 'CardBox',

  props: {

    movie: Object

  }

}

</script>

<template>


  <div class="col">
    <div class="card">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <p class="card-text">Titolo: {{movie.title}}</p>
        <p class="card-text">Titolo originale: {{movie.original_title}}</p>
        <p class="card-text">Lingua: {{movie.original_language}}</p>
        <p class="card-text">Voto: {{movie.vote_average}}</p>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

</style>