<template>
  <div class="overflow-x-hidden">
    <Header v-if="isCupomRoute" />
    <router-view />
    <Footer v-if="isCupomRoute" />
  </div>
</template>

<script>
import Header from "./views/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const route = useRoute();
    const isCupomRoute = computed(() => !route?.name?.includes("Cupons"));

    return { isCupomRoute };
  },
};
</script>

