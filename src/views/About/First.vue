<template>
  <section id="first" class="first-container">
      <img src="../../assets/Svg/heart.svg" />
      <h1 class="container__title">Mais que feijão congelado, Feijones!</h1>
      <img src="../../assets/Svg/down_arrow.svg" class="actions" />
  </section>
</template>

<style lang="postcss" scoped>
@layer components {
  .first-container {
    @apply h-screen w-screen flex flex-col items-center justify-center relative z-0 space-y-3;
    background-image: url("../../assets/About/background_first.png");
    background-position: 65%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .first-container::before {
    @apply absolute h-full w-full inset-0 opacity-80;
    content: "";
    background-image: url("../../assets/About/background_first_filter.png");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

  .container__title {
      @apply text-white font-black font-roboto text-center text-2xl lg:text-3xl;
  }
  
  .actions {
      @apply absolute bottom-24 h-12 w-12 cursor-pointer ;
  }
}
</style>