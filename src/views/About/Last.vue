<template>
    <section id="last" class="container-last">
        <h1 class="container__title">Prove e tire suas próprias conclusões!</h1>

    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="postcss" scoped>
    @layer components {
        .container-last {
            @apply h-screen w-screen flex items-center justify-center relative z-0;
            background-image: url('../../assets/About/background_last.png');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 40% 50%;
            /* background-position: center; */
        }

        .container-last::before {
            @apply w-full h-full top-0 right-0 absolute;
            content: '';
            background-image: url('../../assets/About/background_last_filter.png');
            background-repeat: no-repeat;
            background-size: cover;
            z-index: -1;
        }

        .container__title {
            @apply text-white font-black text-center text-2xl lg:text-6xl font-roboto;
        }
    }
</style>