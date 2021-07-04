<template>
    <div class="mobile-container">
        <h1 @click="closeMenu()" class="text-white text-right p-4 font-black">X</h1>
        <HeaderLinks @close-mobile="closeMenu()" class="mobile-links" />
        <img src="../../assets/logo_white.svg" class="h-52 mt-16 mx-auto self-end justify-self-end" />
    </div>
</template>

<script>
import HeaderLinks from './HeaderLinks.vue'
import { defineComponent } from 'vue'
    export default defineComponent ({
        components: {
            HeaderLinks
        },
        setup(props, { emit }) {
            const closeMenu = () => {
                emit('close-menu')
            }

            return { 
                closeMenu
            }
        }
    })
</script>

<style lang="postcss" scoped>
    @layer components {
        .mobile-container {
            @apply w-screen h-screen inset-0 fixed flex flex-col;
            background-image: url("../../assets/background_cartes.png");
            background-color: #6b3a0b;
        }

        .mobile-links {
            @apply flex flex-col items-center justify-center
        }
    }
</style>
