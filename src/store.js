import { reactive } from 'vue'

export const store = reactive({
    moviesAPI: 'https://api.themoviedb.org/3/search/movie',
    searchResults: [],
    searchLanguage: 'it-IT',
    searchKey: '',
    currentPage: 1,
});

