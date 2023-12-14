import { reactive } from 'vue'

export const store = reactive({
    moviesAPI: 'https://api.themoviedb.org/3/search/movie',
    searchKey: '',
});

