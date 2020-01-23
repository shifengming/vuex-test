<template>
    <div>
        <!-- 这是modules state -->
        <button @click="add">+</button>
        {{$store.state.count}}
        <button @click="minus">-</button>
    </div>
</template>

<script>
    // import {mapActions} from 'vuex'
    export default{
        methods: {
        // mapActions([
        //     'increment',
        //     'decrement'
        // ])
        // {
            add() {
                this.$store.dispatch('increment')
            },
            minus(){
                this.$store.dispatch('decrement')
            }
        },
    }
</script>
<style scoped>

</style>