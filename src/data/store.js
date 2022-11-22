import {reactive} from 'vue';

export const store = reactive({

  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiUrlMovieTrend: 'https://api.themoviedb.org/3/trending/movie/day',
  apiUrlTvTrend: 'https://api.themoviedb.org/3/trending/tv/day',
  
  apiParams: {
    api_key: '852554b25617fadc02e37aa2200d81af',
    query: '',
    page: 1,
    language: 'it-IT',
    include_adult: false
  },
  
  movie: [],
  tv: [],

  type:'',

  pathImage: 'https://image.tmdb.org/t/p/w342/',
  pathImageNotFound: '../assets/image-not-found.png',

  limitStars: 5,

});