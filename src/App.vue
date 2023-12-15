<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

import { store } from './store';

export default {
  data() {
    return {
      store,

    }
  },
  components: { Header, Main }
}
</script>

<template>
  <div class="container d-flex flex-column align-items-center justify-content-center">
    <Header />
    <Main v-if="store.searchMovieResults.length !== 0 || store.searchTvResults.length !== 0" />
  </div>
</template>

<style lang="scss" scoped>
//USES

@use './assets/scss/partials/variables' as *;

// /USES

.container {
  width: 100vw;
  height: 100vh;

}
</style>
