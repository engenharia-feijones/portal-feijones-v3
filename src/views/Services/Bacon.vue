<template>
  <section id="bacon" class="bacon-container">
      <h1 class="bacon-content-title">
          Lorem Ipsum
      </h1>
      <h1 class="bacon-content-main">Lorem ipsum<br /> dolor sit amet.</h1>
      <h1 class="bacon-content-cta">Lorem ipsum</h1>
  </section>
</template>

<script>
export default {};
</script>
<style lang="postcss" scoped>
@layer components {
  .bacon-container {
    @apply w-screen h-screen flex flex-col items-center justify-center relative z-0 overflow-x-hidden;
    background-image: url("../../assets/background_bacon.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .bacon-container::after {
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

  .bacon-content-title {
      @apply text-lg text-white font-black;
      font-family:"Roboto Slab";
  }

  .bacon-content-main {
      @apply text-3xl lg:text-6xl text-white font-black;
      font-family:"Roboto Slab";
  }
  .bacon-content-cta {
      @apply text-xl lg:text-2xl  font-black;
      font-family:"Roboto Slab";
      color: #E47B18;
  }
}
</style>
