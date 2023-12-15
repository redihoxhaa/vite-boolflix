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
      emptyResultsMsg: '',
      didISearchStatus: false,
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
        if (response.data.results.length === 0) {
          this.emptyResultsMsg = 'Non ci sono risultati disponibili';
        }
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
        if (response.data.results.length === 0) {
          this.emptyResultsMsg = 'Non ci sono risultati disponibili';
        }
      })
    },

    didISearch() {
      this.didISearchStatus = true;
      const scope = this
      setTimeout(function () {
        scope.didISearchStatus = false;
      }, 2000)
    }
  },
  mounted() {
  },
}
</script>

<template>
  <div class="container">
    <div class="input-group mt-5">
      <input type=" text" class="form-control" placeholder="Cosa vuoi guardare oggi?"
        aria-label="Cosa vuoi guardare oggi?" aria-describedby="button-addon2" v-model="store.searchKey"
        @keyup.enter="searchMovie(); searchTV(); didISearch()">
      <button class="btn btn-outline-secondary" type="button" id="search-btn"
        @click="searchMovie(); searchTV(); didISearch()">Cerca</button>
    </div>
    <p v-if="store.searchKey === '' && didISearchStatus === true">E che devo cercare, il nulla?</p>
    <p class="empty-results-msg"
      v-else-if="store.searchMovieResults.length === 0 && store.searchTvResults.length === 0 && didISearchStatus === true">
      {{
        this.emptyResultsMsg }}</p>

  </div>
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>
