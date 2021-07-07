<template>
  <div class="overflow-x-hidden">
    <About />
    <Services />
    <Menu />
    <Comments />
    <ContactUs />
  </div>
</template>

<script>
import About from "./About.vue";
import Services from "./Services.vue";
import Menu from "./Menu.vue";
import Comments from "./Comments.vue";
import ContactUs from "./ContactUs.vue";
export default {
  components: {
    About,
    Services,
    Menu,
    Comments,
    ContactUs
  },
};
</script>

<style lang="postcss" scoped>
</style>