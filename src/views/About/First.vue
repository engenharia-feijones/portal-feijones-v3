<template>
  <section section="#about" class="about-container">
      <img src="../../assets/heart_about.svg" alt="">
      <h1 class="about-container-title">Mais que feijão congelado, Feijones!</h1>
      <div class="about-container-cta" @click="smothScroll()">
          <img src="../../assets/down_arrow.svg" alt="">
          <img src="../../assets/down_arrow.svg" alt="">
      </div>
  </section>
</template>

<script>

export default {
  setup() {
    const smothScroll = () => {
      document.getElementById("aboutUs").scrollIntoView({ behavior: 'smooth'});
    }

    return { smothScroll }
  }
};
</script>


<style lang="postcss" scoped>
@layer components {
  .about-container {
    @apply w-screen h-screen flex flex-col items-center justify-center relative z-0 ;
    background-image: url("../../assets/background_about.png");
    background-repeat: no-repeat;
    background-position: 60% 50%;
    background-size: cover;
  }

  .about-container::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #6b3a0b;
    z-index: -1;
    opacity: 0.4;
    content: "";
  }

  .about-container-title {
      @apply font-black text-4xl text-white;
      font-family: "Roboto Slab"
  }

  .about-container-cta {
      @apply cursor-pointer lg:mt-32;
      transform: translateY(9rem);
  }
}
</style>
