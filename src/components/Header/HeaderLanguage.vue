<template>
  <nav class="nav-container">
    <p class="header-links">Português</p>
    <p class="header-links">Inglês</p>
    <p class="header-links">Espanhol</p>
    <img
      src="../../assets/Svg/x.svg"
      alt=""
      class="mx-auto cursor-pointer lg:hidden"
      @click="$emit('close-language-menu')"
    />
  </nav>
</template>

<script>
export default {
  emits: ["close-language-menu"],
  setup(props, { emit }) {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
@layer components {
  .nav-container {
    @apply space-y-3 mt-3 lg:mt-0 lg:space-x-10 ml-4;
  }
  .header-links {
    @apply text-lg font-medium text-black text-center cursor-pointer transition-all duration-150 hover:opacity-60;
    font-family: "Rockwell";
  }
  .cta {
    @apply text-white text-center py-3 px-11 w-52 rounded-xl;
    background-color: #37210c;
  }
}
</style>
