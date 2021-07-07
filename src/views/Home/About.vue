<template>
  <section id="home-about" class="container-about">
    <div class="wrapper">
      <h2 class="wrapper__title">Quem somos</h2>
      <h1 class="wrapper__main">
        Combinação perfeita entre o feijão e tecnologia!
      </h1>
      <h3 class="wrapper__paragraph">
        Desenvolvemos feijão congelado com a qualidade e sabor do feijão
        caseiro, utilizando o delivery para ofertar comodidade aos nossos
        clientes.
      </h3>
      <div class="wraper_cta_container">
        <span class="wrapper_cta_text">Saiba mais</span>
        <img src="../../assets/Svg/right_arrow.svg" class="wrapper_cta_svg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@layer components {
  .container-about {
    @apply w-screen h-96 lg:h-screen flex items-center justify-center relative z-0;
    background-image: url("../../assets/Home/background.png");
    background-position: 75% 0%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .container-about::before {
    @apply lg:absolute lg:w-full lg:h-full lg:top-0 lg:right-0 opacity-60;
    content: "";
    background-image: url("../../assets/Home/background-filter.png");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

  .wrapper {
    @apply hidden lg:flex;
  }

  .wraper_cta_container {
    @apply flex items-center cursor-pointer space-x-2 relative w-40;
  }

  .wrapper_cta_text {
    @apply text-2xl leading-tight font-roboto font-black text-primary_intense;
  }

  .wrapper_cta_svg {
    @apply absolute bottom-0.5 right-0;
  }
}
</style>