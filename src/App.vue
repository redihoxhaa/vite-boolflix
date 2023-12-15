<script>
import Header from './components/Header.vue'
import ListsBoard from './components/ListsBoard.vue'

import { store } from './store';

export default {
  data() {
    return {
      store,

    }
  },
  components: { Header, ListsBoard }
}
</script>

<template>
  <Header />
  <ListsBoard />
</template>

<style lang="scss" scoped></style>
