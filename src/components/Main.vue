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

      currentSelection: '',

    }
  },
  methods: {
    switchSection() {

    }
  },
  mounted() { },
}
</script>

<template>
  <main>
    <TransitionGroup tag="ul" name="fade" class="container">
      <div class="row g-2">

        <section class="movies">
          <div class="wrapper" data-aos="fade-right" data-aos-duration="2000"
            v-if="store.searchMovieResults.length !== 0">
            <!-- Scheda film -->
            <List :arrayToSearchIn="store.searchMovieResults" :titleKey="store.movieTitleKey"
              :originalTitleKey="store.movieOrginalTitleKey" :sectionTitle="'Film'" />
            <!-- /Scheda film -->
          </div>
        </section>


        <section class="tv-shows d-flex justify-content-center">
          <div class="wrapper d-none d-lg-block" data-aos="fade-left" data-aos-duration="2000"
            v-if="store.searchTvResults.length !== 0">
            <!-- Scheda serie tv -->
            <List :arrayToSearchIn="store.searchTvResults" :titleKey="store.tvTitleKey"
              :originalTitleKey="store.tvOrginalTitleKey" :sectionTitle="'Serie TV'" />
            <!-- /Scheda serie tv -->

          </div>
          <button class="btn btn-danger d-lg-none mt-4" v-if="store.searchTvResults.length !== 0"
            @click="switchSection()">{{ btnMessage }}</button>
        </section>

      </div>

    </TransitionGroup>
  </main>
</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/animations' as *;
// /USES

main {
  width: 87%;

  .container {
    height: unset;
  }


}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
