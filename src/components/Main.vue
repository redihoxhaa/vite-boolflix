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

    // Funzione per caricare più film
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

    // Funzione per caricare più serie tv
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

    // Funzione per passare da film a serie tv
    switchSection() {
      store.showFilm = !store.showFilm;
      store.showTv = !store.showTv;
      store.showFilm ? store.btnMessage = 'Passa alle Serie TV' : store.btnMessage = 'Passa ai Film';
      /* 
            if (store.priorityShow === 'tvs') {
              store.priorityShow = 'movies'
            } else {
              store.priorityShow = 'tvs'
              store.showTv = true;
            }
      
          }, */
      /*    checkMessage() {
           if (store.searchMovieResults.length && store.searchMovieResults.length && store.priorityShow === 'movies') { store.btnMessage = 'Passa alle Serie TV' }
         } */


    }
  }
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row g-2 d-flex justify-content-center">

        <!-- Scheda film -->
        <section class="movies" v-if="store.searchMovieResults.length && store.showFilm">
          <div class="wrapper d-lg-block" data-aos="fade-right" data-aos-duration="2000">

            <List :arrayToSearchIn="store.filteredMovies" :titleKey="store.movieTitleKey"
              :originalTitleKey="store.movieOrginalTitleKey" :sectionTitle="'Film'" :moreResultsFunction="loadMoreMovies"
              :operasLeft="store.noMoviesLeft" :genreArray="store.movieGenres" :type="'movie'" />

          </div>
        </section>
        <!-- /Scheda film -->

        <!-- Scheda serie tv -->
        <section class="tv-shows" v-if="store.searchTvResults.length && store.showTv">
          <div class="wrapper d-lg-block" data-aos="fade-left" data-aos-duration="2000">


            <List :arrayToSearchIn="store.filteredTvs" :titleKey="store.tvTitleKey"
              :originalTitleKey="store.tvOrginalTitleKey" :sectionTitle="'Serie TV'" :moreResultsFunction="loadMoreTvs"
              :operasLeft="store.noTvsLeft" :genreArray="store.tvGenres" :type="'tv'" />

          </div>
        </section>
        <!-- /Scheda serie tv -->

        <!-- Pulsante per switchare sezione -->
        <button class="btn d-lg-none mt-4" :class="{ 'showIt': this.$windowHeight < 844 }"
          v-if="store.searchTvResults.length && store.searchMovieResults.length" @click="switchSection()">
          {{ store.btnMessage }}
        </button>
        <!-- Pulsante per switchare sezione -->

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
  width: 100%;

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
