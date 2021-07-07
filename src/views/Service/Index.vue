<template>
    <div class="overflow-x-hidden">
        <First />
        <Bacon />
        <Menu />
    </div>
</template>

<script>
import First from './First.vue'
import Bacon from './Bacon.vue'
import Menu from '../Home/Menu.vue'

    export default {
        components: {
            First,
            Bacon,
            Menu
        }
    }
</script>

<style lang="postcss" scoped>

</style>