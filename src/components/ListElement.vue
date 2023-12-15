<script>
// IMPORTS
import { store } from '../store';
import axios from 'axios';

// /IMPORTS

export default {
    props: ['arrayToSearchIn', 'titleKey', 'originalTitleKey'],
    components: {},
    data() {
        return {
            store
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

        from10to5rate(rate) {
            return Math.ceil(rate * 5 / 10)

        },


    },
    mounted() {
    },
}
</script>

<template>
    <li v-for="result in arrayToSearchIn">
        <div class="pic-container">
            <img :src="store.posterURL + result.poster_path" :alt="'Copertina' + result[titleKey]"
                v-if="result.poster_path !== null">
            <img src="../assets/img/blank_poster.png" alt="Default poster image" v-else>
        </div>
        <h2 class="opera-title">{{ result[titleKey] }}</h2>
        <h5 class="opera-original-title" v-if="result[originalTitleKey] !== result[titleKey]">Titolo originale: {{
            result[originalTitleKey] }}</h5>
        <span :class="`fi fir fi-${getFlag(result.original_language)}`" v-if="getFlag(result.original_language)"></span>
        <!-- Puoi provare a cercare 'guarani' -->
        <p class="opera-language" v-else>{{ result.original_language.toUpperCase() }}</p>
        <div class="opera-rate">
            <font-awesome-icon icon="fa-solid fa-star" v-for="n in from10to5rate(result.vote_average)" />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - from10to5rate(result.vote_average)" />
            <span v-if="from10to5rate(result.vote_average) === 0">Questo è sicuramente un film di nicchia 😂</span>
        </div>
    </li>
</template>

<style lang="scss" scoped>
// USES

.fi.fir {

    width: 60px !important;
    height: 45px;
    background-size: cover;

}

// /USES
</style>
