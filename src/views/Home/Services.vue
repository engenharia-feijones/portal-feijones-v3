<template>
  <section id="home-services" class="services-container">
    <div class="wrapper mt-10 lg:hidden">
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

    <img src="../../assets/Home/hand.png" class="image" />

    <div class="wrapper">
      <h2 class="wrapper__title">Nossos serviço</h2>
      <h1 class="wrapper__main">
        Falou em comida congelada de qualidade? Pensou no Feijones!
      </h1>
      <h2 class="wrapper__paragraph">
        Chegamos para oferecer praticidade e sabor a sua rotina! O Feijones é o
        seu novo contato de comida congelada, só que com uma diferença, nossos
        pratos tem gostinho de comida caseira feita na hora.
      </h2>

      <span class="wrapper__cta" @click="openWhatsapp()">Peça agora</span>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const openWhatsapp = () => {
      const url = `https://api.whatsapp.com/send?phone=${5571999992891}&text=Olá, gostaria de ver o cardapio!`;
      window.open(url, "_blank");
    };

    return { openWhatsapp };
  },
};
</script>

<style lang="postcss" scoped>
@layer components {
  .services-container {
    @apply w-screen h-auto lg:h-screen flex flex-col items-center justify-center relative z-0 pb-10;
    background-image: url("../../assets/background.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .services-container::before {
    @apply absolute top-0 right-0 w-full h-full;
    background-color: "#F2F2F2";
    opacity: 0.86;
  }

  .image {
    @apply lg:block lg:absolute bottom-0 -left-36 xl:-left-16 2xl:left-10;
    width: 513px;
    height: 626px;
  }

  .wrapper {
    @apply lg:flex-initial;
  }

  .wrapper__main {
    @apply xl:max-w-2xl;
  }

  .wrapper__cta {
    @apply text-white py-2 lg:w-64 text-center px-20 rounded-xl cursor-pointer font-black font-roboto bg-neutral_intense;
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