<template>
  <div class="overflow-x-hidden">
    <First /> <About id="about__about" /><Last />
  </div>
</template>

<script>
import First from "./First.vue";
import About from "./About.vue";
import Last from "./Last.vue";
import { onMounted } from "vue";

export default {
  components: {
    First,
    About,
    Last,
  },

  setup() {
    onMounted(() => {
      const aboutScreen = document.getElementById("about__about");
      aboutScreen.scrollIntoView({ behavior: "smooth" });
    });
  },
};
</script>