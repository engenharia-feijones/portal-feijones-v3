<template>
  <div class="overflow-x-hidden">
    <About />
    <Services />
    <Menu id="home__menu" />
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
    ContactUs,
  },

  props: {
    isMenuClick: {
      type: [Boolean, String],
      default: false,
    },
  },

  watch: {
    isMenuClick() {
      if (this.isMenuClick) {
        const menu = document.getElementById("home__menu");
        menu.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    if (this.isMenuClick) {
      const menu = document.getElementById("home__menu");
      menu.scrollIntoView({ behavior: "smooth" });
    }
  },
};
</script>

<style lang="postcss" scoped>
</style>