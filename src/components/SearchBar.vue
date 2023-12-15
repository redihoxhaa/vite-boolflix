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
          this.emptyResultsMsg = 'Non ci sono risultati disponibili, potrebbe essere un idea per un nuovo film? 😎';
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
          this.emptyResultsMsg = 'Non ci sono risultati disponibili, potrebbe essere un\'idea per un nuovo film? 😎';
        }
      })
    },

    didISearch() {
      this.didISearchStatus = true;
      const scope = this
      setTimeout(function () {
        scope.didISearchStatus = false;
      }, 2800)
    }
  },
  mounted() {
  },
}
</script>

<template>
  <div class="wrapper">
    <div class="input-group mt-5">
      <input type=" text" class="form-control shadow-none" placeholder="Cosa vuoi guardare oggi?"
        aria-label="Cosa vuoi guardare oggi?" aria-describedby="button-addon2" v-model="store.searchKey"
        @keyup.enter="searchMovie(); searchTV(); didISearch()">
      <button class="btn btn-outline-secondary" type="button" id="search-btn"
        @click="searchMovie(); searchTV(); didISearch()">Cerca</button>

    </div>
    <p class="empty-search-msg" v-if="store.searchKey === '' && didISearchStatus === true">E che devo cercare, il nulla?
      🤔
    </p>
    <p class="empty-results-msg"
      v-else-if="store.searchMovieResults.length === 0 && store.searchTvResults.length === 0 && didISearchStatus === true">
      {{
        this.emptyResultsMsg }}</p>
  </div>
</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/variables' as *;
// /USES

.wrapper {
  position: relative;

  .input-group {
    max-width: 600px;


    input {
      color: $text-color;
      background-color: transparent;

      &:focus {
        border-color: $input-border-color;
      }

      &::placeholder {
        color: $input-border-color;
      }
    }

    button {
      color: $input-border-color;

      &:hover {
        color: $text-color;
        background-color: $main-color;

      }
    }

  }

  p {
    color: $input-border-color;
    margin-top: 10px;
    position: absolute;
    top: 35px;
    left: 0;
  }
}
</style>
