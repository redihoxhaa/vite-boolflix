<script>
// IMPORTS
import { store } from '../store';


// /IMPORTS

export default {
    props: ['titleKey', 'originalTitleKey', 'overview', 'posterPath', 'vote', 'language'],
    components: {},
    data() {
        return {
            store,
            moreInfo: false,
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

        showMoreInfo() {
            this.moreInfo = !this.moreInfo
        }

    },
    mounted() {
    },
}
</script>

<template>
    <div class="wrapper">
        <div class="pic-container">
            <div class="border"></div>
            <img :src="store.posterURL + posterPath" :alt="'Copertina ' + titleKey" v-if="posterPath !== null">
            <img src="../assets/img/blank_poster.png" alt="Default poster image" v-else>
            <div class="opera-info d-flex flex-column align-items-center justify-content-center p-4 text-center"
                :class="{ 'get-opacity': posterPath === null }">
                <h2 class="opera-title mb-2">{{ titleKey }}</h2>
                <h5 class="opera-original-title text-uppercase mb-3" v-if="originalTitleKey !== titleKey">Titolo
                    originale: {{
                        originalTitleKey }}</h5>
                <p class="overview pe-2" v-if="moreInfo === false">{{ overview }}</p>
                <div class="more-infos mb-2 d-flex flex-columns text-center" v-else>
                    <span class="genre">Prova</span>
                    <span class="actors">Prova</span>
                </div>
                <div class="shadow-layer"></div>
                <span :class="`fi fir fi-${getFlag(language)}`" v-if="getFlag(language)"></span>
                <!-- Puoi provare a cercare 'guarani' -->
                <p class="opera-language" v-else>{{ language.toUpperCase() }}</p>
                <div class="opera-rate">
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in  from10to5rate" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - from10to5rate" />
                    <div v-if="from10to5rate === 0" class="mt-2">Questo è sicuramente un'opera di nicchia 😂</div>
                </div>
                <button type="button" class="more-info-btn btn mt-3" @click="showMoreInfo()">
                    <span>ALTRE INFO</span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// USES

@use '../assets/scss/partials/variables' as *;

// /USES

.wrapper {
    padding: 15px;

    .pic-container {
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        border: 0px solid transparent;


        .border {
            box-shadow: inset 0px 0px 0px 2px $secondary-text-color;
            position: absolute;
            inset: 0 0 0 0;
            z-index: 5;
            border-radius: 20px;
            opacity: 0;
            pointer-events: none;
        }

        &:hover .border {
            opacity: 1;
        }


        &:hover .opera-info {
            opacity: 1;
        }

        &:hover img {
            opacity: 0;

        }

        img {
            width: 100%;
            opacity: 1;
            aspect-ratio: 2 / 3;
            object-fit: cover;
            transition: opacity 0.5s;

        }

        .opera-info {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.5s;

            h2 {
                color: $text-color;
                font-size: 1.25rem;
            }

            h5,
            .opera-language {
                color: $input-border-color;

            }

            h5 {
                font-size: 0.75rem;
            }

            .overview {
                color: $text-color;
                opacity: 0.9;
                max-height: 50%;
                overflow-y: auto;
                font-size: .875rem;
            }

            .more-infos {
                color: $text-color;
                font-size: .875rem;
            }



            .opera-rate {
                color: $input-border-color;
            }

            .more-info-btn {
                background-color: $main-color;
                color: $text-color;
                font-size: 0.75rem;
                padding: 5px 10px;
                position: relative;
                border-radius: 7px;

                &:hover {
                    background-color: $highlighted-btn;
                }
            }

            .shadow-layer {

                background: linear-gradient(0deg, rgba(12, 12, 12, 1) 60%, rgba(252, 176, 69, 0) 100%);
                position: absolute;
                inset: 0 0 0;
                width: 100%;
                height: 100%;
                z-index: -1;
            }

            .fi.fir {
                opacity: 0.5;
                width: 100% !important;
                height: 100%;
                background-position: 0 0px;
                background-size: contain;
                position: absolute;
                inset: 0 0 0;
                z-index: -2;

            }

            .fa-star {
                color: $star-color;
            }
        }

    }

}

.get-opacity {
    opacity: 1 !important;
}
</style>
