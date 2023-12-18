<script>
// IMPORTS
import axios from "axios";
import { store } from "../store";

// /IMPORTS

export default {
  props: ["titleKey", "originalTitleKey", "overview", "posterPath", "vote", "language", "type", "genre", "operaID"],
  components: {},
  data() {
    return {
      store,
      moreInfo: false,
      operaActors: '',
      operaGenres: '',
    };
  },
  computed: {

    // Computed property per convertire voto da 1 a 10 a 1 a 5
    from10to5rate() {
      return Math.ceil((this.vote * 5) / 10);
    },
  },
  methods: {

    // Funzione per convertire lingua in bandiera
    getFlag(lang) {
      const result = store.languageMapping[lang];
      if (!!result) {
        return result;
      }
      return false;
    },

    // Funzione per gestire variabile di stato del pulsante per mostrare più info nella scheda opera
    showMoreInfo() {
      this.moreInfo = !this.moreInfo;
    },

    // Funzione per ricavare i generi nella scheda opera
    getOperaGenres() {
      if (this.type === 'movie') {
        if (!this.genre || this.genre.length === 0) {
          return
        }

        const movieGenres = [];

        this.genre.forEach(genreId => {
          const foundGenre = store.movieGenres.find(genre => genre.id === genreId);
          if (foundGenre) {
            movieGenres.push(foundGenre.name);
          } else {
            movieGenres.push('Genere sconosciuto');
          }
        });

        this.operaGenres = movieGenres.join(', ');
      }

      else {

        if (!this.genre || this.genre.length === 0) {
          return 'Nessun genere disponibile';
        }

        const tvGenres = [];

        this.genre.forEach(genreId => {
          const foundGenre = store.tvGenres.find(genre => genre.id === genreId);
          if (foundGenre) {
            tvGenres.push(foundGenre.name);
          } else {
            tvGenres.push('Genere sconosciuto');
          }
        });

        this.operaGenres = tvGenres.join(', ');

      }

    },

    // Funzione per ricavare gli attori nella scheda opera
    getActors() {
      if (this.type === 'movie') {
        axios.get(`https://api.themoviedb.org/3/movie/${this.operaID}/credits?num=20&offset=0`, {
          params: {
            api_key: "c102053cc7cdde6f47ccfb1d24cbd4e6",
            language: 'it'
          }
        }).then(response => {
          response.data.cast.splice(5, response.data.cast.length);
          const movieActors = response.data.cast.map(element => element.name);

          this.operaActors = movieActors.join(', ');
        });
      } else {
        axios.get(`https://api.themoviedb.org/3/tv/${this.operaID}/credits?num=20&offset=0`, {
          params: {
            api_key: "c102053cc7cdde6f47ccfb1d24cbd4e6",
            language: 'it'
          }
        }).then(response => {
          response.data.cast.splice(5, response.data.cast.length);
          const tvActors = response.data.cast.map(element => element.name);

          this.operaActors = tvActors.join(', ');
        });
      }
    }
  },
  mounted() {
    this.getActors();
    this.getOperaGenres()
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="pic-container">
      <div class="border"></div>
      <img :src="store.posterURL + posterPath" :alt="'Copertina ' + titleKey" v-if="posterPath !== null" />
      <img src="../assets/img/blank_poster.png" alt="Default poster image" v-else />
      <div class="opera-info d-flex flex-column align-items-center justify-content-center p-4 text-center"
        :class="{ 'get-opacity': posterPath === null }">
        <h2 class="opera-title mb-2">{{ titleKey }}</h2>
        <h5 class="opera-original-title text-uppercase mb-2" v-if="originalTitleKey !== titleKey && moreInfo === false">
          Titolo originale: {{
            originalTitleKey }}</h5>
        <p class="overview pe-2 mb-1" v-if="moreInfo === false">{{ overview }}</p>
        <div class="more-infos mb-2 d-flex flex-column text-center" v-else>
          <span class="genres mb-3 mt-2" v-if="this.operaGenres !== ''">{{ operaGenres }}</span>
          <div class="cast-section" v-if="this.operaActors !== ''">
            <span class="cast">CAST</span>
            <span class="actors">{{ operaActors }}</span>
          </div>
        </div>
        <div class="shadow-layer"></div>
        <span :class="`fi fir fi-${getFlag(language)}`" v-if="getFlag(language)"></span>
        <!-- Puoi provare a cercare 'guarani' -->
        <p class="opera-language" v-else>{{ language.toUpperCase() }}</p>
        <div class="opera-rate mt-2">
          <font-awesome-icon icon="fa-solid fa-star" v-for="n in from10to5rate" />
          <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - from10to5rate" />

        </div>
        <button type="button" class="more-info-btn btn mt-3" @click="showMoreInfo();"
          v-if="operaGenres !== '' && operaActors !== ''">
          <span>ALTRE INFO</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// USES

@use "../assets/scss/partials/variables" as *;

// /USES

.wrapper {
  padding: 15px;

  .pic-container {
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    transition: all 0.5s;
    border: 0px solid transparent;

    .border {
      box-shadow: inset 0px 0px 0px 2px $secondary-text-color;
      position: absolute;
      inset: 0 0 0 0;
      z-index: 5;
      border-radius: 15px;
      opacity: 0;
      pointer-events: none;
    }

    &:hover {
      transform: scale(1.05);
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
        font-size: 0.875rem;
        margin-bottom: 15px;
      }

      .more-infos {
        color: $text-color;
        font-size: 0.875rem;

        .cast {
          display: block;
          color: $text-color;
          position: relative;

          padding: 0 30px;

          &::after,
          &::before {
            content: "";
            position: absolute;
            z-index: 999;
            top: 48%;
            left: 0;
            transform: translateY(-50%);
            width: 35%;
            height: 2px;
            background: linear-gradient(270deg, rgba(255, 255, 255, 1) 0%, rgba(252, 176, 69, 0) 90%);

          }

          &::before {
            left: unset;
            right: 0;
            background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(252, 176, 69, 0) 90%);
          }
        }
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
