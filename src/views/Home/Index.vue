<template class="overflow-x-hidden">
    <About />
    <Services />
    <Carte />
    <Comments />
    <ContactUs />
    <!-- <Footer class="teste"/> -->
</template>

<script>
import About from './About.vue'
import Services from './Services.vue'
import Carte from './Carte.vue'
import Comments from './Comments.vue'
import ContactUs from './ContactUs.vue'
// import Footer from '../../components/Global/Footer.vue'

    export default {
        components: {
            About,
            Services,
            Carte,
            Comments,
            ContactUs,
            // Footer
        }
    }
</script>

<style lang="postcss" scoped>
    
    @layer components {
        .teste {
            @apply absolute;
            bottom: -403.5%;
        }
    }
</style>