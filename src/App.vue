<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import AOS from 'aos';
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
  mounted() {
    AOS.init();
  }

}
</script>
<template>
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
</style>
