<template>
  <div class="header-container">
    <HeaderLogo class="logo"  />
    <HeaderLinks class="hidden lg:block" />
    <div class="hamburger" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>

    <MobileMenu @close-menu="toggleMenu()" v-show="showMobile" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import HeaderLinks from "../components/Header/HeaderLinks.vue";
import HeaderLogo from "../components/Header/HeaderLogo.vue";
import MobileMenu from '../components/Header/MobileMenu.vue'

export default {
  components: {
    HeaderLinks,
    HeaderLogo,
    MobileMenu
  },
  setup() {
    const state = reactive({
      showMobile: false,
    });

    const toggleMenu = () => {
      state.showMobile = !state.showMobile;
    }

    return {
      ...toRefs(state),
      toggleMenu
    };
  },
};
</script>

<style lang="postcss" scoped>
@layer components {
  .header-container {
    @apply flex justify-between items-center my-9 px-9 fixed w-screen  z-50;
  }

  .logo {
    @apply h-20 lg:h-auto;
  }

  .hamburger {
    @apply block lg:hidden cursor-pointer;
  }
}
</style>
