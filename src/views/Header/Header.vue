<template>
  <div class="header-container">
    <img src="../../assets/Svg/logo.svg" class="logo" @click="goToHome()" />
    <HeaderLinks
      class="hidden lg:block lg:mr-10 relative"
      @show-languages-menu="showLanguagesMenu = !showLanguagesMenu"
    />

    <div
      v-if="showLanguagesMenu"
      class="w-6 h-6 bg-white transform rotate-45 absolute right-20 bottom-0"
    ></div>

    <HeaderLanguage
      v-if="showLanguagesMenu"
      class="
        absolute
        right-14
        -bottom-28
        bg-white
        p-2
        pr-6
        rounded-md
        flex flex-col
        items-end
      "
    />
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
import { reactive, toRefs, ref } from "vue";
import HeaderLinks from "../../components/Header/HeaderLinks.vue";
import HeaderLanguage from "../../components/Header/HeaderLanguage.vue";
import MobileMenu from "../../components/Header/MobileMenu.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    HeaderLinks,
    HeaderLanguage,
    MobileMenu,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      showMobile: false,
    });

    const showLanguagesMenu = ref(false);

    const openMenu = () => {
      state.showMobile = true;
    };
    const closeMenu = () => {
      state.showMobile = false;
    };

    const goToHome = () => {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return {
      ...toRefs(state),
      openMenu,
      closeMenu,
      goToHome,
      showLanguagesMenu,
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