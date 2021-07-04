<template>
  <section id="contactUs" class="contact-container">
    <h1 class="contact-title">Lorem ipsum dolor</h1>
    <div class="wrapper">
      <form class="form-container" @submit.prevent="sendForm()">
        <input
          class="input-field"
          v-model="comment.name"
          type="text"
          placeholder="Nome completo"
        />
        <input
          class="input-field"
          type="email"
          placeholder="Endereço de E-mail"
          v-model="comment.email"
        />
        <input
          class="input-field"
          type="tel"
          placeholder="Telefone para contato"
          v-model="comment.phone"
        />
        <input
          class="input-field"
          type="text"
          placeholder="Assunto"
          v-model="comment.subject"
        />
        <input
          class="input-field text-area text-left"
          type="text"
          placeholder="Deixei aqui sua mensagem"
          v-model="comment.message"
        />
        <input class="input-field cta" type="submit" value="Enviar" />
      </form>

      <img src="../../assets/marmita.png" class="mt-10 hidden lg:block" />
    </div>

    <!-- <div class="about-footer-content">
      <div class="logo">
        <img src="../../assets/logo_white.svg" />
      </div>

      <div class="wrapper-social">
        <div class="social-container">
          <h1 class="social-container-title">Siga Nossas Redes Sociais</h1>
          <br />
          <SocialIcons class="justify-center" />
        </div>

        <div class="newsletter-container">
          <h1 class="newsletter-container-title">Assine A nossa Newsletter</h1>
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
  </section>
</template>

<script>
import SocialIcons from "../../components/Global/SocialIcons.vue";
import Contact from "../../domain/contact/contact";

import { ref, defineComponent } from "vue";
export default defineComponent({
  components: {
    SocialIcons,
  },

  setup() {
    let comment = ref(new Contact());

    const sendForm = () => {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "feijonesmailer@gmail.com",
        Password: "cabare1234",
        To: "feijonesmailer@gmail.com",
        From: "feijonesmailer@gmail.com",
        Subject: `Feedback - ${comment.subject}`,
        Body: `Nome: ${comment.name}<br />
          Telefone: ${comment.phone}<br />
          Email: ${comment.email}<br />
          Mensagem: ${comment.message}<br />`,
      });
      comment.value  = new Contact()
    };

    return {
      comment,
      sendForm,
    };
  },
});
</script>

<style lang="postcss" scoped>
@layer components {
  .contact-container {
    @apply flex flex-col items-center justify-center h-screen w-screen relative z-10;
    background-image: url("../../assets/background_cartes.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #6b3a0b;
  }

  .contact-title {
    @apply text-white font-black text-3xl lg:text-5xl;
    font-family: "Roboto Slab";
  }

  .form-container {
    @apply flex flex-col space-y-3 flex-1 w-screen px-2 lg:w-96 mt-10;
  }

  .input-field {
    @apply rounded-xl p-3 text-white font-light border-2 border-black outline-none;
    font-family: "Roboto Slab";
    background-color: #9d6127;
  }

  .text-area {
    @apply h-28;
  }

  .cta {
    @apply font-black cursor-pointer z-40;
    background-color: #40260f;
  }

  .wrapper {
    @apply flex space-x-10;
  }

  .about-footer-content {
    @apply w-screen h-80   -bottom-10 left-0 z-20  lg:flex justify-between items-center hidden;
    background-image: url("../../assets/footer_about.svg");
  }

  .logo {
    @apply ml-10;
  }

  .wrapper-social {
    @apply flex space-x-14 mt-10 mr-10;
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

  .custom-shape-divider-bottom-1625336063 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .custom-shape-divider-bottom-1625336063 svg {
    position: relative;
    display: block;
    width: calc(270% + 1.3px);
    height: 115px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-bottom-1625336063 .shape-fill {
    fill: #9d6127;
  }
}
</style>