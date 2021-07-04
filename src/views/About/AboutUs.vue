<template>
  <section id="aboutUs" class="about-us-container">
    <div class="about-us-cards flex-1">
      <div class="card first-card"></div>
      <div class="card second-card"></div>
    </div>
    <div class="about-us-content flex-1">
      <h1 class="about-us-content-title">Sobre nós</h1>
      <h1 class="about-us-content-main">
       Falar da gente é fácil, sabe aquele grupo de amigos apaixonados por  feijão e tecnologia? Somos nós!

      </h1>
      <h1 class="about-us-content-second">
       O Feijones nasceu da necessidade do brasileiro em ter um feijão de qualidade compondo sua alimentação no dia a dia.  Nós entendemos que diante do fluxo de vida cada vez mais acelerado a dificuldade de destinar tempo ao preparo aumentou consideravelmente. Pensando nesse público, desenvolvemos feijão congelado com a qualidade e sabor do feijão caseiro, utilizando o delivery para ofertar comodidade aos nossos clientes. <br /> <br />

A experiência proporcionada por nossa empresa se baseia na construção de memórias afetivas, tendo como embasamento a qualidade dos produtos e a satisfação.
      </h1>
      <h1 @click="navigateToServices()" class="about-us-content-cta">
        Nossos Serviços

        <svg
          class="ml-3"
          style="transform: translateY(3px)"
          width="28"
          height="23"
          viewBox="0 0 28 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 9.54752C1.17157 9.54752 0.5 10.2191 0.5 11.0475C0.5 11.8759 1.17157 12.5475 2 12.5475L2 9.54752ZM27.1258 12.1082C27.7115 11.5224 27.7115 10.5726 27.1258 9.98685L17.5798 0.440913C16.994 -0.144874 16.0443 -0.144874 15.4585 0.440913C14.8727 1.0267 14.8727 1.97645 15.4585 2.56223L23.9438 11.0475L15.4585 19.5328C14.8727 20.1186 14.8727 21.0683 15.4585 21.6541C16.0443 22.2399 16.994 22.2399 17.5798 21.6541L27.1258 12.1082ZM2 12.5475L26.0651 12.5475L26.0651 9.54751L2 9.54752L2 12.5475Z"
            fill="#E47B18"
          />
        </svg>
      </h1>
    </div>
  </section>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const navigateToServices = () => {
      router.push({ name: "Services" });
    };

    return {
      navigateToServices
    }
  },
};
</script>

<style lang="postcss" scoped>
@layer components {
  .about-us-container {
    @apply w-screen h-auto lg:h-screen lg:px-20 flex flex-col lg:flex-row items-center justify-between relative z-10;
    background-image: url("../../assets/background_comment.png");
  }

  .about-us-cards {
    @apply flex flex-col lg:flex-row items-center lg:ml-6 xl:ml-28 2xl:ml-48 justify-end;
  }

  .card {
    @apply shadow-2xl rounded-xl;
  }

  .first-card {
    @apply w-64 h-80;
    background-image: url("../../assets/first_card.png");
  }

  .second-card {
    @apply w-80 h-96;
    transform: translateY(-3rem);
    background-image: url("../../assets/second_card.png");
  }

  .about-us-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .about-us-content-title {
    @apply lg:text-2xl font-black;
    font-family: "Roboto Slab";
  }

  .about-us-content-main {
    @apply text-5xl leading-tight font-black;
    font-family: "Roboto Slab";
    color: #e47b18;
  }

  .about-us-content-second {
    @apply text-2xl leading-tight mb-2 font-bold;
    font-family: "Rockwell";
  }

  .about-us-content-cta {
    @apply text-2xl leading-tight my-3 font-black flex items-center relative cursor-pointer;
    font-family: "Roboto Slab";
    color: #e47b18;
  }

  @media (min-width: 1024px) {
    .second-card {
      transform: translateX(-3rem);
    }
  }
}
</style>
