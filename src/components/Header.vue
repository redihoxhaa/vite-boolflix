<script>
// IMPORTS
import Logo from './Logo.vue';
import SearchBar from './SearchBar.vue';
import { store } from '../store';


// /IMPORTS

export default {
    props: [],
    components: {
        Logo, SearchBar
    },
    data() {
        return {
            store
        }
    },
    methods: {},
    mounted() { },
}
</script>

<template>
    <header class="mb-5 mt-5"
        :class="{ 'go-above': store.searchMovieResults.length !== 0 || store.searchTvResults.length !== 0 }">
        <Logo />
        <SearchBar />
    </header>
</template>

<style lang="scss" scoped>
// USES
header {
    transition: all 1s ease-out;
    position: absolute;
    z-index: 20;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);


}

.go-above {
    top: 160px;
}

// /USES
</style>
