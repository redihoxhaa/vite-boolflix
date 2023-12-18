<script>
// IMPORTS
import List from "./List.vue";
import { store } from "../store";
import axios from "axios";


// /IMPORTS

export default {
  props: [],
  components: { List, },
  data() {
    return {
      store,
      currentSelection: "",
    };
  },
  methods: {
    loadMoreMovies() {
      store.currentMoviePage++;
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
            store.searchMovieResults = store.searchMovieResults.concat(
              response.data.results
            );
            store.filteredMovies = store.searchMovieResults
          } else {
            store.noMoviesLeft = true;
            setTimeout(function () {
              store.noMoviesLeft = false;
            }, 500);
          }
        });
    },

    loadMoreTvs() {
      store.currentTVPage++;
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
            store.searchTvResults = store.searchTvResults.concat(
              response.data.results
            );
            store.filteredTvs = store.searchTvResults
          } else {
            store.noTvsLeft = true;
            setTimeout(function () {
              store.noTvsLeft = false;
            }, 500);
          }
        });
    },

    switchSection() {
      store.showFilm = !store.showFilm;
      store.showTv = !store.showTv;
      store.showFilm ? store.btnMessage = 'Passa alle Serie TV' : store.btnMessage = 'Passa ai Film';

      if (store.priorityShow === 'tvs') {
        store.priorityShow = 'movies'
      } else {
        store.priorityShow = 'tvs'
        store.showTv = true;
      }

    },
    /*    checkMessage() {
         if (store.searchMovieResults.length && store.searchMovieResults.length && store.priorityShow === 'movies') { store.btnMessage = 'Passa alle Serie TV' }
       } */

  },
  mounted() {

  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row g-2 d-flex justify-content-center">

        <section class="movies" v-if="store.searchMovieResults.length && store.showFilm">
          <div class="wrapper d-lg-block" :class="{ 'd-none': store.priorityShow === 'tvs' }" data-aos="fade-right"
            data-aos-duration="2000">

            <!-- Scheda film -->
            <List :arrayToSearchIn="store.filteredMovies" :titleKey="store.movieTitleKey"
              :originalTitleKey="store.movieOrginalTitleKey" :sectionTitle="'Film'" :moreResultsFunction="loadMoreMovies"
              :operasLeft="store.noMoviesLeft" :genreArray="store.movieGenres" :type="'movie'" />
            <!-- /Scheda film -->
          </div>
        </section>

        <section class="tv-shows" v-if="store.searchTvResults.length && store.showTv">
          <div class="wrapper d-lg-block" :class="{ 'd-none': store.priorityShow === 'movies' }" data-aos="fade-left"
            data-aos-duration="2000">

            <!-- Scheda serie tv -->
            <List :arrayToSearchIn="store.filteredTvs" :titleKey="store.tvTitleKey"
              :originalTitleKey="store.tvOrginalTitleKey" :sectionTitle="'Serie TV'" :moreResultsFunction="loadMoreTvs"
              :operasLeft="store.noTvsLeft" :genreArray="store.tvGenres" :type="'tv'" />
            <!-- /Scheda serie tv -->
          </div>
        </section>

        <button class="btn d-lg-none mt-4" :class="{ 'showIt': this.$windowHeight < 1065 }"
          v-if="store.searchTvResults.length && store.searchMovieResults.length" @click="switchSection()">
          {{ store.btnMessage }}
        </button>

      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
// USES
@use "../assets/scss/partials/animations" as *;
@use "../assets/scss/partials/variables" as *;
// /USES

main {
  width: 70%;

  button {
    background-color: $main-color;
    color: $text-color;
    width: fit-content;

    &:hover {
      color: $text-color;
      background-color: $highlighted-btn;
    }
  }
}

.showIt {
  display: block !important;
}
</style>
