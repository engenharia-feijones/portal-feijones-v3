<template>
  <div class="header-container">
    <img src="../../assets/Svg/logo.svg" class="logo" @click="goToHome()" />
    <HeaderLinks class="hidden lg:block" />
    <div class="hamburger" @click="openMenu()">
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

    <MobileMenu @close="closeMenu()" v-show="showMobile" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import HeaderLinks from "../../components/Header/HeaderLinks.vue";
import MobileMenu from "../../components/Header/MobileMenu.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    HeaderLinks,
    MobileMenu,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      showMobile: false,
    });

    const toggleMenu = () => {
      state.showMobile = !state.showMobile;
    };

    const openMenu = () => {
      state.showMobile = true;
    };
    const closeMenu = () => {
      state.showMobile = false;
    };

    const goToHome = () => router.push("/");

    return {
      ...toRefs(state),
      openMenu,
      closeMenu,
      goToHome,
    };
  },
};
</script>

<style lang="postcss" scoped>
@layer components {
  .header-container {
    @apply flex justify-between items-center my-9 px-9 fixed w-screen  bg-white  bg-opacity-40 py-2 z-50;
  }
  .logo {
    @apply h-20 lg:h-auto cursor-pointer;
  }
  .hamburger {
    @apply block lg:hidden cursor-pointer;
  }
}
</style>