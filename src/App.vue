<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import AOS from 'aos';
import { store } from './store';

export default {
  data() {
    return {
      store,
      currentSection: 'movies',
    }
  },
  components: { Header, Main },
  computed: {
    checkSliders() {
      return {
        windowWidth: this.$windowWidth,
        windowHeight: this.$windowHeight,
        movieResultsLength: store.searchMovieResults.length,
        tvResultsLength: store.searchTvResults.length
      };
    }
  },

  watch: {
    checkSliders: {
      handler() {
        this.updateSliders();
      },
      deep: true
    }
  },
  methods: {

    // Funzione per passare da film a serie tv
    switchSection() {
      store.showFilm = !store.showFilm;
      store.showTv = !store.showTv;
      store.showFilm ? store.btnMessage = 'Passa alle Serie TV' : store.btnMessage = 'Passa ai Film';

      if (this.currentSection === 'movies') {
        this.currentSection = 'tvs';
      } else {
        this.currentSection = 'movies';
      }
    },

    // Funzione per tenere traccia del resize e modifica la visibilità degli elementi
    updateSliders() {

      if (this.$windowWidth >= store.mobileWidth && this.$windowHeight >= store.mobileHeight) {
        store.showFilm = store.searchMovieResults.length > 0;
        store.showTv = store.searchTvResults.length > 0;
        // Quando siamo in mobile
      } else if (this.$windowWidth < store.mobileWidth || this.$windowHeight < store.mobileHeight) {
        // FILM SI E TV NO
        if (store.searchMovieResults.length && !store.searchTvResults.length) {
          store.showFilm = true;
          store.showTv = false;
          // FILM NO E TV SI
        } else if (!store.searchMovieResults.length && store.searchTvResults.length) {
          store.showFilm = false;
          store.showTv = true;
          // FILM SI E TV SI
        } else if (store.searchMovieResults.length && store.searchTvResults.length) {
          if (this.currentSection === 'tvs') {
            store.showTv = true;
            store.showFilm = false;
          } else {
            this.currentSection = 'movies';
            store.showFilm = true;
            store.showTv = false;

          }
        }
      }
    },

  },
  mounted() {
    AOS.init();
    this.updateSliders();
  }
}
</script>
<template>
  <div :class="{ wrapper: store.firstClick }">
    <div class="container d-flex flex-column align-items-center justify-content-center py-5">
      <Header />
      <Main v-if="store.searchMovieResults.length !== 0 || store.searchTvResults.length !== 0"
        @switchIt="switchSection()" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
//USES

@use './assets/scss/partials/variables' as *;

// /USES
.wrapper {
  width: 100vw;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
