<template>
  <section id="footerUs" class="about-footer-container">
    <h1 class="about-footer-title">
      Lorem Ipsum<br class="hidden lg:block" />
      dolor sit amet
    </h1>
    <div>
      <!-- <div class="about-footer-content ">
        <div class="logo">
          <img src="../../assets/logo_white.svg" />
        </div>

        <div class="wrapper">
          <div class="social-container">
            <h1 class="social-container-title">Siga Nossas Redes Sociais</h1>
            <br />
            <SocialIcons class="justify-center" />
          </div>

          <div class="newsletter-container">
            <h1 class="newsletter-container-title">
              Assine A nossa Newsletter
            </h1>
            <div class="newsletter-content">
              <input
                type="email"
                class="newsletters-input"
                placeholder="Seu E-mail "
              />
              <div class="newsletter-cta">Assinar</div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import SocialIcons from "../../components/Global/SocialIcons.vue";

export default {
  components: {
    SocialIcons,
  },
};
</script>


<style lang="postcss" scoped>
@layer components {
  .about-footer-container {
    @apply h-screen w-screen flex items-center justify-center relative z-0;
    background-image: url("../../assets/about_footer.png");
    background-position: 50% 60%;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .about-footer-container::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #6b3a0b;
    z-index: -10;
    opacity: 0.4;
    content: "";
  }

  .about-footer-title {
    @apply text-white font-black text-2xl lg:text-6xl;
    font-family: "Roboto Slab";
  }

  .about-footer-content {
    @apply w-screen h-96  absolute -bottom-24 left-0 z-20  hidden justify-between items-center lg:flex ;
    background-image: url("../../assets/footer_about.svg");
  }

  .logo {
      @apply ml-10;
  }

  .wrapper {
      @apply flex space-x-14 mr-10;
  }

  .social-container {
    @apply grid-rows-2;
  }

  .social-container-title {
    @apply text-white  font-black;
    font-family: "Roboto Slab";
  }

  .newsletter-container {
    @apply grid-rows-2 space-y-4;
  }

  .newsletter-container-title {
    @apply text-white  font-black;
    font-family: "Roboto Slab";
  }

  .newsletter-content {
    @apply flex;
  }

  .newsletters-input {
    @apply rounded-tl-lg rounded-bl-lg p-3 text-yellow-700 outline-none font-black relative;
    color: #6b3a0b;
    font-family: "Roboto Slab";
  }

  .newsletter-cta {
    @apply text-white flex rounded-tr-lg rounded-br-lg p-3 items-center cursor-pointer;
    font-family: "Roboto Slab";
    background-color: #6b3a0b;
  }
}
</style>