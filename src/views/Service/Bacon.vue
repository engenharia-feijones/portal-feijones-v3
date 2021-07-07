<template>
  <section id="bacon" class="container__bacon">
    <h1 class="content__title">Produtos selecionados</h1>
    <h1 class="content__main">Muito mais sabor para você!</h1>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@layer components {
  .container__bacon {
    @apply h-screen w-screen flex flex-col items-center justify-center relative z-0;
    background-image: url("../../assets/Services/background_last.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container__bacon::before {
    @apply absolute w-full h-full;
    content: "";
    background-image: url("../../assets/Services/background_last_filter.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

  .content__title {
      @apply text-lg text-white font-black font-roboto;
  }

  .content__main {
      @apply text-3xl lg:text-6xl text-white font-black font-roboto;
  }
}
</style>