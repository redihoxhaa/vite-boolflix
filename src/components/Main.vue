<script>
// IMPORTS
import List from './List.vue';
import { store } from '../store';

// /IMPORTS

export default {
  props: [],
  components: { List },
  data() {
    return {
      store,

    }
  },

  mounted() { },
}
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <!-- Scheda film -->
        <List :arrayToSearchIn="store.searchMovieResults" :titleKey="store.movieTitleKey"
          :originalTitleKey="store.movieOrginalTitleKey" :sectionTitle="'Film'" />
        <!-- /Scheda film -->

        <!-- Scheda serie tv -->
        <List :arrayToSearchIn="store.searchTvResults" :titleKey="store.tvTitleKey"
          :originalTitleKey="store.tvOrginalTitleKey" :sectionTitle="'Serie TV'" />
        <!-- /Scheda serie tv -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
// USES
// /USES

.container {
  height: 75vh;

}
</style>
