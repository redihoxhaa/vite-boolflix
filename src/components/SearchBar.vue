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
    }
  },
  methods: {
    searchTerm() {
      axios.get(store.moviesAPI, {
        params: {
          api_key: 'c102053cc7cdde6f47ccfb1d24cbd4e6',
          language: store.searchLanguage,
          query: store.searchKey,
        }
      }).then(response => {
        store.searchResults = response.data.results;
      })
    }
  },
  mounted() {
  },
}
</script>

<template>
  <div class="container">
    <div class="input-group mt-5">
      <input type=" text" class="form-control" placeholder="Cosa vuoi guardare oggi?"
        aria-label="Cosa vuoi guardare oggi?" aria-describedby="button-addon2" v-model="store.searchKey">
      <button class="btn btn-outline-secondary" type="button" id="search-btn" @click="searchTerm()">Cerca</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>
