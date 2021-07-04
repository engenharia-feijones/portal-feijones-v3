<template>
  <First />
  <Bacon />
  <Carte />
  <!-- <Footer class="teste" /> -->
</template>

<script>
import First from "./First.vue";
import Bacon from "./Bacon.vue";
import Carte from "../Home/Carte.vue";
import Footer from '../../components/Global/Footer.vue'
export default {
  components: {
    Bacon,
    First,
    Carte,
    Footer
  },
};
</script>

<style lang="postcss" scoped>
  @layer components {
    .teste {
      @apply absolute;
      bottom: calc(-190% + -63px);
    }
  }
</style>
