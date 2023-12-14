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
            <ListElement :arrayToSearchIn="this.arrayToSearchIn" :titleKey="this.titleKey"
                :originalTitleKey="this.originalTitleKey" />
        </ul>
    </div>
</template>

<style lang="scss" scoped>
// USES



// /USES
</style>
