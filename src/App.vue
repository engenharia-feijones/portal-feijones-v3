<template class="relative" v-if="routeName">
  <Header />
  <div>
    <router-view />
  </div>
  <Footer />
  <FixedCTA />
</template>

<script>

import Header from "./views/Header.vue";
import Footer from './components/Global/Footer.vue'
import FixedCTA from './components/Global/FixedCTA.vue'

export default {
  components: {
    Header,
    Footer,
    FixedCTA
  },

  computed: {
   routeName() {
      return this.$route.name !== 'Home'
     } 
  }
};
</script>


<style lang="postcss" scoped>
@layer components {
}
</style>
