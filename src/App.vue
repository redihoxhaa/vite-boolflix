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
  components: { Header, Main },
  methods: {

  },

}
</script>
<template>
  <ul class="dimensions">
    <li>Window width is: {{ $windowWidth }}</li>
  </ul>
  <div class="wrapper">
    <div class="container d-flex flex-column align-items-center justify-content-center">
      <Header />
      <Main v-if="store.searchMovieResults.length !== 0 || store.searchTvResults.length !== 0" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
//USES

@use './assets/scss/partials/variables' as *;

// /USES
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dimensions {
  position: absolute;
  top: 0;
  left: 50%;
  font-size: 1rem;
  color: white;
}
</style>
