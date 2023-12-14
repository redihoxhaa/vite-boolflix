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
      store

    }
  },
  methods: {
    getFlag(lang) {
      const result = store.languageMapping[lang];
      if (!!result) {
        return result
      }
      return false

    },
  },
  mounted() { },
}
</script>

<template>
  <div class="container">
    <div class="row">
      <!-- Scheda film -->
      <div class="movies card col-6" v-if="store.searchMovieResults.length !== 0">
        <ul>
          <li v-for="result in store.searchMovieResults">
            <h2 class="opera-title">{{ result.title }}</h2>
            <h5 class="opera-original-title">Titolo originale: {{ result.original_title }}</h5>
            <span :class="`fi fis fi-${getFlag(result.original_language)}`"
              v-if="getFlag(result.original_language)"></span>
            <!-- Puoi provare a cercare 'swahili' -->
            <p class="opera-language" v-else>Non ho trovato la bandiera di {{ result.original_language }}</p>
            <p class="opera-rate">Voto {{ result.vote_average }}</p>
          </li>
        </ul>
      </div>
      <!-- /Scheda film -->

      <!-- Scheda serie tv -->
      <div class="tv-shows card col-6" v-if="store.searchTvResults.length !== 0">
        <ul>
          <li v-for="result in store.searchTvResults">
            <h2 class="opera-title">{{ result.name }}</h2>
            <h5 class="opera-original-title">Titolo originale: {{ result.original_name }}</h5>
            <span :class="`fi fis fi-${getFlag(result.original_language)}`"
              v-if="getFlag(result.original_language)"></span>
            <!-- Puoi provare a cercare 'swahili' -->
            <p class="opera-language" v-else>Non ho trovato la bandiera di {{ result.original_language }}</p>
            <p class="opera-rate">Voto {{ result.vote_average }}</p>
          </li>
        </ul>
      </div>
      <!-- /Scheda serie tv -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
// USES

// /USES

.fi.fis {

  width: 60px !important;
  height: 60px;
  background-size: cover;

}

.movies {}

.tv-shows {}
</style>
