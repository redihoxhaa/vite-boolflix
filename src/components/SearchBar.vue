<script>
// IMPORTS

import { store } from '../store';
import axios from 'axios';
// /IMPORTS

export default {
  props: [],
  components: {},
  data() {
    return {
      store,
    }
  },
  methods: {

    // Funzione per cercare i film
    searchMovie() {
      axios.get(store.moviesAPI, {
        params: {
          api_key: 'c102053cc7cdde6f47ccfb1d24cbd4e6',
          language: store.searchLanguage,
          query: store.searchKey,
          page: store.currentMoviePage,
        }
      }).then(response => {
        store.searchMovieResults = response.data.results;
      })
    },

    // Funzione per cercare le serie tv
    searchTV() {
      axios.get(store.tvAPI, {
        params: {
          api_key: 'c102053cc7cdde6f47ccfb1d24cbd4e6',
          language: store.searchLanguage,
          query: store.searchKey,
          page: store.currentTVPage,
        }
      }).then(response => {
        store.searchTvResults = response.data.results;
      })
    },
  },
  mounted() {
  },
}
</script>

<template>
  <div class="container">
    <div class="input-group mt-5">
      <input type=" text" class="form-control" placeholder="Cosa vuoi guardare oggi?"
        aria-label="Cosa vuoi guardare oggi?" aria-describedby="button-addon2" v-model="store.searchKey">
      <button class="btn btn-outline-secondary" type="button" id="search-btn"
        @click="searchMovie(); searchTV();">Cerca</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>
