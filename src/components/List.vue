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
  <ul v-if="store.searchResults.length !== 0">
    <li v-for="result in store.searchResults">
      <h2 class="opera-title">{{ result.title }}</h2>
      <h3 class="opera-original-title">{{ result.original_title }}</h3>
      <span :class="`fi fis fi-${getFlag(result.original_language)}`" v-if="getFlag(result.original_language)"></span>
      <!-- Puoi provare a cercare 'swahili' -->
      <p class="opera-language" v-else>Non ho trovato la bandiera di {{ result.original_language }}</p>
      <p class="opera-rate">{{ result.vote_average }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>
