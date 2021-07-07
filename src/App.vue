<template>
  <div class="overflow-x-hidden">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./views/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

