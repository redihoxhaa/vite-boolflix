<script>
// IMPORTS
import Logo from './Logo.vue';
import SearchBar from './SearchBar.vue';
import { store } from '../store';
import AOS from 'aos';


// /IMPORTS

export default {
    props: [],
    components: {
        Logo, SearchBar
    },
    data() {
        return {
            store,

        }
    },
    methods: {
    },
    mounted() {
        AOS.init();
    },
}
</script>

<template>
    <div class="wrapper"
        :class="{ 'container': store.searchMovieResults.length !== 0 || store.searchTvResults.length !== 0 }">
        <header data-aos="fade-up" data-aos-duration="2000" class=" d-flex flex-column gap-4"
            :class="{ 'minimized': store.searchMovieResults.length !== 0 || store.searchTvResults.length !== 0 }">
            <Logo />
            <SearchBar />
        </header>
    </div>
</template>

<style lang="scss" scoped>
// USES
// /USES
.wrapper {
    position: relative;

    header {
        width: 87%;
        transition: all 1s ease-out;
    }
}



.minimized {
    width: 100%;
    height: 50px;
    flex-direction: row !important;
    justify-content: space-between;
    align-items: center;
}

.container {
    height: unset !important;
}

@media screen and (max-width: 991.98px) {
    .minimized {
        flex-direction: column !important;
        justify-content: flex-start !important;
        height: unset;
    }

}
</style>
