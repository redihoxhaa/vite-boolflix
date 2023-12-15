<script>
// IMPORTS
import { store } from '../store';

// /IMPORTS

export default {
    props: ['titleKey', 'originalTitleKey', 'posterPath', 'vote', 'language'],
    components: {},
    data() {
        return {
            store
        }
    },
    computed: {

        from10to5rate() {
            return Math.ceil(this.vote * 5 / 10)
        }
    },
    methods: {
        getFlag(lang) {
            const result = store.languageMapping[lang];
            if (!!result) {
                return result
            }
            return false

        },

    },
    mounted() {
    },
}
</script>

<template>
    <div class="pic-container">
        <img :src="store.posterURL + posterPath" :alt="'Copertina' + titleKey" v-if="posterPath !== null">
        <img src="../assets/img/blank_poster.png" alt="Default poster image" v-else>
    </div>
    <h2 class="opera-title">{{ titleKey }}</h2>
    <h5 class="opera-original-title" v-if="originalTitleKey !== titleKey">Titolo originale: {{
        originalTitleKey }}</h5>
    <span :class="`fi fir fi-${getFlag(language)}`" v-if="getFlag(language)"></span>
    <!-- Puoi provare a cercare 'guarani' -->
    <p class="opera-language" v-else>{{ language.toUpperCase() }}</p>
    <div class="opera-rate">
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in  from10to5rate" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - from10to5rate" />
        <span v-if="from10to5rate === 0">Questo è sicuramente un film di nicchia 😂</span>
    </div>
</template>

<style lang="scss" scoped>
// USES

@use '../assets/scss/partials/variables' as *;

// /USES

.fi.fir {

    width: 60px !important;
    height: 45px;
    background-size: cover;

}

.fa-star {
    color: $star-color;
}
</style>
