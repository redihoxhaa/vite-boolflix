<script>
import SearchBar from './components/SearchBar.vue'
import ListsBoard from './components/ListsBoard.vue'

import { store } from './store';

export default {
  data() {
    return {
      store,

    }
  },
  components: { SearchBar, ListsBoard }
}
</script>

<template>
  <SearchBar />
  <ListsBoard />
</template>

<style lang="scss" scoped></style>
