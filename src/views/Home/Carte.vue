<template>
  <section id="#carte" class="carte-container">
    <div class="carte-container-title">
      <h1 class="word-break">
        Lorem ipsun<br />
        dolor sit amet
      </h1>
    </div>
    <div class="cards-container">
      <div class="card card-1">
        <h1 class="card-title">Bacon</h1>
        <div class="card-cta">Peça agora</div>
        <h1 class="card-info">Saiba mais</h1>
      </div>
      <div class="card card-2">
        <h1 class="card-title">Charque</h1>
        <div class="card-cta">Peça agora</div>
        <h1 class="card-info">Saiba mais</h1>
      </div>
      <div class="card card-3">
        <h1 class="card-title">Vegetariano</h1>
        <div class="card-cta">Peça agora</div>
        <h1 class="card-info">Saiba mais</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@layer components {
  .carte-container {
    @apply h-auto lg:h-screen w-screen flex flex-col items-center justify-center;
    background-image: url("../../assets/background_cartes.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #6b3a0b;
  }

  .carte-container-title {
    @apply text-center text-4xl break-all text-white mb-3 font-black;
    font-family: "Roboto Slab";
  }

  .cards-container {
    @apply flex flex-col space-y-4 pb-4 lg:flex-row lg:space-x-4 lg:space-y-0;
  }

  .card-title,
  .card-cta,
  .card-info {
    font-family: "Roboto Slab";
    @apply text-white font-black;
  }

  .card-title {
    @apply my-20 text-3xl;
  }

  .card-cta {
    @apply rounded-xl py-2 px-10 mb-2 cursor-pointer;
    background-color: #c16108;
  }

  .card-info {
    @apply text-xs cursor-pointer;
  }

  .card {
    @apply rounded-xl w-64 h-80 flex flex-col justify-center items-center;
  }

  .card-1 {
    background-image: url("../../assets/bacon.png");
    background-color: #6b3a0b;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 1;
  }

  .card-1::after,
  .card-2::after,
  .card-3::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    z-index: -10;
    opacity: 0.4;
    content: "";
  }

  .card-2 {
    background-image: url("../../assets/charque.png");
    background-repeat: no-repeat;
    background-color: #6b3a0b;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 1;
  }

  .card-3 {
    background-image: url("../../assets/vegetariano.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 1;
  }
}
</style>
