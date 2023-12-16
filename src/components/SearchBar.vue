<script>
// IMPORTS

import { store } from "../store";
import axios from "axios";
// /IMPORTS

export default {
  props: [],
  components: {},
  data() {
    return {
      store,
    };
  },
  methods: {
    checkPriority() {
      store.priorityShow = 'tvs';
      store.showFilm = false;
      store.showTv = true;
      if ((store.searchMovieResults.length && store.searchTvResults.length) || (store.searchMovieResults.length && !store.searchTvResults.length)) {
        store.priorityShow = "movies";
        store.showFilm = true;
        store.showTv = false;
      }
    },

    // Funzione per cercare i film
    searchMovie() {
      store.searchMovieResults = [];
      store.currentMoviePage = 1;
      axios
        .get(store.moviesAPI, {
          params: {
            api_key: "c102053cc7cdde6f47ccfb1d24cbd4e6",
            language: store.searchLanguage,
            query: store.searchKey,
            page: store.currentMoviePage,
          },
        })
        .then((response) => {
          if (response.data.results.length !== 0) {
            store.searchMovieResults = response.data.results;
          } else {
            setTimeout(function () {
              store.emptyMessage = "Non ci sono risultati disponibili, potrebbe essere un'idea per un nuovo film? 😎";
            }, 500);
            setTimeout(function () {
              store.emptyMessage = "";
            }, 4000);
          }
          this.checkPriority();
        });
    },

    searchTV() {
      store.searchTvResults = [];
      store.currentTVPage = 1;
      axios
        .get(store.tvAPI, {
          params: {
            api_key: "c102053cc7cdde6f47ccfb1d24cbd4e6",
            language: store.searchLanguage,
            query: store.searchKey,
            page: store.currentTVPage,
          },
        })
        .then((response) => {
          if (response.data.results.length !== 0) {
            store.searchTvResults = response.data.results;
          } else {
            setTimeout(function () {
              store.emptyMessage = "Non ci sono risultati disponibili, potrebbe essere un'idea per un nuovo film? 😎";
            }, 500);
            setTimeout(function () {
              store.emptyMessage = "";
            }, 4000);
          }
          this.checkPriority();
        });

    },

    didISearch() {
      store.didISearchStatus = true;
      store.searchKey = store.searchKeyPreview;
      setTimeout(function () {
        store.didISearchStatus = false;
      }, 3000);
    },

    searchHandler() {
      this.didISearch();
      this.searchMovie();
      this.searchTV();
    },
  },
  mounted() { },
};
</script>

<template>
  <div class="wrapper">
    <div class="input-group" :class="{ shake: store.searchKey === '' && store.didISearchStatus === true },
    {
      minimize: store.searchMovieResults.length !== 0 || store.searchTvResults.length !== 0,
    }
      ">
      <input type=" text" class="form-control shadow-none" placeholder="Cosa vuoi guardare oggi?"
        aria-label="Cosa vuoi guardare oggi?" aria-describedby="button-addon2" v-model="store.searchKeyPreview"
        @keyup.enter="searchHandler();" />
      <button class="btn btn-outline-secondary" type="button" id="search-btn" @click="searchHandler()">Cerca</button>
    </div>
    <p class="empty-search-msg" v-if="store.searchKey === '' && store.didISearchStatus === true">E che devo cercare, il
      nulla? 🤔</p>
    <p class="empty-results-msg"
      v-else-if="store.searchMovieResults.length === 0 && store.searchTvResults.length === 0 && store.didISearchStatus === true">
      {{ store.emptyMessage }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
// USES
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/animations" as *;
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

  .minimize {
    width: 300px;
  }
}

@media screen and (max-width: 991.98px) {
  .minimize {
    width: 500px !important;
    margin-bottom: 30px;
  }
}
</style>
