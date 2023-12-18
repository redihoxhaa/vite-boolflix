<script>
// IMPORTS
import { store } from '../store';


// /IMPORTS

export default {
    props: ['genreArray', 'type'],
    components: {},
    data() {
        return {
            store,
            didICheck: true,
        }
    },
    methods: {
        filterResults() {

            if (this.type === 'movie') {

                store.filteredMovies = store.searchMovieResults.filter(opera => {
                    return store.checkedMovieGenres.every(elem => opera.genre_ids.includes(elem));
                })
            } else {
                store.filteredTvs = store.searchTvResults.filter(opera => {
                    return store.checkedTvGenres.every(elem => opera.genre_ids.includes(elem))
                })
            }

        },

        checkToggle(id, event) {
            let array = store.checkedMovieGenres;
            if (this.type === 'tv') {
                array = store.checkedTvGenres
            }

            if (!array.includes(id)) {
                array.push(id);
            } else {
                array.splice(array.indexOf(id), 1)
            }

            event.target.classList.toggle('checked')


        }
    },
    mounted() { },
}
</script>

<template>
    <ul class="d-flex gap-2 flex-wrap justify-content-center" :class="{ 'lineIt': this.$windowHeight < 1065 }">
        <li class="" v-for="(genre) in this.genreArray">
            <button class="btn genre-btn text-uppercase" :class="{ 'checked': !didICheck }"
                @click="checkToggle(genre.id, $event); filterResults()">
                {{ genre.name }}
            </button>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
// USES

@use '../assets/scss/partials/variables' as *;

ul {

    overflow-x: scroll;

    .genre-btn {
        background-color: transparent;
        box-shadow: inset 0px 0px 0px 1px $input-border-color;
        color: $text-color;
        font-size: 0.75rem;
        padding: 2px 10px;
        border-radius: 7px;
        white-space: nowrap;

        &:hover {
            background-color: $secondary-text-color;
        }
    }

    .checked {
        background-color: $main-color;
        box-shadow: none;

        &:hover {
            background-color: $highlighted-btn;
        }
    }
}

.lineIt {
    flex-wrap: nowrap !important;
    padding-bottom: 20px;
    margin-bottom: 10px;
    justify-content: start !important;
}

// /USES
</style>
