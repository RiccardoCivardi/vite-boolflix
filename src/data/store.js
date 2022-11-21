import {reactive} from 'vue';

export const store = reactive({

  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  api_key: '852554b25617fadc02e37aa2200d81af',
  query: 'avengers',
  page: '',
  language: 'it-IT',
  movieList: []

});