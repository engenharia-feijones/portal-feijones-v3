<template>
  <section id="about" class="about-container">
    <div class="cards">
      <div class="card first__card">
        <img src="../../assets/About/first__card.png" />
      </div>
      <div class="card second__card">
        <img src="../../assets/About/second__card.png" />
      </div>
    </div>
    <div class="content">
      <h1 class="wrapper__title">Sobre nós</h1>
      <h1 class="wrapper__main">
        Falar da gente é fácil, sabe aquele grupo de amigos apaixonados por
        feijão e tecnologia? Somos nós!
      </h1>
      <h1 class="wrapper__paragraph">
        O Feijones nasceu da necessidade do brasileiro em ter um feijão de
        qualidade compondo sua alimentação no dia a dia. Nós entendemos que
        diante do fluxo de vida cada vez mais acelerado a dificuldade de
        destinar tempo ao preparo aumentou consideravelmente. Pensando nesse
        público, desenvolvemos feijão congelado com a qualidade e sabor do
        feijão caseiro, utilizando o delivery para ofertar comodidade aos nossos
        clientes.
        <br />
        <br />

        A experiência proporcionada por nossa empresa se baseia na construção de
        memórias afetivas, tendo como embasamento a qualidade dos produtos e a
        satisfação.
      </h1>

      <div class="wrapper_cta_container cursor-pointer" @click="goToServices()">
        <span class="wrapper_cta_text">Nossos Serviços</span>
        <img src="../../assets/Svg/right_arrow.svg" class="wrapper_cta_svg" />
      </div>
    </div>
  </section>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const goToServices = () => {
      scrollTo({
        top: 0,
        behavior: "smooth",
      });
      router.push("/services");
    };

    return { goToServices };
  },
};
</script>

<style lang="postcss" scoped>
@layer components {
  .about-container {
    @apply w-screen h-auto lg:h-screen flex flex-col justify-center items-center lg:flex-row  relative z-0;
    background-image: url("../../assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .about-container::before {
    @apply absolute top-0 right-0 w-full h-full;
    background-color: "#F2F2F2";
    opacity: 0.86;
    z-index: -1;
  }

  .content {
    @apply flex flex-col space-y-4 p-2;
  }

  .wrapper__paragraph {
    @apply font-arvo text-sm;
  }

  .wraper_cta_container {
    @apply flex items-center cursor-pointer space-x-4 w-40;
  }

  .wrapper_cta_text {
    @apply text-2xl leading-tight font-roboto font-black text-primary_intense;
  }

  .wrapper_cta_svg {
    @apply inline ml-3 mb-1;
  }

  .cards {
    @apply flex items-center pt-10;
  }

  .card {
    @apply shadow-sm  rounded-xl flex items-center justify-center px-2;
  }

  .first__card {
    @apply w-64 rounded-xl lg:w-60 lg:h-72;
  }
  .second__card {
    @apply h-96 rounded-xl lg:w-72 lg:h-96;
    transform: translateX(-2rem);
  }
}
</style>