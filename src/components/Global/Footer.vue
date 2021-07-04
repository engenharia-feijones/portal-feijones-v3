<template class="absolute">
  <div class="about-footer-content">
    <div class="logo">
      <img src="../../assets/logo_white.svg" />
    </div>

    <div class="wrapper-social">
      <div class="social-container">
        <h1 class="social-container-title text-center">Siga Nossas Redes Sociais</h1>
        <br />
        <SocialIcons class="justify-center" />
      </div>

      <div class="newsletter-container mt-3">
        <h1 class="newsletter-container-title">Assine A nossa Newsletter</h1>
        <div class="newsletter-content">
          <input
            type="email"
            class="newsletters-input"
            placeholder="Seu E-mail "
            disabled
          />
          <div class="newsletter-cta">Assinar</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SocialIcons from './SocialIcons.vue'
export default {
    components: {
        SocialIcons
    }
}
</script>

<style lang="postcss" >
@layer components {
  .about-footer-content {
    @apply  w-screen h-auto bottom-0 z-0  pb-3 flex flex-col lg:flex-row justify-between items-center;
    /* background-image: url("../../assets/footer.svg"); */
    background-color: black;
  }

  .logo {
    @apply lg:ml-10;
  }

  .wrapper-social {
    @apply flex flex-col pb-12 lg:flex-row lg:space-x-14 mt-10 mr-10;
  }

  .social-container {
    @apply grid-rows-2;
  }

  .social-container-title {
    @apply text-white  font-black;
    font-family: "Roboto Slab";
  }

  .newsletter-container {
    @apply grid-rows-2 place-items-center  ;
  }

  .newsletter-container-title {
    @apply text-white  font-black text-center;
    font-family: "Roboto Slab";
  }

  .newsletter-content {
    @apply flex items-center justify-center ml-10;
  }

  .newsletters-input {
    @apply rounded-tl-lg rounded-bl-lg p-3 text-yellow-700 outline-none font-black relative;
    color: #6b3a0b;
    font-family: "Roboto Slab";
  }

  .newsletter-cta {
    @apply text-white flex rounded-tr-lg rounded-br-lg p-3 items-center cursor-not-allowed;
    font-family: "Roboto Slab";
    background-color: #6b3a0b;
  }
}
</style>
