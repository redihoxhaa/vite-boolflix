<script>
// IMPORTS
import List from './List.vue';
import { store } from '../store';
import axios from 'axios';

// /IMPORTS

export default {
  props: [],
  components: { List },
  data() {
    return {
      store,
      currentSelection: '',

    }
  },
  methods: {
    switchSection() {

    },

    loadMoreMovies() {
      store.currentMoviePage++;
      axios.get(store.moviesAPI, {
        params: {
          api_key: 'c102053cc7cdde6f47ccfb1d24cbd4e6',
          language: store.searchLanguage,
          query: store.searchKey,
          page: store.currentMoviePage,
        }
      }).then(response => {
        if (response.data.results.length !== 0) {
          store.searchMovieResults = store.searchMovieResults.concat(response.data.results);
        } else {
          store.noMoviesLeft = true;
          setTimeout(function () {
            store.noMoviesLeft = false;
          }, 500)
        }
      })
    },

    loadMoreTvs() {
      store.currentTVPage++;
      axios.get(store.tvAPI, {
        params: {
          api_key: 'c102053cc7cdde6f47ccfb1d24cbd4e6',
          language: store.searchLanguage,
          query: store.searchKey,
          page: store.currentTVPage,
        }
      }).then(response => {
        if (response.data.results.length !== 0) {
          store.searchTvResults = store.searchTvResults.concat(response.data.results);
        } else {
          store.noTvsLeft = true;
          setTimeout(function () {
            store.noTvsLeft = false;
          }, 500)
        }
      })
    },
  },
  mounted() { },
}
</script>

<template>
  <main>
    <div class="container">
      <div class="row g-2">

        <section class="movies">
          <div class="wrapper" data-aos="fade-right" data-aos-duration="2000"
            v-if="store.searchMovieResults.length !== 0">
            <!-- Scheda film -->
            <List :arrayToSearchIn="store.searchMovieResults" :titleKey="store.movieTitleKey"
              :originalTitleKey="store.movieOrginalTitleKey" :sectionTitle="'Film'" :moreResultsFunction="loadMoreMovies"
              :operasLeft="store.noMoviesLeft" />
            <!-- /Scheda film -->
          </div>
        </section>


        <section class="tv-shows">
          <div class="wrapper d-none d-lg-block" data-aos="fade-left" data-aos-duration="2000"
            v-if="store.searchTvResults.length !== 0">
            <!-- Scheda serie tv -->
            <List :arrayToSearchIn="store.searchTvResults" :titleKey="store.tvTitleKey"
              :originalTitleKey="store.tvOrginalTitleKey" :sectionTitle="'Serie TV'" :moreResultsFunction="loadMoreTvs"
              :operasLeft="store.noTvsLeft" />
            <!-- /Scheda serie tv -->

          </div>
          <button class="btn btn-danger d-lg-none mt-4" v-if="store.searchTvResults.length !== 0"
            @click="switchSection()">{{ store.btnMessage }}</button>
        </section>

      </div>

    </div>
  </main>
</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/animations' as *;
// /USES

main {
  width: 87%;
}
</style>
