<template>
  <section id="contact-us" class="contact-container">
    <img
      src="../../assets/Home/marmita.png"
      alt=""
      class="mt-10 lg:hidden w-96 h-96"
    />
    <h1 class="contact__title">Queremos te ouvir!</h1>
    <div class="lg:flex space-x-10">
      <form class="form__container" @submit.prevent="sendForm()">
        <input
          class="input__field"
          v-model="comment.name"
          type="text"
          placeholder="Nome completo"
        />
        <input
          class="input__field"
          type="email"
          placeholder="Endereço de E-mail"
          v-model="comment.email"
        />
        <input
          class="input__field"
          type="tel"
          placeholder="Telefone para contato"
          v-model="comment.phone"
          v-mask="'(##) # ####-####'"
        />
        <input
          class="input__field"
          type="text"
          placeholder="Assunto"
          v-model="comment.subject"
        />
        <textarea
          class="input__field text__area text-left"
          type="text"
          placeholder="Deixe aqui a sua mensagem"
          v-model="comment.message"
        />
        <h1
          class="text-white font-medium input__field"
          v-if="showSucessMessage"
        >
          Agradecemos pelo seu feedback!
        </h1>
        <input class="input__field cta" type="submit" value="Enviar" />
      </form>
      <img
        src="../../assets/Home/marmita.png"
        alt=""
        class="hidden lg:block mt-10 marmita"
      />
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const comment = ref({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    const showSucessMessage = ref(false);

    const toggleMessageField = () => {
      showSucessMessage.value = true;
      setTimeout(() => {
        showSucessMessage.value = false;
      }, 10000);
    };

    const sendForm = () => {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "feijonesmailer@gmail.com",
        Password: "cabare1234",
        To: "feijonesmailer@gmail.com",
        From: "feijonesmailer@gmail.com",
        Subject: "Feedback",
        Body: `
        <h1>Nome: ${comment.value.name}</h1>
        <h1>Telefone: ${comment.value.phone}</h1>
        <h1>Assunto: ${comment.value.subject}</h1>
        <h1>Mensagem: ${comment.value.message}</h1>
        
      `,
      }).then(() => toggleMessageField());

      comment.value = {};
    };

    return {
      comment,
      showSucessMessage,
      sendForm,
    };
  },
});
</script>

<style lang="postcss" scoped>
@layer components {
  .contact-container {
    @apply h-auto lg:h-screen w-screen flex flex-col justify-center items-center relative z-0 bg-secundary_intense pb-3;
    background-image: url("../../assets/background_2.png");
    background-position: center;
    background-size: cover;
  }

  .contact__title {
    @apply text-white font-black text-3xl font-roboto;
  }

  .form__container {
    @apply flex flex-col  w-screen px-2 space-y-3  lg:w-96 mt-10;
  }

  .input__field {
    @apply rounded-xl p-3 text-white font-roboto font-light border-2 border-black outline-none;
    background-color: #9d6127;
  }

  .text__area {
    @apply h-28 resize-none;
  }

  .cta {
    @apply font-black cursor-pointer z-40;
    background-color: #40260f;
  }

  .marmita {
    width: 500px;
    height: 500px/;
  }
}
</style>