<script>
// IMPORTS
import { store } from '../store';
import GenreSelection from "./GenreSelection.vue";
import ListElement from './ListElement.vue';

// /IMPORTS

export default {
    props: ['arrayToSearchIn', 'titleKey', 'originalTitleKey', 'sectionTitle', 'moreResultsFunction', 'operasLeft', 'genreArray', 'type'],
    components: { ListElement, GenreSelection },
    data() {
        return {
            store

        }
    },
    methods: {

    },
    mounted() { },
}
</script>

<template>
    <div class="col-12 ">
        <header class="mb-1 d-flex justify-content-center">
            <h2>{{ sectionTitle }}</h2>
        </header>

        <GenreSelection :genreArray="this.genreArray" :arrayToSearchIn="this.arrayToSearchIn" :type="this.type" />
        <ul class="col-12 d-flex align-items-center pb-3">
            <li v-for="result in arrayToSearchIn" class="col-12 col-md-6 col-lg-4 col-xl-3">
                <ListElement :titleKey="result[titleKey]" :originalTitleKey="result[originalTitleKey]"
                    :posterPath="result.poster_path" :language="result.original_language" :vote="result.vote_average"
                    :overview="result.overview" :type="this.type" :genre="result.genre_ids" />
            </li>
            <li><button class="load-more-btn btn ms-2 me-4" v-if="arrayToSearchIn.length > 19"
                    :class="{ shake: operasLeft }" @click="moreResultsFunction">+</button></li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
// USES
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/reset';
@use '../assets/scss/partials/animations' as *;

// /USES

header {
    width: 100%;
    padding: 5px 0;
    border-radius: 20px;
    position: relative;

    h2 {

        color: $text-color;
        background-color: $bg-color;
        padding: 0 30px;

        &::after,
        &::before {
            content: "";
            position: absolute;
            z-index: -4;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 50%;
            height: 2px;
            background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(252, 176, 69, 0) 100%);

        }

        &::before {
            left: unset;
            right: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(252, 176, 69, 0) 100%);
        }
    }
}



ul {
    overflow-x: scroll;


    button {
        background-color: $main-color;
        color: $text-color;
        padding-top: 3px;

        &:hover {
            background-color: $highlighted-btn;
            color: $text-color;
        }
    }
}
</style>
