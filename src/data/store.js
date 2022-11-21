import {reactive} from 'vue';

export const store = reactive({

  apiUrl: 'https://api.themoviedb.org/3/search/multi',
  apiUrlMovieTrend: 'https://api.themoviedb.org/3/trending/movie/week',
  apiUrlTvTrend: 'https://api.themoviedb.org/3/trending/tv/week',
  api_key: '852554b25617fadc02e37aa2200d81af',
  query: '',
  page: '',
  language: 'it-IT',
  include_adult: false,
  movieTvList: []

});