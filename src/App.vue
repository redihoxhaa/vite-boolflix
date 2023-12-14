<script>
import SearchBar from './components/SearchBar.vue'
import List from './components/List.vue'

import { store } from './store';

export default {
  data() {
    return {
      store,

    }
  },
  components: { SearchBar, List }
}
</script>

<template>
  <SearchBar />
  <List />
</template>

<style lang="scss" scoped></style>
