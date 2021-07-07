<template>
  <div class="overflow-x-hidden"><First /> <About /><Last /></div>
</template>

<script>
import First from "./First.vue";
import About from "./About.vue";
import Last from "./Last.vue";

export default {
  components: {
    First,
    About,
    Last,
  },
};
</script>