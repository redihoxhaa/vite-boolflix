<script>
// IMPORTS
import { store } from '../store';

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
    getFlag(lang) {
      const result = store.languageMapping[lang];
      if (!!result) {
        return result
      }
      return false

    },

    from10to5rate(rate) {
      return Math.ceil(rate * 5 / 10)

    }
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
            <div class="pic-container">
              <img :src="store.coverURL + result.poster_path" :alt="'Copertina' + result.title">
            </div>
            <h2 class="opera-title">{{ result.title }}</h2>
            <h5 class="opera-original-title">Titolo originale: {{ result.original_title }}</h5>
            <span :class="`fi fis fi-${getFlag(result.original_language)}`"
              v-if="getFlag(result.original_language)"></span>
            <!-- Puoi provare a cercare 'swahili' -->
            <p class="opera-language" v-else>Non ho trovato la bandiera di {{ result.original_language }}</p>
            <div class="opera-rate">
              <font-awesome-icon icon="fa-solid fa-star" v-for="n in from10to5rate(result.vote_average)" />
              <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - from10to5rate(result.vote_average)" />
              <span v-if="from10to5rate(result.vote_average) === 0">Questo è sicuramente un film di nicchia 😂</span>
            </div>
          </li>
        </ul>
      </div>
      <!-- /Scheda film -->

      <!-- Scheda serie tv -->
      <div class="tv-shows card col-6" v-if="store.searchTvResults.length !== 0">
        <ul>
          <li v-for="result in store.searchTvResults">
            <div class="pic-container">
              <img :src="store.coverURL + result.poster_path" :alt="'Copertina di ' + result.name">
            </div>
            <h2 class="opera-title">{{ result.name }}</h2>
            <h5 class="opera-original-title">Titolo originale: {{ result.original_name }}</h5>
            <span :class="`fi fis fi-${getFlag(result.original_language)}`"
              v-if="getFlag(result.original_language)"></span>
            <!-- Puoi provare a cercare 'swahili' -->
            <p class="opera-language" v-else>Non ho trovato la bandiera di {{ result.original_language }}</p>
            <div class="opera-rate">
              <font-awesome-icon icon="fa-solid fa-star" v-for="n in from10to5rate(result.vote_average)" />
              <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - from10to5rate(result.vote_average)" />
              <span v-if="from10to5rate(result.vote_average) === 0">Questo è sicuramente un film di nicchia 😂</span>
            </div>
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
