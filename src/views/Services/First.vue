<template>
  <section id="servicesIndex" class="services-container">
    <div class="wrapper-box">
      <h3 class="wrapper-title">Nosso Serviço</h3>
      <h1 class="wrapper-main-message">
        Lorem ipsun<br class="hidden lg:block" />
        dolor sit amet
      </h1>
      <h2 class="wrapper-second-message">
        Lorem ipsum dolor sit amet,<br class="hidden lg:block" />
        consectetur adipiscing elit.
      </h2>
      <h3 class="wrapper-third-message">
        Lorem ipsum dolor sit amet, consectetur<br class="hidden lg:block" />adipiscing elit. Enim,
        justo interdum et <br class="hidden lg:block" />
        lectus. Leo, quisque neque laoreet<br class="hidden lg:block"  />dignissim eget ut. Consectetur
        cursus.
      </h3>
      <div class="wrapper-cta">
        Saiba mais
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
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>


<style lang="postcss" scoped>
@layer components {
  .services-container {
    @apply h-screen w-screen flex items-center justify-start lg:pl-20 relative z-0;
    background-image: url("../../assets/background_services.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .services-container::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -10;
    opacity: 0.5;
    content: "";
  }

  .wrapper-box {
    /* @apply flex flex-col items-center justify-center; */
  }

  .wrapper-title {
    @apply lg:text-2xl text-white font-black;
    font-family: "Roboto Slab";
  }

  .wrapper-main-message {
    @apply text-xl lg:text-6xl leading-tight font-black;
    font-family: "Roboto Slab";
    color: #e47b18;
  }
  .wrapper-second-message {
    @apply text-xl lg:text-3xl leading-tight mb-2 font-semibold text-white;
    font-family: "Rockwell";
  }

  .wrapper-third-message {
    @apply font-normal leading-tight text-base break-words lg:text-xl text-white;
    font-family: "Rockwell";
  }

  .wrapper-cta {
    @apply text-2xl font-black leading-tight my-3 flex items-center justify-center lg:justify-start relative cursor-pointer;
    font-family: "Roboto Slab";
    color: #e47b18;
  }
}
</style>