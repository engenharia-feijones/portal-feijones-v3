<template>
  <section id="first-service" class="container__first">
    <div class="wrapper">
      <h3 class="wrapper__title">Nosso Serviço</h3>
      <h1 class="wrapper__main">
        Falou em feijão e tecnologia?<br />Pensou no Feijones!
      </h1>
      <h2 class="wrapper__paragraph">
        Chegamos para oferecer praticidade e sabor a sua rotina!<br />
        O Feijones é o seu novo contato de comida congelada, <br />só que com
        uma diferença,<br />nossos pratos tem gostinho de comida caseira feita
        na hora.
      </h2>
      <div class="wrapper_cta_container">
        <span class="wrapper_cta_text cursor-pointer">Saiba mais</span>
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
  .container__first {
    @apply h-screen w-screen flex flex-col justify-center items-center lg:items-start relative z-0;
    background-image: url("../../assets/Services/background_first.png");
    background-size: cover;
    background-position: 30% 50%;
    background-repeat: no-repeat;
  }

  .container__first::before {
    @apply absolute w-full h-full;
    content: "";
    background-image: url("../../assets/Services/background_first_filter.png");
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

  .wrapper {
    @apply flex-initial;
  }

  .wrapper__title {
    @apply text-white;
  }

  .wrapper__main {
    @apply text-primary_intense lg:text-4xl lg:w-auto;
  }

  .wrapper__paragraph {
    @apply text-white lg:text-xl  lg:w-auto;
  }

  .wraper_cta_container {
    @apply flex items-center cursor-pointer space-x-2 relative w-40;
  }

  .wrapper_cta_text {
    @apply text-2xl leading-tight font-roboto font-black text-primary_intense;
  }

  .wrapper_cta_svg {
    @apply  ml-2 inline translate-y-2;
  }
}
</style>