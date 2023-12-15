<script>
// IMPORTS
import { store } from '../store';
import ListElement from './ListElement.vue';

// /IMPORTS

export default {
    props: ['arrayToSearchIn', 'titleKey', 'originalTitleKey'],
    components: { ListElement },
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
    <div class="card col-6" v-if="arrayToSearchIn.length !== 0">
        <ul>
            <li v-for="result in arrayToSearchIn">
                <ListElement :titleKey="result[titleKey]" :originalTitleKey="result[originalTitleKey]"
                    :posterPath="result.poster_path" :language="result.original_language" :vote="result.vote_average" />
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>
