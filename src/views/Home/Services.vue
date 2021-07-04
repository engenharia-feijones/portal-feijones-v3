<template>
  <section id="services" class="services-container">
    <img src="../../assets/Services_hand.png" class="absolute left-24 bottom-0 object-contain hidden lg:block" />
    <div class="wrapper">
      <div>
        <div class="wrapper-box">
          <h3 class="wrapper-title">Nossos serviços</h3>
          <h1 class="wrapper-main-message">Lorem ipsun dolor sit amet</h1>
          <h2 class="wrapper-second-message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <div>
              <div class="wrapper-cta"><span>Peça agora</span></div>
          </div>
        </div>
      </div>
      <div class=""></div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@layer components {
  .services-container {
    @apply h-screen w-screen overflow-x-hidden flex flex-row-reverse justify-around items-center relative z-0;
    background-image: url("../../assets/background_cartes.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .services-container::after {
    @apply absolute w-full h-full bg-white bg-opacity-50 ;
    z-index: -1;
    content: "";
  }

  .wrapper {
    @apply lg:w-4/6 flex justify-center lg:justify-end xl:justify-end 2xl:justify-center;
  }

  .wrapper-box {
      @apply w-80 xl:w-96;
  }

  .wrapper-title {
    @apply lg:text-2xl xl:text-3xl font-black;
    font-family: "Roboto Slab";
    color: #593100;
  }

  .wrapper-main-message {
    @apply text-5xl xl:text-5xl leading-tight font-black;
    font-family: "Roboto Slab";
    color: #e47b18;
  }

  .wrapper-second-message {
    @apply text-lg xl:text-2xl leading-tight mb-2 font-bold;
    font-family: "Rockwell";
    color: #593100;
  }

  .wrapper-cta {
      @apply text-white py-2 px-20 w-64 text-center rounded-xl cursor-pointer font-black;
      background-color: #593100;
      font-family: "Roboto Slab";
  }

  /* @media (min-width: 1024px and max-width: 1280px) {
    .services-container {
      object-fit: contain;
    }
  }

  @media (min-width: 1280px) {
    .services-container {
      background-size: contain;
    }
  } */
}
</style>
