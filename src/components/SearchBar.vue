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
          query: store.searchKey,
        }
      }).then(response => {
        console.log(response)
      })
    }
  },
  mounted() {
    this.searchTerm();
  },
}
</script>

<template></template>

<style lang="scss" scoped>
// USES



// /USES
</style>
