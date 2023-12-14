<script>
// IMPORTS
import { store } from '../store';


// /IMPORTS

export default {
  props: [],
  components: {},
  data() {
    return {
      store

    }
  },
  methods: {},
  mounted() { },
}
</script>

<template>
  <ul v-if="store.searchResults.length !== 0">
    <li v-for="result in store.searchResults">
      <h2 class="opera-title">{{ result.title }}</h2>
      <h3 class="opera-original-title">{{ result.original_title }}</h3>
      <p class="opera-language">{{ result.original_language }}</p>
      <p class="opera-rate">{{ result.vote_average }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>
